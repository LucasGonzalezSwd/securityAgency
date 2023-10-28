import { createContext, useContext } from 'react';

const NavigationContext = createContext();

/* eslint-disable-next-line react-refresh/only-export-components */
export function useCustomNavigation() {
  return useContext(NavigationContext);
}

/* eslint-disable-next-line react/prop-types */
export function CustomNavigationProvider({ children }) {
  const navigate = (path) => {
    window.location.href = path; // Cambia la ubicación de la ventana al nuevo path
  };

  return (
    <NavigationContext.Provider value={navigate}>
      {children}
    </NavigationContext.Provider>
  );
}
