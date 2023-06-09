import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/FormStyles.css";
import useServices from "../services/useServices";

const NewsLetterForm = () => {
  const {
    email,
    errorMessage,
    handleEmailChange,
    handleSubmit,
    setErrorMessage,
  } = useServices();

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(false);
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
              left: "9rem",
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
        <Button type="submit" variant="dark" className="mt-3">
          Subscribe to monthly newsletter
        </Button>
      </Form>
    </div>
  );
};

export default NewsLetterForm;
