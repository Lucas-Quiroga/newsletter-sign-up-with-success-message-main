import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/FormStyles.css";
import { useServicesContext } from "../context/ServicesContext";

const NewsLetterForm = () => {
  const {
    email,
    errorMessage,
    handleEmailChange,
    handleSubmit,
    setErrorMessage,
  } = useServicesContext();

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
          <Form.Label style={{ fontSize: "0.9rem" }}>Email Address</Form.Label>
          <Form.Label
            className={`text-center mt-2 ${
              errorMessage ? "d-block" : "d-none"
            } text-danger`}
          >
            {errorMessage ? "Valid email required" : "Email Address"}
          </Form.Label>

          <Form.Control
            type="email"
            placeholder="email@company.com"
            value={email}
            onChange={handleEmailChange}
            className={errorMessage ? "error-input" : ""}
            style={{ height: "3.5rem" }}
          />
        </Form.Group>
        <Button
          type="submit"
          variant="dark"
          className="mt-4"
          style={{
            width: "100%",
            background: "#191a32",
            borderColor: "#24242b ",
            color: "white",
            height: "3.5rem",
          }}
        >
          Subscribe to monthly newsletter
        </Button>
      </Form>
    </div>
  );
};

export default NewsLetterForm;
