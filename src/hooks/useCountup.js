import { useEffect, useState } from 'react';

const useCountUp = (endValue, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return; // start가 false면 카운트 시작 안 함
    
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * endValue);
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [endValue, duration, start]);

  return count.toLocaleString(); // 3자리 쉼표 포맷
};

export default useCountUp;
