"use client";
import styles from "./BouncingDivs.module.css";
import { useState, useEffect } from 'react';

const getRandomNumber = (min, max) => Math.random() * (max - min) + min;

export default function BouncingDivs() {
  const [divs, setDivs] = useState([]);
  const divsData = Array.from({ length: 20 }, (_, index) => index);

  useEffect(() => {
    const randomDivs = Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      top: getRandomNumber(0, document.documentElement.scrollHeight - 20),
      left: getRandomNumber(0, document.documentElement.scrollWidth - 20),
      velX: getRandomNumber(-2, 2),
      velY: getRandomNumber(-2, 2),
    }));

    setDivs(randomDivs);

    const interval = setInterval(() => {
      setDivs(prevDivs =>
        prevDivs.map(div => {
          let { top, left, velX, velY } = div;

          top += velY;
          left += velX;

          if (top <= 0 || top >= document.documentElement.scrollHeight - 20) velY = -velY;
          if (left <= 0 || left >= document.documentElement.scrollWidth - 20) velX = -velX;

          return { ...div, top, left, velX, velY };
        })
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {divs.map(div => (
        <div
          key={div.id}
          className={styles.bouncingdivs}
          style={{ top: div.top, left: div.left }}
        />
      ))}
    </div>
  );
};

