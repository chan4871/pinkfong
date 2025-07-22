// 이 파일은 핑크퐁 스토어 섹션의 라우팅을 관리하는 허브 컴포넌트입니다.
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StoreIndexPage from './pages/StoreIndexPage/StoreIndexPage';
import StoreCategoryAll from './pages/StoreCategory/StoreCategoryAll.js';
import StoreCategoryToyBook from './pages/StoreCategory/StoreCategoryToyBook.js';
import StoreCategoryDoll from './pages/StoreCategory/StoreCategoryDoll.js';
import StoreCategorySoundBook from './pages/StoreCategory/StoreCategorySoundBook.js';
import JoinPage from './pages/JoinPage/JoinPage.js';                
import OrderDeliveryPage from './pages/OrderDelivery/OrderDeliveryPage'; 
import LoginPage from './pages/Login/LoginPage.js';              
import CustomerServicePage from './pages/CustomerServicePage/CustomerServicePage.js'; 
import CartPage from './pages/CartPage/CartPage.js';                
import SearchPage from './pages/SearchPage/SearchPage.js';             
import ProductDetailPage from './component/ProductDetailPage/ProductDetailPage.js';
import Development from './component/Development/Development.js';//추후 개발 후 연동 예정

const Store = () => {
  return (
    <div className="store-section-wrapper">
      <Routes>
        {/* 스토어 - 메인페이지 */}
        <Route path="/" element={<StoreIndexPage />} /> 
        {/* 스토어 - 서브페이지 : 카테고리 */}
        <Route path="/productall" element={<StoreCategoryAll />} /> 
        <Route path="/toybook" element={<StoreCategoryToyBook />} /> 
        <Route path="/doll" element={<StoreCategoryDoll />} /> 
        <Route path="/soundbook" element={<StoreCategorySoundBook />} /> 
        <Route path="/store/product/:id" element={<ProductDetailPage />} />
        {/* 스토어 - 서브페이지 : 기타페이지 */}
        <Route path="/join" element={<JoinPage />} /> 
        <Route path="/order" element={<OrderDeliveryPage />} />   
        <Route path="/login" element={<LoginPage />} />           
        <Route path="/customerservice" element={<CustomerServicePage />} /> 
        <Route path="/cart" element={<CartPage />} />             
        <Route path="/search" element={<SearchPage />} />   
      </Routes>
    </div>
  );
};

export default Store;