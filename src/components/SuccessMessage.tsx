import { Button } from "react-bootstrap";
import svgSuccess from "../assets/images/icon-success.svg";
import { useServicesContext } from "../context/ServicesContext";
import "../styles/SuccesMessageStyles.css";

type SuccessMessageProp = {
  email: string | number;
};

const SuccessMessage = ({ email }: SuccessMessageProp) => {
  const { setSpinnerState, setValidate, validate } = useServicesContext();

  function handleSpinner() {
    setSpinnerState(true);
    setTimeout(() => {
      setSpinnerState(false);
      setValidate(!validate);
    }, 1000);
  }

  const successMessageStyles = {
    borderRadius: "2rem",
    width: "25rem",
    height: "25rem",
  };

  return (
    <div
      className="card shadow-lg o-hidden border-1 my-5 success-message"
      style={successMessageStyles}
    >
      <div className="card-body p-4 success-message_children">
        <img
          src={svgSuccess}
          alt="Success"
          style={{ width: 45, position: "relative", left: "0.5rem" }}
          className="pt-1 img-success"
        />
        <div className="container d-flex flex-column justify-content-center align-items-center text-left pt-2 mx-auto">
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
            style={{
              width: "100%",
              background: "#191a32",
              borderColor: "#24242b ",
              color: "white",
            }}
            className="mt-3 text-center button-success"
            onClick={handleSpinner}
          >
            Dismiss message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
