import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/FormStyles.css";
// import { useServices } from "../services/useServices";

// type NewsLetterFormProps = {
//   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
// };

const NewsLetterForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [validate, setValidate] = useState(false);

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
      console.log("el correo está bien");
      setValidate(true);
    } else {
      setErrorMessage("está mal");
      console.log("el correo está mal");
    }
  };
  // const { errorMessage, handleEmailChange, email, setErrorMessage } =
  //   useServices();

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [errorMessage]);

  return (
    <div className="container mt-5">
      <Form onSubmit={handleSubmit} className="d-flex flex-column">
        <Form.Group controlId="formEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Label
            style={{
              position: "relative",
              left: "7rem",
              display: errorMessage ? "" : "none",
              color: "red",
            }}
          >
            {errorMessage ? "Valid email required" : "Email Address"}
          </Form.Label>

          <Form.Control
            type="email"
            placeholder="email@company.com"
            value={email}
            onChange={handleEmailChange}
            className={errorMessage ? "error-input" : ""}
          />
        </Form.Group>
        <Button type="submit" variant="dark">
          Subscribe to monthly newsletter
        </Button>
      </Form>
    </div>
  );
};

export default NewsLetterForm;
