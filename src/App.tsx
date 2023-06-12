import Info from "./components/Info";
import svgDesktop from "./assets/images/illustration-sign-up-desktop.svg";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NewsLetterForm from "./components/NewsLetterForm";
import SuccessMessage from "./components/SuccessMessage";
import { useServicesContext } from "./context/ServicesContext";
import { Spinner } from "react-bootstrap";
import "./App.css";

function App() {
  const { validate, email, spinnerState } = useServicesContext();

  if (spinnerState) {
    return (
      <div className="container mt-5">
        <div className="d-flex align-items-center justify-content-center flex-column vh-100">
          <Spinner animation="border" role="status" style={{ color: "white" }}>
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </div>
    );
  }

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100 mx-auto card-app">
      {validate ? (
        <SuccessMessage email={email} />
      ) : (
        <div
          className="card shadow-lg o-hidden border-1 my-5 "
          style={{ borderRadius: "3rem" }}
        >
          <div className="card-body p-4">
            <Container className="container d-flex flex-column justify-content-center align-items-center">
              <Row className="mx-auto justify-content-center col_flex">
                <Col lg={6} md={12} sm={12} xs={12} className="col_1">
                  <Info />
                  <NewsLetterForm />
                </Col>
                <Col
                  lg={6}
                  md={12}
                  sm={12}
                  xs={12}
                  className="d-flex justify-content-center"
                >
                  <img
                    src={svgDesktop}
                    alt="Desktop SVG"
                    style={{
                      // maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                    className="img_col img-fluid"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

// {emailVerified ? (
//   <SuccessMessage email={email} />
// ) : (
