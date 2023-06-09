import Info from "./components/Info";
import svgDesktop from "./assets/images/illustration-sign-up-desktop.svg";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import useServices from "./services/useServices";
import NewsLetterForm from "./components/NewsLetterForm";

function App() {
  const { validate } = useServices();

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100 mx-auto m-5 h-1">
      {validate ? (
        <h1>validado</h1>
      ) : (
        <div
          className="card shadow-lg o-hidden border-1 my-5"
          style={{ borderRadius: "4rem" }}
        >
          <div className="card-body p-4">
            <Container className="container d-flex flex-column justify-content-center align-items-center">
              <Row className="mx-auto justify-content-center">
                <Col lg={6}>
                  <Info />
                  <NewsLetterForm />
                </Col>
                <Col lg={6}>
                  <img src={svgDesktop} alt="Desktop SVG" />
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
