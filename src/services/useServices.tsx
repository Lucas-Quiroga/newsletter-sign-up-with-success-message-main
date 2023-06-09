import { useState } from "react";
import { useServicesContext } from "../context/ServicesContext";

const useServices = () => {
  const { validate, setValidate } = useServicesContext();

  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [email, setEmail] = useState("");

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
    } else {
      setErrorMessage(true);
    }
  };

  return {
    errorMessage,
    email,
    validate,
    setErrorMessage,
    handleEmailChange,
    validateEmail,
    handleSubmit,
  };
};

export default useServices;
