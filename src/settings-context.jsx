import { createContext, useContext, useState } from "react";

export const SettingsContext = createContext();

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    currency: 'CZK',
  });

  const setCurrency = (newCurrency) => {
    setSettings({...settings, currency: newCurrency})
  };

  return (
    <SettingsContext.Provider value={{ ...settings, setCurrency }}>
      {children}
    </SettingsContext.Provider>
  );
};
