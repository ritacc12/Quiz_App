import React from "react";
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";

const Questions = ({
  questionText,
  answers,
  onSelect,
  selectedAnswer,
  answerState,
  onSkipAnswer,
}) => {
  return (
    <div id="question">
      <QuestionTimer
        timeout={10000}
        //當用戶在指定時間內沒有選擇答案時，QuestionTimer 會自動調用 handleSkipAnswer，這樣當前問題會被標記為跳過, 確保測驗流程不會因為用戶沒有選擇答案而卡住。
        onTimeout={onSkipAnswer}
      />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelect}
      />
    </div>
  );
};

export default Questions;
