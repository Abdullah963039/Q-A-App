import React, { useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useQuestion } from "../contexts/QuestionsContext";

export default function AddQuestionForm() {
  const { addQuestion } = useQuestion();

  const questionRef = useRef("");
  const answerRef = useRef("");

  function onSubmittingData(e) {
    // ? Prevent Reloading Page
    e.preventDefault();

    // ? Get User Input Values
    let addQuestionValue = questionRef.current.value;
    let addAnswerValue = answerRef.current.value;

    // * Add That Values To Local Storage
    addQuestion(addQuestionValue, addAnswerValue);
    // * Reset Input Values
    e.target.reset();
  }

  return (
    <Form className="py-2" onSubmit={onSubmittingData}>
      <Row className="g-2 align-items-center justify-content-between">
        <Form.Group as={Col}>
          <Form.Control
            ref={questionRef}
            type="text"
            placeholder="أدخل سؤالاً"
            required
            id="questionForm"
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Control
            ref={answerRef}
            type="text"
            placeholder="أدخل جواباً"
            required
            id="answerForm"
          />
        </Form.Group>
        <Col sm={2} className="ms-auto">
          <Button type="submit" variant="outline-success w-100 text-center">
            إضافة
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
