import React from 'react';
import './App.css'; // 전역 CSS 또는 SCSS 파일
import { Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { CartProvider } from 'react-use-cart'; //카트 기능 관련
// 레이아웃 컴포넌트 임포트
import MainLayout from './layouts/MainLayout';
import StoreLayout from './layouts/StoreLayout';
// 페이지 컴포넌트 임포트
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Business from './pages/Business/Business';
import Store from './pages/Store/Store'; // Store.js에서 StoreIndexPage.js로 이름 변경 및 경로 조정됨
import PinkfongPlus from './pages/PinkfongPlus/PinkfongPlus';
// 기타 페이지 임포트
import ProductDetailPage from './pages/Store/component/ProductDetailPage/ProductDetailPage';
// notfound
import ComingSoon from './pages/NotFound/ComingSoon';
import NotFound from './pages/NotFound/NotFound';
// 훅
import useScrollToTop from './hooks/useScrollToTop';
//추후 업데이트 예정(첫번째 업데이트 중)
import Development from './pages/Store/component/Development/Development';

const DevelopmentRouterWrapper = () => {
  const { id } = useParams();
  return <Development selectedId={id} />;
};

function App() {
  useScrollToTop();
  return (
    <CartProvider>
    <div className="App"> 
      <Routes>
        {/* '/' 경로는 MainLayout으로 감싸고 Home 컴포넌트를 자식으로 전달 */}
        <Route path='/' element={<MainLayout><Home /></MainLayout>} />
        <Route path='/about' element={<MainLayout><About /></MainLayout>} />
        <Route path='/business' element={<MainLayout><Business /></MainLayout>} />

        {/* '/store' 경로는 StoreLayout으로 감싸고 StoreIndexPage 컴포넌트를 자식으로 전달 */}
        <Route path='/store/*' element={<StoreLayout><Store /></StoreLayout>} />
        <Route path="/store/product/:id" element={<StoreLayout><ProductDetailPage /></StoreLayout>} />

        <Route path='/pinkfongPlus' element={<MainLayout><PinkfongPlus /></MainLayout>} />
        <Route path='/comingsoon' element={<MainLayout><ComingSoon></ComingSoon></MainLayout>} />
     
        <Route path="*" element={<StoreLayout><NotFound /></StoreLayout>} />   
      </Routes>
    </div>
    </CartProvider>
  );
}

export default App;