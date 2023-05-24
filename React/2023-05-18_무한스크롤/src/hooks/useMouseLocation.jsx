import { useEffect, useState } from 'react';

export function useMouseLocation(iniVAl) {
  const [mouseLocation, setMouseLocation] = useState(iniVAl || { x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener('mousemove', (event) => {
      setMouseLocation({ x: event.x, y: event.y });
    });
  }, []);

  return mouseLocation;
}
