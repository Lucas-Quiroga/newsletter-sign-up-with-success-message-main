import { Container } from "react-bootstrap";

type SuccessMessageProp = {
  email: string;
};

const SuccessMessage = ({ email }: SuccessMessageProp) => {
  return (
    <div
      className="card shadow-lg o-hidden border-1 my-5"
      style={{ borderRadius: "4rem" }}
    >
      <div className="card-body p-4">
        <Container className="container d-flex flex-column justify-content-center align-items-center">
          <h1>Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to <span>{email}</span> Please
            open it and click the button inside to confirm your subscription.
          </p>
          <button>Dismiss message</button>
        </Container>
      </div>
    </div>
  );
};

export default SuccessMessage;
