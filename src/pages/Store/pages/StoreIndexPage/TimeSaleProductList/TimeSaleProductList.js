import React, { useEffect, useState, useRef } from 'react';
import './TimeSaleProductList.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { Autoplay, FreeMode } from 'swiper/modules';
import saleProducts from '../../../../../data/saleProducts';
import { Link } from 'react-router-dom';

const TimeSaleProductList = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const swiperRef = useRef(null);

  const getTomorrowMidnight = () => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    return tomorrow;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const end = getTomorrowMidnight();
      const diff = end - now;

      if (diff < 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
        return;
      }

      const hours = Math.floor(diff / 1000 / 60 / 60);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // formatTime 함수를 수정하여 각 숫자를 별도의 span으로 래핑
  const formatTimeDigits = (unit, typeClass) => {
    const formattedUnit = unit.toString().padStart(2, '0'); // '05' 처럼 두 자리로 만듦
    return (
      <>
        <span className={`countdown-digit ${typeClass}-first-digit`}>{formattedUnit[0]}</span>
        <span className={`countdown-digit ${typeClass}-second-digit`}>{formattedUnit[1]}</span>
      </>
    );
  };

  return (
    <section className="time-sale-list">
      <div className="inner">
        
        <p className="countdown">
          {formatTimeDigits(timeLeft.hours, 'hours')}
          <span className="countdown-colon">:</span>
          {formatTimeDigits(timeLeft.minutes, 'minutes')}
          <span className="countdown-colon">:</span>
          {formatTimeDigits(timeLeft.seconds, 'seconds')}
        </p>
        <h2 className="time-sale-title">한여름 특급 타임세일 OPEN</h2>
      </div>
      <Swiper className='TimeSaleSwiper'
        modules={[Autoplay, FreeMode]}
        breakpoints={{
          0:{
            slidesPerView: 3, 
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 3, 
            spaceBetween: 20,
          },
          
          768: {
            slidesPerView: 6, 
            spaceBetween: 20,
          },
          
          1024: {
            slidesPerView: 8, 
            spaceBetween: 20,
          },
        }}
        loop={true}
        freeMode={{ enabled: true, momentum: true }}
        speed={8000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        grabCursor={true}
      >
        
        {saleProducts.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`/store/product/${item.name}`}>
            <div className="time-sale-card">
              <img src={`/assets/pinkfong-store/${item.image}`} alt={item.name} />
              <div className="info">
                <p className="name">{item.name}</p>
                <p className="price">
                <del>{item.originalPrice.toLocaleString()}원</del>
                  {item.price.toLocaleString()}원
                  
                </p>
              </div>
            </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TimeSaleProductList;