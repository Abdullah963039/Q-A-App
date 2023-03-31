import React from "react";
import { Button, Stack } from "react-bootstrap";
import { useQuestion } from "../contexts/QuestionsContext";
import Question from "./Question";

export default function QuestionsStack() {
  const { questions, clearQuestions, notify } = useQuestion();

  let questionsCount = questions.length;

  return (
    <>
      {questionsCount === 0 ? (
        <p className="p-3 fs-4 fw-bold text-center">لا يوجد اسئلة الان</p>
      ) : (
        <Stack>
          {questions.map((question, index) => {
            // questionId, questionValue, answer
            return (
              <Question
                key={question.questionId}
                eventKey={index}
                questionId={question.questionId}
                questionValue={question.questionValue}
                answer={question.answer}
              />
            );
          })}
          <Button
            variant="danger"
            className="w-100 mt-3"
            onClick={() => {
              clearQuestions();
              notify("تم مسح جميع البيانات", "error");
            }}
          >
            مسح الكل
          </Button>
        </Stack>
      )}
    </>
  );
}
