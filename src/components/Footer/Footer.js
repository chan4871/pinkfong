import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
     
      <div className="footer-sns">
        <img src={`${process.env.PUBLIC_URL}/assets/images/footerYouTube.png`} alt="YouTube"/>
        <img src={`${process.env.PUBLIC_URL}/assets/images/footerInsta.png`} alt="Instagram"/>
        <img src={`${process.env.PUBLIC_URL}/assets/images/footerFacebook.png`} alt="Facebook"/>
        <img src={`${process.env.PUBLIC_URL}/assets/images/footerBlog.png`} alt="Blog"/>
      </div>
      <div className="footer-link">
        {/* 외부링크연결은 안함 */}
        <Link>뉴스레터</Link>
        <Link>제휴 문의</Link>
        {/* 외부링크연결(핑크퐁 회사)이라 삭제함 */}
        <Link>더핑크퐁컴퍼니</Link> 
      </div>
      
      <div className="footer-copy">
        <span>&copy;The Pinkfong Company. All Rights Reserved.</span>
      </div>
    </footer>
  )
}

export default Footer