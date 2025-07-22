import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import products from '../../../../data/products';
import './StoreProductList.scss';
import Modal from '../../../../components/Modal/Modal';
import { Link } from 'react-router-dom';

const ProductList = () => {
  
  const [showModal, setShowModal] = useState(false);
  
  const navigate = useNavigate();

  

  const handleConfirm = () => {
    setShowModal(false);
    // 장바구니 페이지로 이동
    navigate('/store/cart'); 
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="product-list-grid">
        {products.slice(0, 12).map((item, index) => {
          const parsedItem = {
            id: item.id,
            name: item.id,
            price: parseInt(item.discounted_price.replace(/[^0-9]/g, '')),
            originalPrice: parseInt(item.original_price.replace(/[^0-9]/g, '')),
            image: item.image_name,
            discount: item.discount_rate,
          };

          return (
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
              <div className="product-name">{item.id}</div>
              {item.discount_rate !== null && (
                <del className="original-price">{item.original_price}</del>
              )}
              <p className="discount-price">{item.discounted_price}</p>
              </div>
              <br />
              
            </div>
            </Link>
          );
        })}
      </div>

      {showModal && (
        <Modal
          message="장바구니가 담겼습니다. 확인하시겠습니까?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </>
  );
};

export default ProductList;
