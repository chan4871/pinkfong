import React, { useState } from 'react';
import products from '../../../../data/products';
import './SearchPage.scss';
import ProductList from '../../component/StoreCard/StoreProductList';

const SearchPage = () => {
  const [keyword, setKeyword] = useState('');

  const lowerKeyword = keyword.toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.id.toLowerCase().includes(lowerKeyword)
  );

  // 검색어가 없으면 기본 상품 12개, 있으면 검색 결과
  const visibleProducts = keyword
    ? filteredProducts
    : products.slice(0, 12); 

  return (
    <div className="search-page">
      <div className="inner">
        <div className="search-bar">
          <input
            className="search"
            type="text"
            placeholder="검색어를 입력하세요"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
      </div>

      <div className="search-content">
        <div className="inner">
          {visibleProducts.length > 0 ? (
            <div className="product-list-grid">
              <ProductList products={visibleProducts}></ProductList>
            </div>
          ) : (
            <div className="no-result-section">
            <p className="no-result">검색 결과가 없습니다.</p>
            <img src={`${process.env.PUBLIC_URL}/assets/images/characters/noresult_1.png`} alt="" width={"200px;"}/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
