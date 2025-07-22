import React, { useState } from 'react';
import './JoinPage.scss';

function JoinPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    country: '대한민국',
    phone: '',
    isOver14: false,
    agreePrivacy: false,
    agreeTerms: false,
    agreeEmail: false,
    agreeSMS: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('제출된 데이터:', formData); // 추후 백엔드 연동 지점
  };

  return (
    <div className="join-page">
      <div class="join-page-container">
      <h2>핑크퐁통합회원 가입을 환영합니다.</h2>
      <form onSubmit={handleSubmit}>
        <label>
          이메일
          <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder='이메일'/>
        </label>
        <label>
          비밀번호
          <input type="password" name="password" value={formData.password} onChange={handleChange} required placeholder="비밀번호" />
          <p>8자 이상 영문 대/소문자, 숫자, 특수문자 중 2종류 이상 조합</p>
        </label>
        <label>
          비밀번호 확인
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required placeholder='비밀번호 확인' />
        </label>
        <label>
          국가 또는 지역
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="대한민국">대한민국</option>
            <option value="미국">미국</option>
          </select>
        </label>
        <label>
          휴대폰 번호
          <div className="phone-input">
            <select>
              <option value="+82">+82</option>
            </select>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="010-0000-0000" />
            <button type="button">인증번호 발송</button>
          </div>
        </label>

        <div className="checkboxes">
          <label>
            <input type="checkbox" name="isOver14" checked={formData.isOver14} onChange={handleChange} required />
            만 14세 이상입니다.
          </label>
          <label>
            <input type="checkbox" name="agreePrivacy" checked={formData.agreePrivacy} onChange={handleChange} required />
            개인정보 처리방침 동의
          </label>

          <div className="info-table">
            <p className="info-title">개인정보 필수 수집 항목</p>
            <table>
              <tbody>
                <tr>
                  <th>목적</th>
                  <td>개인식별, 서비스 이용을 위한 연락처</td>
                </tr>
                <tr>
                  <th>항목</th>
                  <td>아이디(이메일주소), 비밀번호, 휴대폰 번호, 국가</td>
                </tr>
                <tr>
                  <th>보유기간</th>
                  <td>부정이용방지를 위하여 회원 탈퇴 후 30일동안 보관 후 파기</td>
                </tr>
              </tbody>
            </table>
            <p className="info-note">
              ※ 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있으며, 동의 거부 시 회원가입이 제한됨
            </p>
          </div>

          <label>
            <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} />
            핑크퐁 통합 서비스 이용약관 동의
          </label>
          <label>
            <input type="checkbox" name="agreeEmail" checked={formData.agreeEmail} onChange={handleChange} />
            이벤트, 할인 알림 등 이메일 수신 동의 (선택)
          </label>
          <label>
            <input type="checkbox" name="agreeSMS" checked={formData.agreeSMS} onChange={handleChange} />
            이벤트, 할인 알림 등 문자 메시지 수신 동의 (선택)
          </label>
        </div>

        <button type="submit" className="submit-btn">회원가입</button>
      </form>
      </div>
    </div>
  );
}

export default JoinPage;
