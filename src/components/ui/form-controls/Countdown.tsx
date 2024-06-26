import React, { useEffect, useState } from 'react';
import './Countdown.css';

interface CountdownProps {
  duration: number; // тривалість у секундах
}

const Countdown: React.FC<CountdownProps> = ({ duration }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  // Визначення довжини периметра кола
  const circumference = 2 * Math.PI * 45;
  // Обчислення прогресу
  const progress = (timeLeft / duration) * circumference;

  return (
    <div className="countdown">
      <svg className="progress-ring" width="120" height="120">
        <circle
          className="progress-ring__circle"
          stroke="white"
          strokeWidth="4"
          fill="transparent"
          r="45"
          cx="60"
          cy="60"
          style={{ strokeDasharray: `${circumference} ${circumference}`, strokeDashoffset: circumference - progress }}
        />
      </svg>
      <div className="timer">{formatTime(timeLeft)}</div>
    </div>
  );
}

export default Countdown;
