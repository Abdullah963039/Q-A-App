import { Col, Container, Row } from "react-bootstrap";
import AddQuestionForm from "./components/AddQuestionForm";
import QuestionsStack from "./components/QuestionsStack";
import { ToastContainer } from "react-toastify";
import "./index.css";
function App() {
  return (
    <Container className=" my-4  py-3 px-2 px-sm-0">
      <Row className="align-self-start">
        <Col sm={4} className="text-center fs-3 fw-bold">
          أسئلة وأجوبة شائعة
        </Col>
        <Col className="p-0">
          <AddQuestionForm />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={4}></Col>
        <Col className="bg-light rounded p-0">
          <QuestionsStack />
        </Col>
      </Row>
      <ToastContainer autoClose={3000} />
    </Container>
  );
}

export default App;
