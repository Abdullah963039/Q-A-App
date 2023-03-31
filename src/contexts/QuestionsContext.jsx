import React, { useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const QuestionContext = React.createContext(null);

export function useQuestion() {
  return useContext(QuestionContext);
}

export function QuestionsProvider({ children }) {
  const [questions, setQuestions] = useLocalStorage("Questions", []);
  const notify = (msg, type) => {
    switch (type) {
      case "error":
        toast.error(msg);
        break;
      case "success":
        toast.success(msg);
        break;
      case "warn":
        toast.warning(msg);
        break;
      default:
        toast.info(msg);
    }
  };

  function addQuestion(value, answer) {
    setQuestions((prevQuestion) => {
      if (questions.find((q) => q.questionValue === value)) {
        notify("السؤال موجود مسبقاً !", "warn");
        return prevQuestion;
      }
      notify("تمت الإضافة بنجاح", "success");
      return [
        ...prevQuestion,
        { questionId: uuid(), questionValue: value, answer },
      ];
    });
  }
  function deleteQuestion(id) {
    setQuestions(questions.filter((question) => question.questionId !== id));
  }
  function clearQuestions() {
    setQuestions([]);
  }

  return (
    <QuestionContext.Provider
      value={{
        questions,
        addQuestion,
        deleteQuestion,
        clearQuestions,
        notify,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
}
