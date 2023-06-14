import { Container, Row, Col, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useServicesContext } from "./context/ServicesContext";
import Info from "./components/Info";
import NewsLetterForm from "./components/NewsLetterForm";
import SuccessMessage from "./components/SuccessMessage";
import svgDesktop from "./assets/images/illustration-sign-up-desktop.svg";
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
    <Container className="container d-flex align-items-center justify-content-center vh-100 mx-auto card-app">
      {validate ? (
        <SuccessMessage email={email} />
      ) : (
        <div
          style={{
            background: "white",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "2rem",
            margin: 0,
          }}
          className="divContainer"
        >
          <Container className=" p-4 mx-auto container_f">
            <Container className=" d-flex flex-column justify-content-center align-items-center">
              <Row className="mx-auto justify-content-center col_flex g-1">
                <Col lg={6} md={6} sm={12} xs={12} className="col_1">
                  <Info />
                  <NewsLetterForm />
                </Col>
                <Col
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  className="d-flex justify-content-center"
                >
                  <img
                    src={svgDesktop}
                    alt="Desktop SVG"
                    style={{
                      maxWidth: "100%",
                    }}
                    className="img_col "
                  />
                </Col>
              </Row>
            </Container>
          </Container>
        </div>
      )}
    </Container>
  );
}

export default App;
