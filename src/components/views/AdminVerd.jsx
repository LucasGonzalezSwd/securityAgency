import { useState, useEffect } from 'react';
import { AdminPanel } from './AdminPanel';
import { AdminPanelMob } from './AdminPanelMob';

export const AdminVerd = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div>
      {windowWidth <= 850 ? <AdminPanelMob /> : <AdminPanel />}
    </div>
  );
};