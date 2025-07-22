import React from 'react';
import StoreHeader from '../components/StoreHeader/StoreHeader'; 
import StoreFooter from '../components/StoreFooter/StoreFooter'; 

const StoreLayout = ({ children }) => {
  return (
    <div className="store-layout">
      <StoreHeader /> 
      <main className="store-content">
        {children} {/* StorePage (스토어 내부 라우터)가 여기에 렌더링됩니다. */}
      </main>
      <StoreFooter /> 
    </div>
  );
};

export default StoreLayout;