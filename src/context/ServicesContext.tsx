import { createContext, useContext, useState } from "react";

interface ServicesContextValue {
  validate: boolean;
  setValidate: React.Dispatch<React.SetStateAction<boolean>>;
}

const ServicesContext = createContext<ServicesContextValue | undefined>(
  undefined
);

export const useServicesContext = (): ServicesContextValue => {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error(
      "useServicesContext must be used within a ServicesContextProvider"
    );
  }
  return context;
};

interface ServicesContextProviderProps {
  children: React.ReactNode;
}

export const ServicesContextProvider = ({
  children,
}: ServicesContextProviderProps) => {
  const [validate, setValidate] = useState(false);

  const value: ServicesContextValue = {
    validate,
    setValidate,
  };

  return (
    <ServicesContext.Provider value={value}>
      {children}
    </ServicesContext.Provider>
  );
};
