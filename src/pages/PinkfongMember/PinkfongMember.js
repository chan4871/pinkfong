import React from 'react'
import { Routes, Route } from 'react-router-dom';
import JoinPage from '../Store/pages/JoinPage/JoinPage';
import LoginPage from '../Store/pages/Login/LoginPage';
const PinkfongMember = () => {
  return (
    <div>
      <Routes>
      <Route path="/join" element={<JoinPage />} /> 
      <Route path="/login" element={<LoginPage />} />  
      </Routes>
    </div>
  )
}

export default PinkfongMember
