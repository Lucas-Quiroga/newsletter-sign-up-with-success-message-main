import { useState } from "react";

export const useServices = () => {
  const [emailVerified, setEmailVerified] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === "") {
      setErrorMessage("Please enter your email.");
    } else if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
    } else {
      // setSuccessMessage(
      //   `Thank you! Your email (${email}) has been successfully submitted.`
      // );
      setEmail("");
      setErrorMessage("");
      setEmailVerified(!emailVerified);
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  return {
    successMessage,
    setSuccessMessage,
    errorMessage,
    setErrorMessage,
    handleSubmit,
    handleEmailChange,
    email,
    emailVerified,
  };
};
