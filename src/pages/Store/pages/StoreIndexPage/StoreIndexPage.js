import React from 'react'
import { Link ,NavLink} from 'react-router-dom'
import './StoreIndexPage.scss'
import StoreProductList from '../../component/StoreCard/StoreProductList';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'
import { Autoplay } from 'swiper/modules';
import TimeSaleProductList from './TimeSaleProductList/TimeSaleProductList';
import RecommendCategoryList from './RecommendCategoryList/RecommendCategoryList';

const StoreIndexPage = () => {
  return (
    
  
  <main className='StoreIndexPage store'>
    <section className="banner">
    <Swiper
  spaceBetween={50}
  modules={[Autoplay]}
  autoplay={{ delay: 3000, disableOnInteraction: false }} 
  onSlideChange={() => console.log('slide change')}
  onSwiper={(swiper) => console.log(swiper)}
>
  <SwiperSlide>
    <img className='slide'src={`${process.env.PUBLIC_URL}/assets/images/store-banner-slide01.jpg`} alt=""/>
    <img className='m-slide' src={`${process.env.PUBLIC_URL}/assets/images/m-store-banner-slide01.jpg`} alt=""/>
    </SwiperSlide>
  <SwiperSlide>
    <img className='slide'src={`${process.env.PUBLIC_URL}/assets/images/store-banner-slide02.jpg`} alt=""/>
    <img className='m-slide' src={`${process.env.PUBLIC_URL}/assets/images/m-store-banner-slide02.jpg`} alt=""/>
    </SwiperSlide>
  <SwiperSlide>
    <img className='slide'src={`${process.env.PUBLIC_URL}/assets/images/store-banner-slide03.jpg`} alt=""/>
    <img className='m-slide' src={`${process.env.PUBLIC_URL}/assets/images/m-store-banner-slide03.jpg`} alt=""/>
    </SwiperSlide>
  <SwiperSlide>
    <img className='slide'src={`${process.env.PUBLIC_URL}/assets/images/store-banner-slide04.jpg`} alt=""/>
    <img className='m-slide' src={`${process.env.PUBLIC_URL}/assets/images/m-store-banner-slide04.jpg`} alt=""/>
    </SwiperSlide>
</Swiper>
    </section>
    <section className="time-sale">
  
  <TimeSaleProductList />
</section>

<section className="recommend-categories">
  
  <RecommendCategoryList />
</section>
    <section className="product">
        
    <ul className="product-container">
    
        <h2>추천 상품</h2>
      <StoreProductList/>
    </ul>
    </section>
    <section class="link">
    <Link to='/store/productall' className='see-more'>추천 상품 더 보기
    <img src={`${process.env.PUBLIC_URL}/assets/images/store-see-more.png`} alt=""/></Link>
    
    <div className="homeLink">
      
      <Link to='/'>핑크퐁 홈페이지 바로가기<br/> 
      <img src={`${process.env.PUBLIC_URL}/assets/images/store-sns02.png`} alt=""/>
      </Link>
      
      
    </div>
    </section>
    
   </main>
   
  
  )
}

export default StoreIndexPage
