/**
 * Shared frontend security utilities for input/output sanitization,
 * URL validation, CSV neutralization, and safe file upload checks.
 */

const HTML_ESCAPE_MAP = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;'
};

/**
 * Escapes untrusted strings before inserting into HTML contexts.
 */
export function escapeHtml(value) {
  if (value === null || value === undefined) return '';
  return String(value).replace(/[&<>"'/]/g, (char) => HTML_ESCAPE_MAP[char]);
}

/**
 * Validates and sanitizes URLs for href/src attributes.
 * Blocks javascript:, vbscript:, and untrusted data: URIs (such as SVG or HTML).
 */
export function sanitizeUrl(rawUrl, options = {}) {
  const {
    allowDataPdf = false,
    allowDataImages = false,
    allowMailtoTel = false,
    fallback = '#'
  } = options;

  if (!rawUrl || typeof rawUrl !== 'string') return fallback;
  const trimmed = rawUrl.trim();
  if (!trimmed) return fallback;

  // Reject control characters or whitespace tricks inside schemes
  const normalized = trimmed.replace(/[\u0000-\u001F\u007F\s]+/g, '').toLowerCase();

  // Allow safe relative paths (not protocol-relative //)
  if (trimmed.startsWith('/') && !trimmed.startsWith('//')) {
    return trimmed;
  }

  if (normalized.startsWith('https://') || normalized.startsWith('http://')) {
    return trimmed;
  }

  if (allowMailtoTel && (normalized.startsWith('mailto:') || normalized.startsWith('tel:'))) {
    return trimmed;
  }

  if (allowDataImages && /^data:image\/(png|jpeg|jpg|webp|gif);base64,/i.test(trimmed)) {
    return trimmed;
  }

  if (allowDataPdf && /^data:application\/pdf;base64,/i.test(trimmed)) {
    return trimmed;
  }

  return fallback;
}

/**
 * Neutralizes spreadsheet formula injection (CSV Injection) and escapes CSV quotes.
 */
export function sanitizeCsvCell(value) {
  const str = value === null || value === undefined ? '' : String(value);
  const trimmedStart = str.replace(/^[\u0000-\u0020]+/, '');
  const isFormulaRisk = /^[=+\-@\t\r]/.test(str) || /^[=+\-@\t\r]/.test(trimmedStart);
  const safeStr = isFormulaRisk ? `'${str}` : str;
  return `"${safeStr.replace(/"/g, '""')}"`;
}

/**
 * Sanitizes filenames before constructing storage object paths.
 */
export function sanitizeFilename(filename, defaultName = 'file') {
  if (!filename || typeof filename !== 'string') return defaultName;
  const baseName = filename.split(/[/\\]/).pop() || defaultName;
  const cleaned = baseName.replace(/[^a-zA-Z0-9._-]/g, '_').replace(/\.{2,}/g, '.');
  return cleaned.slice(0, 120) || defaultName;
}

export const ALLOWED_IMAGE_MIME_TYPES = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif'
]);

export const ALLOWED_IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif']);

export const ALLOWED_DOC_MIME_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/plain'
]);

export const ALLOWED_DOC_EXTENSIONS = new Set(['.pdf', '.doc', '.docx', '.txt']);

/**
 * Validates file extension and MIME type against an explicit allowlist.
 */
export function validateUploadFile(file, { allowedMimes, allowedExtensions, maxSizeBytes }) {
  if (!file) return { valid: false, error: 'No file selected.' };
  const extMatch = (file.name || '').toLowerCase().match(/\.[a-z0-9]+$/);
  const ext = extMatch ? extMatch[0] : '';

  if (!allowedExtensions.has(ext)) {
    return { valid: false, error: `Unsupported file extension "${ext || 'unknown'}".` };
  }
  if (file.type && !allowedMimes.has(file.type.toLowerCase())) {
    return { valid: false, error: `Unsupported file MIME type "${file.type}".` };
  }
  if (maxSizeBytes && file.size > maxSizeBytes) {
    const maxMb = (maxSizeBytes / (1024 * 1024)).toFixed(1);
    return { valid: false, error: `File exceeds maximum allowed size (${maxMb} MB).` };
  }
  return { valid: true, safeName: sanitizeFilename(file.name) };
}
