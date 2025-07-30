import React from 'react';
import './RecommendCategoryList.scss';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'cognitive', name: '인지발달', image: 'assets/images/store-sns03.png', to: '/development', Color: "#FF3E3E" },
  { id: 'eq', name: 'EQ발달', image: 'assets/images/characters/category2_toybook.png', to: '/store/toybook', Color: "#FF7600" },
  { id: 'creative', name: '창작활동', image: 'assets/images/characters/category6_customerservice.png', to: '/store/soundbook', Color: "#FFB800" },
  { id: 'language', name: '언어학습', image: 'assets/images/characters/category1_all.png', to: '/store/soundbook', Color: "#78D916" },
  { id: 'math', name: '수리학습', image: 'assets/images/characters/category5_orderdelivery.png', to: '/store/soundbook', Color: "#23489B" },
  { id: 'nature', name: '자연탐구', image: 'assets/images/store-sns02.png', to: '/store/soundbook', Color: "#FF3897" },
  { id: 'social', name: '사회관계', image: 'assets/images/characters/category4_soundbook.png', to: '/store/soundbook', Color: "#B228DC" },
];






const RecommendCategoryList = () => {
  return (
    <div className="recommend-category">
    <div className="inner">
      <h2>우리 아이, 발달이 궁금해요 !</h2>
    <div className="recommend-category-list">
        
        {categories.map(cat => (
          <Link to='/comingsoon' key={cat.id} className="category-card" >
            <img src={cat.image} alt="{cat.name}"/>
            <p>{cat.name}</p>
          </Link>
        ))}
      
    </div>
    </div>
    </div>
  );
};

export default RecommendCategoryList;
