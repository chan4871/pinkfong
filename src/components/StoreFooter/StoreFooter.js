import React from 'react';
import './StoreFooter.scss';
import { Link } from 'react-router-dom';
import { FaRegBell } from 'react-icons/fa6';


const StoreFooter = () => {
  return (
    <footer className='store-footer'>
      <section className="notice">
        <div className="inner">
      <Link className='notice-title'>
      <span className='icon-bell'><FaRegBell /></span>
      <span>공지</span>
      </Link>
      <Link>
      <span>아기상어 10주년 기획전 댓글 이벤트 당첨자 발표</span>
      </Link>
      </div>
    </section>
    <section className="store-about">
      <div className="inner">
    <div className="store-info">
      <h3>핑크퐁스토어</h3>
      <span className='nowrap'>더핑크퐁컴퍼니(주)</span>
      <span className='nowrap'>대표: 김민석</span>
      <span className='nowrap'>사업자등록번호: 214-88-59980</span>
      <span className='nowrap'>개인정보보호책임자: 손동우 help@pinkfong.com</span>
      <span className='nowrap'>주소: 서울특별시 서초구 명달로 94 5층</span>
      <span className='nowrap'>전화번호: 1670-2685</span>
      <span className='nowrap'>통신판매업신고: 제 2011-서울서초-1588 호</span>
    </div>
    <div className="FAQ">
      <h3>이용안내</h3>
      <ul>
        <li>자주 묻는 질문(FAQ)</li>
        <li>궁금하신 사항은 문의하기를 이용해주세요.</li>
        <li>통합 이용약관, 스토어 이용약관</li>
        <li>개인정보 처리방침, 사업자정보확인</li>
        <li>개발자를 위한 무료 결제연동 서비스 포트원과 함께합니다.</li>
      </ul>
    </div>
    </div>
    </section>
    
    <section className="copy-inner">
      <div className="inner">
        <div className="copy">
        Copyright © The Pinkfong Company, Inc. All Rights Reserved.
        </div>
        </div>
        </section>
   </footer >
  );
};

export default StoreFooter;