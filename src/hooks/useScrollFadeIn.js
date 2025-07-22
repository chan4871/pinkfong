//핑크퐁 메인 페이지 : 요소 아래에서 위로 올라오는 부분 등 개별 사용
import { useEffect, useState, useRef } from 'react';

const useScrollFadeIn = () => {
  const [style, setStyle] = useState({ opacity: 1, transform: 'translateY(0px)' });
  const domRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (!domRef.current) return;
      const rect = domRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // 화면 상단부터 요소 중심까지 거리 계산
      const centerY = rect.top + rect.height / 2;

      // 화면 위 40px와 아래 40px 영역 설정
      const topFadeBoundary = 20;
      const bottomFadeBoundary = windowHeight - 20;

      // 투명도 기본값 1
      let opacity = 1;

      if (centerY < topFadeBoundary) {
        // 위 40px 구간에 가까울수록 투명도 0.7까지 내려감
        opacity = 0.8 + 0.3 * (centerY / topFadeBoundary);
      } else if (centerY > bottomFadeBoundary) {
        // 아래 40px 구간에 가까울수록 투명도 0.7까지 내려감
        opacity = 0.8 + 0.3 * ((windowHeight - centerY) / 40);
      }

      // translateY는 50px 아래에서 위로 부드럽게 올라오도록
      // opacity에 따라 위치 변화를 줘서 자연스러운 애니메이션
      setStyle({
        opacity,
        transform: `translateY(${50 - opacity * 50}px)`,
        transition: 'all 0.2s ease-out',
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 마운트 시 한 번 실행
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { ref: domRef, style };
};

export default useScrollFadeIn;
