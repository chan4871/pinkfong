import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../../../../data/products';
import './ProductDetailPage.scss';
import { useCart } from 'react-use-cart'; 
import Modal from '../../../../components/Modal/Modal'; 
import { Link } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams();
  const decodedId = decodeURIComponent(id); 
  const product = products.find(p => p["id"] === decodedId);

  const { addItem } = useCart();

  // 모달 상태 관리
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); 

  
  
  const itemToAdd = {
    id: product["id"], 
    name: product["id"],
    price: parseInt(product["discounted_price"].replace(/[^0-9]/g, '')),
    image: product["image_name"],
  };

  const handleAddToCart = () => {
    addItem(itemToAdd);
    setShowModal(true); // 장바구니에 담으면 모달 표시
  };

  const handleBuyNow = () => {
    alert(`${product["id"]}을(를) 바로 구매합니다!`);
    // 실제 구매 로직: 바로 결제 페이지 등으로 이동
    // navigate('/checkout'); // 예시
  };

  // 모달 확인 버튼 클릭 시
  const handleModalConfirm = () => {
    setShowModal(false);
    navigate('/store/cart'); // 장바구니 페이지로 이동
  };

  // 모달 취소 버튼 클릭 시
  const handleModalCancel = () => {
    setShowModal(false);
  };
  //긴 내용 텍스트 숨김 토글
  const [expanded, setExpanded] = useState(false);

  const toggleText = () => {
    setExpanded(!expanded);
  };
  if (!product) return <p className="product-not-found">상품 정보를 찾을 수 없습니다 😥</p>;

  return (
    <div className="product-detail-page-container">
      
      <div className="product-detail-header">
        <div className="product-img">
          <img
            src={`${process.env.PUBLIC_URL}/assets/pinkfong-store/${product["image_name"]}`}
            alt={product["id"]}
          />
        </div>
        <div className="inner">
          <div className="product-info-area">
            <h2 className="product-title">{product["id"]}</h2>
            <div className="price-info">
              {product["discount_rate"] && product["discount_rate"] !== null && product["discount_rate"] !== "0%" && (
                <p className='discount-rate'>{product["discount_rate"]}</p>
              )}
              
              {product["discount_rate"] && product["discount_rate"] !== null && product["discount_rate"] !== "0%" ? (
                 <p className='original-price'>
                   <del>{product["original_price"]}</del>
                   <span className='discounted-price-current'>{product["discounted_price"]}</span> {/* 할인된 가격은 del 바깥으로 분리 */}
                 </p>
              ) : (
                <p className='discounted-price-current'>{product["discounted_price"]}</p> /* 할인 없을 때 */
              )}
            </div>

            <div className="action-buttons">
              <button className="add-to-cart-btn" onClick={handleAddToCart}>장바구니</button>
              <Link to='/store/order'><button className="buy-now-btn" onClick={handleBuyNow}>구매하기</button></Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="inner">
        <div className="product-description-section">
          <h3>우리 아이의 잠재력을 깨우는 {product["id"]}!</h3>
          <div className="description-content">
            <p className={`description-text ${expanded ? 'expanded' : ''}`}
      onClick={toggleText}>
              소중한 우리 아이의 눈부신 성장을 위해 특별히 고안된 "{product["id"]}"을(를) 소개합니다. 
              단순한 놀이 도구를 넘어, 아이들의 오감 발달과 인지 능력 향상에 실질적인 도움을 줍니다. 
              다채로운 색상, 흥미로운 질감, 그리고 안전한 디자인으로 아이가 자유롭게 탐색하고 표현하며, 
              세상과 소통하는 방법을 자연스럽게 익힐 수 있도록 설계되었습니다. 
              매일매일 새로운 발견과 함께 우리 아이의 무한한 잠재력을 활짝 열어주세요.
            </p>
            
            <div className="additional-notes">
              <h4><span className="icon">⚠️</span> 꼭 확인해주세요!</h4>
              <p>※ 권장 연령: **{product["id"].includes('북') ? '0-3세' : '3세 이상'}** (상품 특성에 따라 유동적으로 변경)</p>
              <p>※ 구성품: 본품, 사용 설명서 (일부 제품은 추가 구성품 포함)</p>
              <p>※ 주의사항: 화기 및 직사광선을 피하고, 보호자의 지도 아래 사용해주세요.</p>
            </div>
            <div className="care-instructions">
              <h4><span className="icon">✅</span> 제품 관리 방법</h4>
              <p>부드러운 마른 천으로 오염된 부분을 가볍게 닦아주세요. 강한 충격이나 습기에 노출되지 않도록 주의하며 보관해주세요. 세척이 필요한 경우, 미지근한 물에 중성세제를 풀어 오염 부위만 부드럽게 세척 후 완전히 건조시켜 주세요.</p>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <Modal
          message="상품이 장바구니에 담겼습니다. 장바구니로 이동하시겠습니까?"
          onConfirm={handleModalConfirm}
          onCancel={handleModalCancel}
        />
      )}
    </div>
  );
};

export default ProductDetailPage;