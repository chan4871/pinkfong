import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './StoreHeader.scss';
import { BiSearchAlt, BiShoppingBag } from "react-icons/bi";
import { useCart } from 'react-use-cart';
import { IoMenu, IoClose } from "react-icons/io5";

const StoreHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // 모바일 메뉴 상태
  const { totalItems } = useCart();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 모바일 메뉴 열기
  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
    // 메뉴가 열릴 때 본문 스크롤 방지
    document.body.style.overflow = 'hidden';
  };

  // 모바일 메뉴 닫기
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    // 메뉴가 닫힐 때 본문 스크롤 허용
    document.body.style.overflow = 'unset';
  };

  return (
    <header className={`store-header ${isScrolled ? "scrolled" : ""}`}>
      <div className='store-header-inner'>
        <div className="left">
          <h1 className='logo'>
            <Link to="/store">
              핑크퐁스토어
            </Link>
          </h1>
          <nav>
            <ul className="store-category-nav">
              <li>
                <NavLink to="/store/productall" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                  전체
                </NavLink>
              </li>
              <li>
                <NavLink to="/store/toybook" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                  토이북
                </NavLink>
              </li>
              <li>
                <NavLink to="/store/doll" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                  인형
                </NavLink>
              </li>
              <li>
                <NavLink to="/store/soundbook" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
                  사운드북
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="right">
          <nav className="store-main-navbar">
            <ul className="store-utility-nav">
              <li><NavLink to="/store/join">회원가입</NavLink></li>
              <li><NavLink to="/store/order">주문/배송</NavLink></li>
              <li><NavLink to="/store/login">로그인</NavLink></li>
              <li><NavLink to="/store/customerservice">고객센터</NavLink></li>
            </ul>
          </nav>
          <div className="nav-icons">
            <Link to="/store/cart" className="cart-icon-wrapper">
              <BiShoppingBag />
              {totalItems > 0 && <span className="cart-item-count">{totalItems}</span>}
            </Link>
            <Link to="/store/search" className="search-icon"><BiSearchAlt /></Link>
          </div>
        </div>
      </div>

      {/* 모바일 헤더 섹션 */}
      <div className="mob-header-inner">
        <button className="mob-menu-btn" onClick={openMobileMenu}>
          <IoMenu />
        </button>
        <h1 className='mob-logo'>
          <Link to="/store">
            핑크퐁스토어
          </Link>
        </h1>
        <div className="mob-nav-icons">
          <Link to="/store/cart" className="cart-icon-wrapper">
            <BiShoppingBag />
            {totalItems > 0 && <span className="cart-item-count">{totalItems}</span>}
          </Link>
          <Link to="/store/search" className="search-icon"><BiSearchAlt /></Link>
        </div>

        {/* 모바일 슬라이드 아웃 메뉴 */}
        {/* isMobileMenuOpen 상태에 따라 'open' 클래스 추가 */}
        <nav className={`mob-slide-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mob-menu-header">
            
            <ul className="mob-utility-nav-top">
              <li><NavLink to="/store/login" onClick={closeMobileMenu}>로그인</NavLink></li>
              <li><NavLink to="/store/join" onClick={closeMobileMenu}>회원가입</NavLink></li>
            </ul>
            <button className="mob-close-btn" onClick={closeMobileMenu}>
              <IoClose />
            </button>
          </div>
          <ul className="mob-store-category-nav">
            <li>
              <NavLink to="/store/productall" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'} onClick={closeMobileMenu}>
                전체
              </NavLink>
            </li>
            <li>
              <NavLink to="/store/toybook" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'} onClick={closeMobileMenu}>
                토이북
              </NavLink>
            </li>
            <li>
              <NavLink to="/store/doll" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'} onClick={closeMobileMenu}>
                인형
              </NavLink>
            </li>
            <li>
              <NavLink to="/store/soundbook" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'} onClick={closeMobileMenu}>
                사운드북
              </NavLink>
            </li>
          </ul>
          <ul className="mob-utility-nav-bottom">
            <li><NavLink to="/store/order" onClick={closeMobileMenu}>주문/배송</NavLink></li>
            <li><NavLink to="/store/customerservice" onClick={closeMobileMenu}>고객센터</NavLink></li>
          </ul>
        </nav>

        {/* 어둡게 처리되는 오버레이 */}
        {/* isMobileMenuOpen 상태에 따라 렌더링되고 'active' 클래스 추가 */}
        {isMobileMenuOpen && <div className="mob-menu-overlay active" onClick={closeMobileMenu}></div>}
      </div>
    </header>
  );
};

export default StoreHeader;