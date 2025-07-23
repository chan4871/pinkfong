import React from 'react';
import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IoMenu , IoClose} from "react-icons/io5";

const Header = ({scrollToRef, onScrolledChange}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollTriggered, setscrollTriggered] = useState(false);
  const [isSubSectionOpen, setIsSubSectionOpen] = useState(false);
  // 새로운 상태 추가: 오버레이 관리
  const [isOverlayActive, setIsOverlayActive] = useState(false);

  useEffect(()=>{
    const onScroll = () =>{
      const y = window.scrollY;

      if (y > 10) {
  if (!scrollTriggered && scrollToRef?.current) {
    setScrollTriggered(true);
    scrollToRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  setIsScrolled(true);
  onScrolledChange && onScrolledChange(true);
} else {
  setIsScrolled(false);
  setScrollTriggered(false);
  onScrolledChange && onScrolledChange(false);
}

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollToRef, scrollTriggered, onScrolledChange]);

  // 서브메뉴 및 오버레이 열기
  const openSubSection = () => {
    setIsSubSectionOpen(true);
    setIsOverlayActive(true); // 오버레이 활성화
    document.body.style.overflow = 'hidden'; // 본문 스크롤 잠금
  };

  // 서브메뉴 및 오버레이 닫기
  const closeSubSection = (event) => {
    // 이벤트 객체가 있을 경우에만 stopPropagation 호출 (클릭 이벤트가 상위로 전파되는 것 방지)
    if (event && event.stopPropagation) {
      event.stopPropagation();
    }
    setIsSubSectionOpen(false);
    setIsOverlayActive(false); // 오버레이 비활성화
    document.body.style.overflow = 'unset'; // 본문 스크롤 잠금 해제
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className='header-container'>
        <nav className="main-nav">
          <Link to='/' className='logo'>
            <img src={`${process.env.PUBLIC_URL}/assets/images/pinkfong_logo_lg.svg`} alt=""/>
          </Link>
          <ul className='nav-list'>
            <li className='nav-item'><NavLink to='/'>핑크퐁 소개</NavLink></li>
            <li className='nav-item'><NavLink to='/comingsoon'>사업 소개</NavLink></li>
            <li className='nav-item'><NavLink to='/store'>구매처 바로가기</NavLink></li>
            <li className='nav-item'><NavLink to='/comingsoon'>핑크퐁플러스</NavLink></li>
          </ul>
          <ul className="sub-nav">
            <button className='btn'><Link to='/store'>핑크퐁스토어</Link></button>
            <button className='btn'><Link to='/pinkfongPlus'>핑크퐁플러스</Link></button>
            <div className='menuBtn' onClick={openSubSection}>
              <IoMenu />
              <div className={`sub-section ${isSubSectionOpen ? "open" : ""}`}>
                <button className="close-btn" onClick={closeSubSection}>
                  <IoClose />
                </button>
                <ul className="sub-sns">
                  {/* 링크 클릭 시 메뉴 닫기 */}
                  <li><Link to='https://www.youtube.com/PinkfongKO' onClick={closeSubSection}><img src={`${process.env.PUBLIC_URL}/assets/images/youtube.svg`} alt=""/></Link></li>
                  <li><Link to ='https://www.instagram.com/pinkfong.ko/#' onClick={closeSubSection}><img src={`${process.env.PUBLIC_URL}/assets/images/instagram.svg`} alt=""/></Link></li>
                  <li><Link to ='https://www.facebook.com/pinkfong.ko' onClick={closeSubSection}><img src={`${process.env.PUBLIC_URL}/assets/images/facebook.svg`} alt=""/></Link></li>
                  <li><Link to ='https://blog.naver.com/ss_app' onClick={closeSubSection}><img src={`${process.env.PUBLIC_URL}/assets/images/blog.svg`} alt=""/></Link></li>
                </ul>
                <ul className="sub-menu-list">
                  {/* NavLink 클릭 시 메뉴 닫기 */}
                  <li className='nav-item'><NavLink to='/' onClick={closeSubSection}>핑크퐁 소개</NavLink></li>
                  <li className='nav-item'><NavLink to='/comingsoon' onClick={closeSubSection}>사업 소개</NavLink></li>
                  <li className='nav-item'><NavLink to='/store' onClick={closeSubSection}>구매처 바로가기</NavLink></li>
                  <li className='nav-item'><NavLink to='/comingsoon' onClick={closeSubSection}>핑크퐁플러스</NavLink></li>
                  <li className='nav-item dropdown-toggle'><NavLink onClick={closeSubSection}><i></i>한국어</NavLink></li>
                </ul>
                <ul className='sub-button-list'>
                  {/* 링크 클릭 시 메뉴 닫기 */}
                  <li><Link to='/comingsoon' onClick={closeSubSection}><span>제휴 문의</span><img src={`${process.env.PUBLIC_URL}/assets/images/partnership_mobile btn.svg`} alt=""/></Link></li>
                  <li><Link to='/comingsoon' onClick={closeSubSection}><span>뉴스레터 구독하기</span><img src={`${process.env.PUBLIC_URL}/assets/images/newsletter_mobile btn.svg`} alt=""/></Link></li>
                </ul>
              </div>
            </div>
          </ul>
        </nav>
        <nav>
          <ul className="sns">
            <li className='dropdown-toggle'><NavLink><i></i>한국어</NavLink></li>
            <li><Link to='https://www.youtube.com/PinkfongKO'><img src={`${process.env.PUBLIC_URL}/assets/images/youtube.svg`} alt=""/></Link></li>
            <li><Link to ='https://www.instagram.com/pinkfong.ko/#'><img src={`${process.env.PUBLIC_URL}/assets/images/instagram.svg`} alt=""/></Link></li>
            <li><Link to ='https://www.facebook.com/pinkfong.ko'><img src={`${process.env.PUBLIC_URL}/assets/images/facebook.svg`} alt=""/></Link></li>
            <li><Link to ='https://blog.naver.com/ss_app'><img src={`${process.env.PUBLIC_URL}/assets/images/blog.svg`} alt=""/></Link></li>
          </ul>
        </nav>
        {/* 오버레이 렌더링 조건 수정 및 클릭 핸들러 연결 */}
        {isOverlayActive && <div className="overlay active" onClick={closeSubSection}></div>}
      </div>
    </header>
  )
}

export default Header;
