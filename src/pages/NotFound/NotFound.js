import React from 'react'
import './NotFound.scss'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className='NotFound-section'>
      <div className="NotFound-text">
        <h1>앗! 페이지가 없습니다!</h1>
        <h3>어쩌다 여기까지 오셨나요? <br/>여기는 아무것도 없는 페이지입니다.</h3>
        <Link to='/'><button>시작페이지로 돌아가기</button></Link>
        <img src={`${process.env.PUBLIC_URL}/assets/images/404fong.png`} alt=""/>
      </div>
      <div className="NotFound-bg">
        <img src={`${process.env.PUBLIC_URL}/assets/images/404_bg.png`} alt=""/>
      </div>
    </section>
  )
}

export default NotFound
