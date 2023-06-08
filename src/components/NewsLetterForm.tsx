import { useEffect } from "react";
import { Alert, Form, Button } from "react-bootstrap";
import "../styles/FormStyles.css";
import { useServices } from "../services/useServices";

type NewsLetterFormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const NewsLetterForm = ({ handleSubmit }: NewsLetterFormProps) => {
  const {
    successMessage,
    errorMessage,
    handleEmailChange,
    email,
    setErrorMessage,
  } = useServices();

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
    <div className="container">
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
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
      {/* {errorMessage && <Alert variant="danger">{errorMessage}</Alert>} */}
    </div>
  );
};

export default NewsLetterForm;
