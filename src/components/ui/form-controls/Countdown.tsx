import React, { useEffect, useState } from 'react';
import './Countdown.css';

interface CountdownProps {
  duration: number; 
  size?: number;
  onTimeUpdate?: (timeLeft: number) => void;
}

const Countdown: React.FC<CountdownProps> = ({ duration, size = 60, onTimeUpdate }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  useEffect(() => {
    if (onTimeUpdate) {
      onTimeUpdate(timeLeft);
    }
  }, [timeLeft, onTimeUpdate]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const radius = size / 2 - 4; 
  const circumference = 2 * Math.PI * radius; 
  const progress = (timeLeft / duration) * circumference;

  return (
    <div className={`countdown ${timeLeft === 0 ? 'end' : ''}`} style={{ width: size, height: size }}>
      <svg className="progress-ring" width={size} height={size}>
        <circle
          className="progress-ring__circle"
          stroke="var(--line)"
          strokeWidth="4"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{ strokeDasharray: `${circumference} ${circumference}`, strokeDashoffset: circumference - progress }}
        />
      </svg>
      <div className="timer" style={{ fontSize: size / 4 }}>{formatTime(timeLeft)}</div>
    </div>
  );
}

export default Countdown;
