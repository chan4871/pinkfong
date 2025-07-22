import React from 'react'
import StoreCategoryHeader from '../../component/StoreCategory/StoreCategoryHeader'
import './OrderDelivery.scss'
import { Link } from 'react-router-dom'

const OrderDeliveryPage = () => {
  return (
    <div>
      <StoreCategoryHeader categoryName="orderdelivery"></StoreCategoryHeader>
      <div className="StoreCategoryBody">
        <div class="inner">
          <div className="member">
            <h5>회원이시라면 로그인해주세요</h5>
            <button>
              <Link to='/store/login'>로그인 하러 가기</Link>
            </button>
          </div>
          <div className="non-member">
            <h5>비회원으로 구매하셨나요?</h5>
            <input type="text" placeholder='이메일'/>
            <input type="text" placeholder='주문번호'/>
            <button>
              <Link to='/'>주문/배송 확인</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderDeliveryPage
