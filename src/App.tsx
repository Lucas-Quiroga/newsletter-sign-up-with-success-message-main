import Info from "./components/Info";
import svgDesktop from "./assets/images/illustration-sign-up-desktop.svg";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

function App() {
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100 mx-auto m-5 h-1">
      <div className="card shadow-lg o-hidden border-0 my-5">
        <div className="card-body p-4">
          <Container
            className="container d-flex flex-column justify-content-center align-items-center"
            // style={{ background: "red" }}
          >
            <Row className="mx-auto justify-content-center">
              <Col lg={6}>
                <Info />
              </Col>
              <Col lg={6} style={{ background: "black", height: "20rem" }}>
                <img src={svgDesktop} alt="Desktop SVG" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
