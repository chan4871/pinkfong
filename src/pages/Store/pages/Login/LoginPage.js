import React from 'react'
import './Login.scss';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="login">
      <div className="inner">
        <form className="login-form" onSubmit={e => e.preventDefault()}>
          <h2>핑크퐁통합회원 로그인</h2>
          <input type="email" placeholder="이메일" required />
          <input type="password" placeholder="비밀번호" required />
          <button type="submit" className="login-btn">로그인</button>

          <div className="login-extra">
            <label className="checkbox-label">
              <input type="checkbox" />
              <span>로그인 유지하기</span>
            </label>
            <div className="find-reset">
              <a href="#!">아이디</a> / <a href="#!">비밀번호 찾기</a>
            </div>
          </div>

          <div className="logos">
            
          </div>

          <p className="reCAPTCHA-note">
            This site is protected by reCAPTCHA and the Google&nbsp;
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> and&nbsp;
            <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">Terms of Service</a> apply.
          </p>
        </form>

        <div className="login-info">
          <p>핑크퐁통합회원에 가입하고 다양한 혜택을 받으세요.<br/>
            핑크퐁의 여러 서비스를 하나의 ID로 간편하게 로그인할 수 있습니다.
          </p>
          <Link to='/store/join'>
          <button className="signup-btn">회원가입하기</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage

