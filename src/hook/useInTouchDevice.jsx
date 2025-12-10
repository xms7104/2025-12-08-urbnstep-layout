import { useState, useEffect } from 'react';

function useIsTouchDevice() {
  const [isTouchDevice, setIsTouchDevice] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsTouchDevice(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isTouchDevice;
}

export default useIsTouchDevice;
