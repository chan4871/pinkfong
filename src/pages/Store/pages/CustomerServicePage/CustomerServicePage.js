import React from 'react'
import StoreCategoryHeader from '../../component/StoreCategory/StoreCategoryHeader'
import './CustomerServicePage.scss'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";

const CustomerServicePage = () => {
  return (
    <div>
      <StoreCategoryHeader categoryName="customerservice"></StoreCategoryHeader>
      <div className="StoreCategoryBody">
       
        <div className="StoreCategoryList">
          <ul>
            <li><Link to='/customerservice' className='active'>고객센터</Link></li>
            <li><Link to='/comingsoon'>공지사항</Link></li>
            <li><Link to='/comingsoon'>자주 묻는 질문</Link></li>
            <li><Link to='/comingsoon'>문의하기</Link></li>
          </ul>
        </div>
        <div class="inner">
        <div className="StoreCategoryContent">
          <div className="notice">
            <h1>공지사항</h1>
            <ul>
              <li><Link><span>아기상어 10주년 기획전 댓글 이벤트 당첨자 발표</span><p>2025.06.26<FaAngleRight /></p></Link></li>
              <li><Link><span>6월 선거일, 현충일 배송 안내</span><p>2025.06.02<FaAngleRight /></p></Link></li>
              <li><Link><span>개인정보처리방침 및 이용약관 개정 사전 안내</span><p>2025.05.07<FaAngleRight /></p></Link></li>
              <li><Link><span>5월 배송 및 고객센터 휴무 안내</span><p>2025.04.30<FaAngleRight /> </p> </Link></li>
              <li><Link><span>아기상어 코딩컴퓨터 - 마이크로 5핀 버전 AS 종료 안내</span><p>2025.03.31<FaAngleRight /></p></Link></li>
            </ul>
            <button className='notice-btn'>
              <Link to='/comingsoon'>공지사항 더 보기
              <img src={`${process.env.PUBLIC_URL}/assets/images/characters/category_CustomerService_notice.png`} alt=""/>
              </Link>
            </button>
          </div>
          <div className="qna">
            <h1>자주 묻는 질문</h1>
            <ul>
              <li>상품 문의 [핑크퐁 워터펜] 리콜 FAQ 안내
              </li>
              <li>상품 문의 A/S 접수 안내</li>
              <li>상품 문의 [아기상어 코딩 컴퓨터] 자주 묻는 질문 모음</li>
              <li>상품 문의 [핑크퐁 펜] 연동 제품 음원 데이터 다운로드 경로 안내</li>
            </ul>
            <button className='qna-btn'>
              <Link to='/comingsoon'>자주 묻는 질문 더 보기
              <img src={`${process.env.PUBLIC_URL}/assets/images/characters/category_CustomerService_qna.png`} alt=""/></Link>
            </button>
          </div>
          
        </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerServicePage
