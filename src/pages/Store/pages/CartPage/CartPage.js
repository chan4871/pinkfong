import React, { useState, useEffect } from 'react';
import { useCart } from 'react-use-cart'; 
import './CartPage.scss';
import { Link } from 'react-router-dom';


const CartPage = () => {
  const {
    isEmpty,
    items,
    removeItem,
    updateItemQuantity,
    cartTotal, // 이 값은 전체 장바구니 합계이고, 선택된 아이템 합계는 별도로 계산됩니다.
  } = useCart();

  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    // items가 변경될 때마다 모든 아이템을 선택된 상태로 초기화
    setSelectedItems(items.map(item => item.id));
  }, [items]);

  const toggleSelectAll = () => {
    if (selectedItems.length === items.length) {
      setSelectedItems([]); // 모두 해제
    } else {
      setSelectedItems(items.map(item => item.id)); // 모두 선택
    }
  };

  const toggleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(itemId => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const selectedTotal = items
    .filter(item => selectedItems.includes(item.id))
    .reduce((acc, item) => acc + item.price * item.quantity, 0);

  // 장바구니가 비었을 때 메시지 변경
  if (isEmpty) {
    return (
      <div className="empty-cart-message">
        <div className="inner">
        <div className="link-box">
        <p>장바구니가 비었습니다.</p>
        
        <Link to="/store/productall" className="go-to-store-btn">상품 보러가기</Link>
        </div>
        <div className="link-img">
        <img src={`${process.env.PUBLIC_URL}/assets/images/image.webp`} alt=""/>
        </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>장바구니</h2>

      <div className="select-all-wrapper">
        <label>
          <input
            type="checkbox"
            checked={selectedItems.length === items.length && items.length > 0} // items.length > 0 추가
            onChange={toggleSelectAll}
          /> 전체 선택
        </label>
      </div>

      <ul className="cart-list">
        {items.map(item => (
          
          <li key={item.id} className="cart-item"> 
            <div className="remove-box">
            <input
              type="checkbox"
              checked={selectedItems.includes(item.id)}
              onChange={() => toggleSelectItem(item.id)}
              className="item-checkbox"
              aria-label={`${item.name} 선택`}
            />
            <button
              className="remove-btn"
              onClick={() => removeItem(item.id)}
              aria-label="상품 삭제"
            >
              삭제
            </button>
            </div>
            <div className="item-box">
            <Link to={`/store/product/${encodeURIComponent(item.name)}`} className="item-link-area"> 
              <img
                className="item-image"
                src={`/assets/pinkfong-store/${item.image}`}
                alt={item.name}
              />
              </Link> 
              <div className="item-info">
              <Link to={`/store/product/${encodeURIComponent(item.name)}`} className="item-link-area"> 
                <p className="item-name">{item.name}</p>
                </Link> 
                <div className="quantity-control">
                  <button
                    className="qty-btn"
                    onClick={(e) => { e.stopPropagation(); updateItemQuantity(item.id, item.quantity - 1); }}
                    disabled={item.quantity <= 1}
                    aria-label="수량 감소"
                  >
                    -
                  </button>
                  <span className="qty-display">{item.quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={(e) => { e.stopPropagation(); updateItemQuantity(item.id, item.quantity + 1); }}
                    aria-label="수량 증가"
                  >
                    +
                  </button>
                </div>
                <p className="item-total">
                  {(item.price * item.quantity).toLocaleString()}원
                </p>
              </div>
            </div>
            

            
          </li>
        ))}
      </ul>

      <hr className="divider" />
      <div className="total">
        <h3 className="cart-total">
          총 결제금액 {selectedTotal.toLocaleString()}원
        </h3>
        <button className='order'>주문하기</button>
      </div>
    </div>
  );
};

export default CartPage;