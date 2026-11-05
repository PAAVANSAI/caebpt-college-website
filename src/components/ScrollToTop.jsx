import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, search } = useLocation();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    const prevPath = prevPathRef.current;
    prevPathRef.current = pathname;

    // Check if transition is merely switching in-page sub-tabs within the same parent section
    const isAcademicTabSwitch =
      prevPath.startsWith('/academics') && pathname.startsWith('/academics');
    const isWelfareTabSwitch =
      prevPath.startsWith('/student-welfare') && pathname.startsWith('/student-welfare');
    const isSamePathOnlySearchChange = prevPath === pathname;

    if (isAcademicTabSwitch || isWelfareTabSwitch || isSamePathOnlySearchChange) {
      // Do not jump scroll when merely switching tabs in-place
      return;
    }

    // Full page navigation — scroll to top
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    } catch {
      window.scrollTo(0, 0);
    }
  }, [pathname, search]);

  return null;
}


