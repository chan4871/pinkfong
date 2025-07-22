import React from 'react';
import './StoreCategoryCard.scss';

const StoreCategoryCard = ({ item }) => {
  return (
    <div className="product-card"> 
      <div className="product-card-img">
        <img 
          src={`${process.env.PUBLIC_URL}/assets/pinkfong-store/${item.image_name}`} 
          alt={item.id}
        />
        {item.discount_rate !== null && (
          <span className="discount-rate">{item.discount_rate}</span>
        )}
      </div>
      <h4 className="product-name">{item.id}</h4>
      {item.discount_rate !== null && (
        <del className="original-price">{item.original_price}</del>
      )}
      <p className="discount-price">{item.discounted_price}</p>
    </div>
  );
};

export default StoreCategoryCard;