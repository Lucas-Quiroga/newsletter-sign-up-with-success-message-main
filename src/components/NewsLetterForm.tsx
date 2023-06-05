import { useState, useEffect } from "react";
import { Alert, Form, Button } from "react-bootstrap";

const NewsLetterForm = () => {
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
      setSuccessMessage(
        `Thank you! Your email (${email}) has been successfully submitted.`
      );
      setEmail("");
      setErrorMessage("");
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 2000); // Cambia el valor 2000 a la cantidad de milisegundos que deseas que el mensaje se muestre antes de desaparecer

      return () => {
        clearTimeout(timer);
      };
    }
  }, [successMessage]);

  return (
    <div className="container">
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      <Form onSubmit={handleSubmit} className="d-flex flex-column">
        <Form.Group controlId="formEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="email@company.com"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>
        <Button type="submit" variant="dark">
          Subscribe to monthly newsletter
        </Button>
      </Form>
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
    </div>
  );
};

export default NewsLetterForm;
