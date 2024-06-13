import React from "react";
import { useState, useEffect } from "react";

//timeout倒數總時間 onTimeout倒計時結束時調用的回調函數
const QuestionTimer = ({ timeout, onTimeout, mode }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("setting timeout");
    const timer = setTimeout(onTimeout, timeout);

    //clearTimeout確保當組件重新渲染（例如 timeout 或 onTimeout發生變化時）或卸載時，不會有多餘的計時器在後台運行，避免潛在的內存洩漏和不必要的函數調用。
    //清理函數會調用 clearTimeout 來取消之前設置的計時器
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  //每隔 100 毫秒更新一次 remainingTime。
  useEffect(() => {
    console.log("setting interval");

    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
    />
  );
};

export default QuestionTimer;
