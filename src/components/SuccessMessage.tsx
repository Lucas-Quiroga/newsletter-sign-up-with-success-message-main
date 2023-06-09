import { Container, Button } from "react-bootstrap";
import svgSuccess from "../assets/images/icon-success.svg";
import { useServicesContext } from "../context/ServicesContext";

type SuccessMessageProp = {
  email: string | number;
};

const SuccessMessage = ({ email }: SuccessMessageProp) => {
  const { setSpinnerState } = useServicesContext();

  function handleSpinner() {
    setTimeout(() => {
      setSpinnerState(false);
    }, 2000);
  }

  return (
    <div
      className="card shadow-lg o-hidden border-1 my-5"
      style={{ borderRadius: "2rem", width: "25rem", height: "25rem" }}
    >
      <div className="card-body p-4">
        <img
          src={svgSuccess}
          alt="Success"
          style={{ width: 45, position: "relative", left: "0.5rem" }}
          className="pt-1"
        />
        <Container className="container d-flex flex-column justify-content-center align-items-center text-left pt-2 mx-auto">
          <h1
            className="font-weight-bold"
            style={{ fontSize: "3rem", color: "#24242b " }}
          >
            Thanks for subscribing!
          </h1>
          <p>
            A confirmation email has been sent to{" "}
            <span style={{ fontWeight: 700 }}>{email}</span>. Please open it and
            click the button inside to confirm your subscription.
          </p>
          <Button
            href="/"
            style={{
              width: "100%",
              background: "#191a32",
              borderColor: "#24242b ",
              color: "white",
            }}
            className="mt-3 text-center"
            onClick={handleSpinner}
          >
            Dismiss message
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default SuccessMessage;
