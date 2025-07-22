import React from 'react'
import './ComingSoon.scss'
import { Link } from 'react-router-dom'

const ComingSoon = () => {
  return (
    <div className='ComingSoon'>
      <div className="Comingsoon-text">
      <h2>죄송합니다. 이 페이지는 현재 작업 중입니다. </h2>
      
      <p>빠른 시일 내에 업데이트 될 예정입니다.</p>
      <Link to='/'><button className='link-home'>홈으로 돌아가기</button></Link>
      <Link to='/store'><button className='link-store'>스토어로 돌아가기</button></Link>
      
      </div>
      
      <img src={`${process.env.PUBLIC_URL}/assets/images/nopage.png`} alt=""/>
      
      
      
    </div>
  )
}

export default ComingSoon
