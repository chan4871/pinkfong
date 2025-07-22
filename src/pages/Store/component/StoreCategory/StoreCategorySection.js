import React, { useState, useMemo } from 'react';
import products from '../../../../data/products';
import './StoreCategorySection.scss';
import { Link } from 'react-router-dom';

const itemsPerPage = 12; // 4열 * 3행 = 페이지당 12개 상품
const paginationGroupSize = 5; // 한 번에 표시할 페이지 버튼 수


const StoreCategorySection = ({ category }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('latest'); // 'latest', 'price-low', 'price-high'

  // 가격 문자열을 숫자로 파싱하는 헬퍼 함수
  const parsePrice = (priceString) => {
    return parseInt(priceString.replace(/[^0-9]/g, ''), 10);
  };

  // category 프롭스에 따라 상품을 필터링합니다.
  const filteredProducts = useMemo(() => {
    if (category === 'all') {
      return products; // 'all'이면 모든 상품을 반환
    }
    // 각 categoryName에 맞는 product 값을 필터링합니다.
    // 여기서는 categoryName을 소문자로 받아서 product 필드와 비교합니다.
    return products.filter(item => item.product.toLowerCase() === category.toLowerCase());
  }, [products, category]); // products 데이터 또는 category 프롭스가 변경될 때 다시 필터링

  // 필터링된 상품 목록을 정렬 (정렬 순서가 변경될 때만 다시 계산)
  const sortedProducts = useMemo(() => {
    let sorted = [...filteredProducts];
    if (sortOrder === 'price-low') {
      sorted.sort((a, b) => parsePrice(a.discounted_price) - parsePrice(b.discounted_price));
    } else if (sortOrder === 'price-high') {
      sorted.sort((a, b) => parsePrice(b.discounted_price) - parsePrice(a.discounted_price));
    } else {
      sorted.sort((a, b) => new Date(b.registration_date) - new Date(a.registration_date));
    }
    return sorted;
  }, [sortOrder, filteredProducts]);

  const totalProducts = sortedProducts.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPaginationButtons = () => {
    const startPage = Math.floor((currentPage - 1) / paginationGroupSize) * paginationGroupSize + 1;
    const endPage = Math.min(startPage + paginationGroupSize - 1, totalPages);
    const pageButtons = [];

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={currentPage === i ? 'active' : ''}
        >
          {i}
        </button>
      );
    }

    return (
      <>
        {startPage > 1 && (
          <button onClick={() => paginate(startPage - 1)}>
            &lt;
          </button>
        )}
        {pageButtons}
        {endPage < totalPages && (
          <button onClick={() => paginate(endPage + 1)}>
            &gt;
          </button>
        )}
      </>
    );
  };

  return (
    <div className="store-category-section-wrapper">
      <div className="store-category-section-inner">
      <div className="product-list-toolbar" >
        <div className="product-count">총 상품: {totalProducts}개</div>
        <div className="sort-options">
          <select value={sortOrder} onChange={(e) => {
            setCurrentPage(1);
            setSortOrder(e.target.value);
          }}>
            <option value="latest">최신순</option>
            <option value="price-low">가격 낮은순</option>
            <option value="price-high">가격 높은순</option>
          </select>
        </div>
      </div>

      <div className="product-list-grid">
        {currentProducts.map((item, index) => (
          <Link to={`/store/product/${item.id}`}>
          <div className="product-card" key={item.id || index}> 
            <div className="product-card-img">
              <img 
                src={`${process.env.PUBLIC_URL}/assets/pinkfong-store/${item.image_name}`} 
                alt={item.id} 
              />
              {item.discount_rate !== null && (
                <span className="discount-rate">{item.discount_rate}</span>
              )}
            </div>
            <div className="product-card-text">
            <h4 className="product-name">{item.id}</h4>
            {item.discount_rate !== null && (
              <del className="original-price">{item.original_price}</del>
            )}
            <p className="discount-price">{item.discounted_price}</p>
          </div>
          </div>
          </Link>
        ))}
      </div>
      </div>
      <div className="pagination">
        {renderPaginationButtons()}
      </div>
    </div>
  );
};

export default StoreCategorySection;