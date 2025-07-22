import React, { useRef, useEffect, useState } from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';
import useCountUp from '../../hooks/useCountup';

const Home = ({ scrollRef, isDimmed }) => {
  
  // fade 효과 훅들
  const fadeIntroText = useScrollFadeIn();
  const fadeIntroSub = useScrollFadeIn();
  const fadeIntroImg = useScrollFadeIn();
  const fadePlatformTitle = useScrollFadeIn();
  const fadeAwardImgs = useScrollFadeIn();

  const bubbleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const start = 1050;
      const end = 2930;
      const range = end - start;
      if (bubbleRef.current) {
        if (scrollY < start) {
          bubbleRef.current.style.transform = `translateY(0px)`;
          bubbleRef.current.style.opacity = 1;
        } else if (scrollY >= start && scrollY <= end) {
          const progress = (scrollY - start) / range;
          const translateY = progress * 350;
          const opacity = 1 - progress;
          bubbleRef.current.style.transform = `translate(-50%, -${translateY}px)`;
          bubbleRef.current.style.opacity = opacity;
        } else {
          bubbleRef.current.style.transform = `translate(-50%,-50px)`;
          bubbleRef.current.style.opacity = 0;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 숫자 카운트 시작 플래그
  const [startCount, setStartCount] = useState(false);
  
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 1050 && !startCount) {
        setStartCount(true);
      }
    };
    window.addEventListener('scroll', onScroll);
  
    // 새로고침 후 스크롤 위치 체크
    if (window.scrollY >= 1050 && !startCount) {
      setStartCount(true);
    }
  
    return () => window.removeEventListener('scroll', onScroll);
  }, [startCount]);

  // 숫자 카운트 훅들
  const count1 = useCountUp(30483, 2000, startCount);
  const count2 = useCountUp(257954000, 2000, startCount);
  const count3 = useCountUp(496077544, 2000, startCount);
  const count4 = useCountUp(151433746975, 2000, startCount);

  return (
    <>
      <div className={`home-main ${isDimmed ? 'dimmed' : ''}`}>
        <img src={`${process.env.PUBLIC_URL}/assets/images/mainBg.png`} alt="" />
        <h1>아이의 세상 모든 첫 경험을 즐겁게</h1>
      </div>

      <div ref={scrollRef} className='home-intro'>
        <div className="home-intro-inner">
          <h2 {...fadeIntroText}>
            <span>핑크퐁</span> 은 글로벌 유아동 브랜드로,<br /> 다양한 채널, 제품, 도서, 교구, 팝업스토어, 뮤지컬에 이르기까지<br /> 일상생활 속 다양한 영역에서 전 세계적으로 사랑받고 있습니다.
          </h2>
          <h4 {...fadeIntroSub}>아이가 즐거워하는 세상을 위해 모든 첫 경험을 설계해 나갑니다.</h4>
          <img {...fadeIntroImg} src={`${process.env.PUBLIC_URL}/assets/images/shark_family.svg`} alt="" />
        </div>
      </div>

      <div className='home-platform'>
        <img src={`${process.env.PUBLIC_URL}/assets/images/platformBg.png`} alt="" />
        <div className="bubble" ref={bubbleRef}>
          <img id='anim1' src={`${process.env.PUBLIC_URL}/assets/images/bubble-l.png`} alt="" />
          <img id='anim2' src={`${process.env.PUBLIC_URL}/assets/images/bubble-r.png`} alt="" />
        </div>
        <div className="home-platform-content">
          <h2 {...fadePlatformTitle}>Content Beyond Platform</h2>
          <div className="sub-title-img" {...fadeAwardImgs}>
            <img src={`${process.env.PUBLIC_URL}/assets/images/aword01.png`} alt="" />
            <img src={`${process.env.PUBLIC_URL}/assets/images/aword02.png`} alt="" />
            <img src={`${process.env.PUBLIC_URL}/assets/images/aword03.png`} alt="" />
          </div>

          <div className="platform-content-box">
            <div className="platform-content-item">
              <h3>{count1}</h3>
              <h5>동요 · 동화 콘텐츠</h5>
            </div>
            <div className="platform-content-item">
              <h3>{count2}</h3>
              <h5>YouTube 구독자</h5>
            </div>
            <div className="platform-content-item">
              <h3>{count3}</h3>
              <h5>앱 다운로드</h5>
            </div>
            <div className="platform-content-item">
              <h3>{count4}</h3>
              <h5>YouTube 조회수</h5>
            </div>
          </div>
        </div>
        <div className="platform-content-img">
          <img src={`${process.env.PUBLIC_URL}/assets/images/introBgBottom.png`} alt="" />
        </div>
      </div>

      <div className="home-business">
        <h2>사업 소개</h2>
        <div className="home-business-list">
          <div className="home-business-item">
            <div className="business-item-img">
              <img src={`${process.env.PUBLIC_URL}/assets/images/content01.png`} alt="" />
            </div>
            <div className="business-item-text">
              <h4>YouTube</h4>
            </div>
          </div>
          <div className="home-business-item">
            <div className="business-item-img">
              <img src={`${process.env.PUBLIC_URL}/assets/images/content02.png`} alt="" />
            </div>
            <div className="business-item-text">
              <h4>플레이리스트</h4>
            </div>
          </div>
          <div className="home-business-item">
            <div className="business-item-img">
              <img src={`${process.env.PUBLIC_URL}/assets/images/content03.png`} alt="" />
            </div>
            <div className="business-item-text">
              <h4>애니메이션</h4>
            </div>
          </div>
          <div className="home-business-item">
            <div className="business-item-img">
              <img src={`${process.env.PUBLIC_URL}/assets/images/content04.png`} alt="" />
            </div>
            <div className="business-item-text">
              <h4>영화</h4>
            </div>
          </div>
          <div className="home-business-item">
            <div className="business-item-img">
              <img src={`${process.env.PUBLIC_URL}/assets/images/content05.png`} alt="" />
            </div>
            <div className="business-item-text">
              <h4>모바일 앱</h4>
            </div>
          </div>
          <div className="home-business-item">
            <div className="business-item-img">
              <img src={`${process.env.PUBLIC_URL}/assets/images/content06.png`} alt="" />
            </div>
            <div className="business-item-text">
              <h4>제품</h4>
            </div>
          </div>
          <div className="home-business-item">
            <div className="business-item-img">
              <img src={`${process.env.PUBLIC_URL}/assets/images/content07.png`} alt="" />
            </div>
            <div className="business-item-text">
              <h4>브랜드 마케팅</h4>
            </div>
          </div>
          <div className="home-business-item">
            <div className="business-item-img">
              <img src={`${process.env.PUBLIC_URL}/assets/images/content08.png`} alt="" />
            </div>
            <div className="business-item-text">
              <h4>공연</h4>
            </div>
          </div>
        </div>

      </div>

      <div className="home-contact">
        <img src={`${process.env.PUBLIC_URL}/assets/images/contactBg.png`} alt="" />
        <div className="home-contact-content">
          <h2>제휴 문의</h2>
          <p>핑크퐁은 다양한 분야의 제휴 제안을 기다립니다.</p>
        </div>
        <button>
          <Link to='/comingsoon'>지금 문의하기</Link>
        </button>
      </div>
    </>
  );
};

export default Home;
