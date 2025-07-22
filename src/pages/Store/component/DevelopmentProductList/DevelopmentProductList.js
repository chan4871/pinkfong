//(추후 업데이트 예정)
import React from 'react';
import products from '../../../../data/products'; 
import './DevelopmentProductList.scss'; 

const DevelopmentProductList = ({ selectedCategory }) => {
  // selectedCategory에 해당하는 상품만 필터링합니다.
  // products.js의 developmentCategory 값과 Development.js의 id 값이 일치해야 합니다.
  const filteredProducts = products.filter(
    product => product.developmentCategory === selectedCategory
  );

  return (
    <div className="development-product-list">
      <h3>{selectedCategory} 관련 상품</h3> {/* 예: "인지발달 관련 상품" */}
      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p className="price">{product.price.toLocaleString()}원</p>
              {/* 여기에 '장바구니 담기' 또는 '상세보기' 버튼 추가 가능 */}
            </div>
          ))}
        </div>
      ) : (
        <p>{selectedCategory} 관련 상품이 없습니다.</p>
      )}
    </div>
  );
};

export default DevelopmentProductList;
