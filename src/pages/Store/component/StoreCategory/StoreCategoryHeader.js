import React from 'react';
import './StoreCategoryHeader.scss';

const headerStyle = {
    all: { 
      bg: "#fcd62d",
      img: "/assets/images/characters/category1_all.png",
      text: "핑크퐁의 모든 상품을 만나보세요!"
    },
    toybook: { 
      bg: "#02a8f3",
      img: "/assets/images/characters/category2_toybook.png",
      text: "재미있게 읽고 배우는 토이북"
    },
    doll: {
      bg: "#79d8dd",
      img: "/assets/images/characters/category3_doll.png",
      text: "귀여운 인형 친구들을 만나보세요!"
    },
    soundbook: { 
      bg: "#e8e3fd",
      img: "/assets/images/characters/category4_soundbook.png",
      text: "소리로 배우는 즐거움"
    },
    orderdelivery: {
      bg: "#2095f2",
      img: "/assets/images/characters/category5_orderdelivery.png",
      text: "주문 / 배송 확인"
    },
    customerservice: {
      bg: "#ffb9de",
      img: "/assets/images/characters/category6_customerservice.png",
      text: "고객센터"
    },

  };


const StoreCategoryHeader = ({ categoryName }) => {
  // categoryName에 해당하는 스타일 정보를 가져옴. 없으면 기본값(빈 객체)
  const { bg, img, text } = headerStyle[categoryName] || {};

  return (
    <div className="category-header" style={{ backgroundColor: bg }}>
      <div className="inner">
        <img src={`${process.env.PUBLIC_URL}${img}`} alt={text} />
        <h2>{text}</h2>
      </div>
    </div>
  );
}

export default StoreCategoryHeader;