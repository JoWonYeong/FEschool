import { useEffect, useState } from 'react';

export default function useScrollChecker() {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsBottom(
        Math.ceil(document.documentElement.scrollTop + window.innerHeight) +
          30 >=
          document.documentElement.offsetHeight
      );
    });
  }, []);

  return isBottom;
}
