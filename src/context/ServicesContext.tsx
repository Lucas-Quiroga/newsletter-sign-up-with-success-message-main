import { createContext, useContext, useState } from "react";
import { Howl } from "howler";
import soundFile from "../assets/sounds/sound.mp3";

interface ServicesContextValue {
  validate: boolean;
  setValidate: React.Dispatch<React.SetStateAction<boolean>>;
  email: string | number;
  errorMessage: boolean;
  spinnerState: boolean;
  setErrorMessage: React.Dispatch<React.SetStateAction<boolean>>;
  setSpinnerState: React.Dispatch<React.SetStateAction<boolean>>;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
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
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [spinnerState, setSpinnerState] = useState(false);

  const sound = new Howl({
    src: [soundFile],
    volume: 0.1,
  });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setValidate(true);
      sound.play();
      setSpinnerState(true);
      setTimeout(() => {
        setSpinnerState(false);
      }, 1000);
    } else {
      setErrorMessage(true);
    }
  };

  const value: ServicesContextValue = {
    errorMessage,
    email,
    validate,
    spinnerState,
    setValidate,
    setErrorMessage,
    setSpinnerState,
    handleEmailChange,
    handleSubmit,
  };

  return (
    <ServicesContext.Provider value={value}>
      {children}
    </ServicesContext.Provider>
  );
};
