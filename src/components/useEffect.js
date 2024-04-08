import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1); // 🌟 Updating the seconds!
    }, 1000);

    return () => clearInterval(interval); // 🌊 Cleaning up the interval
  }, [seconds]); // 🌟 Re-running when seconds change

  return (
    <div>
      <p>Timer: {seconds}s</p>
    </div>
  );
}