import { createContext, useState } from "react";

export const DropdownContext = createContext({
  dropdownStatus: false,
  setDropdownStatus: () => 0,
});

export const DropdownProvider = ({ children }) => {
  const [dropdownStatus, setDropdownStatus] = useState(false);

  const value = { dropdownStatus, setDropdownStatus };

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};
