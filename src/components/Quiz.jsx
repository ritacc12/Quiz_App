import React from "react";
import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import quizCompletedIcon from "../assets/quiz-complete.png";
// import QuestionTimer from "./QuestionTimer.jsx";
// import Answers from "./Answers.jsx";
import Questions from "./Questions.jsx";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]); //儲存用戶的答案
  const [answerState, setAnswerState] = useState(""); //追蹤當前問題的答案狀態

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  //處理用戶選擇答案的操作 useCallback確保 handleSelectAnswer函數在組件的整個生命週期中保持不變，不會在每次重新渲染時重新創建。這對於性能優化特別有用，尤其是當這個函數被傳遞給子組件或用作依賴時。
  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnswerState("answered");
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  //處理跳過答案的操作 handleSkipAnswer僅在 handleSelectAnswer 改變時才會重新創建，有助於性能優化。
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  //設定完成後畫面
  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompletedIcon} alt="icon"></img>
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Questions
        key={activeQuestionIndex}
        questionText={QUESTIONS[activeQuestionIndex].text}
        answers={QUESTIONS[activeQuestionIndex].answers}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        answerState={answerState}
        onSelect={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
