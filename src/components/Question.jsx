import React from "react";
import { Accordion, Button, Col, Row } from "react-bootstrap";
import { useQuestion } from "../contexts/QuestionsContext";

export default function Question({
  questionId,
  questionValue,
  answer,
  eventKey,
}) {
  const { deleteQuestion, notify } = useQuestion();

  function handleDeleteButton(e) {
    notify("تم حذف السؤال بنجاح", "success");
    deleteQuestion(questionId);
  }

  return (
    <Accordion id={questionId}>
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>
          <span className="answerValue text-end">{questionValue}</span>
        </Accordion.Header>
        <Accordion.Body>
          <Row className="align-items-center">
            <Col sm={9} className="answerValue text-end">
              {answer}
            </Col>
            <Col sm={3} className="p-0 text-start">
              <Button
                variant="outline-danger"
                className="w-100 mt-3 mt-sm-0"
                onClick={handleDeleteButton}
              >
                حذف
              </Button>
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
