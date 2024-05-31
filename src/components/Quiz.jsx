import React from "react";
import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import quizCompletedIcon from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  //處理用戶選擇答案的操作 useCallback確保 handleSelectAnswer函數在組件的整個生命週期中保持不變，不會在每次重新渲染時重新創建。這對於性能優化特別有用，尤其是當這個函數被傳遞給子組件或用作依賴時。
  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

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

  //答案洗牌
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          //當用戶在指定時間內沒有選擇答案時，QuestionTimer 會自動調用 handleSkipAnswer，這樣當前問題會被標記為跳過, 確保測驗流程不會因為用戶沒有選擇答案而卡住。
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
