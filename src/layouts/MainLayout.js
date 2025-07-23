import React, { useRef, useState, cloneElement } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const MainLayout = ({ children }) => {
  // `Home` 컴포넌트의 'home-intro' div에 연결될 Ref입니다.
  // 이 Ref를 Header와 Home 컴포넌트 모두에 전달하여 동일한 요소를 참조하게 할 것입니다.
  const homeIntroRef = useRef(null);

  // Header의 스크롤 상태를 받을 state입니다.
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  // Header에서 스크롤 상태가 변경될 때 호출될 콜백 함수입니다.
  const handleHeaderScrolledChange = (scrolledState) => {
    setIsHeaderScrolled(scrolledState);
    // 이 isHeaderScrolled 상태는 HomePage의 isDimmed prop으로 전달될 것입니다.
  };

  return (
    <div className="main-layout">
      {/*
        Header 컴포넌트에 homeIntroRef (scrollToRef로 전달)와
        onScrolledChange (handleHeaderScrolledChange로 전달) prop을 전달합니다.
        Header는 이 homeIntroRef를 사용하여 특정 스크롤 위치로 이동을 시도합니다.
      */}
      <Header
        scrollToRef={homeIntroRef}
        onScrolledChange={handleHeaderScrolledChange}
      />
      <main className="main-content">
        {/*
          `children` (예: HomePage)을 렌더링할 때,
          `HomePage`에 필요한 `scrollRef`와 `isDimmed` prop을 전달합니다.
          `React.cloneElement`를 사용하여 기존 children에 새로운 props를 추가합니다.
          이 방식은 children이 단일 컴포넌트일 때 적합하며, 특정 컴포넌트에만 props를 전달하고 싶을 때 유용합니다.
        */}
        {
          React.Children.map(children, child => {
            // child가 유효한 React 엘리먼트이고, 우리가 props를 추가하고 싶은 'Home' 컴포넌트인지 확인합니다.
            // 주의: `child.type.name`으로 컴포넌트 이름을 비교하는 것은
            // 빌드 시 코드가 난독화될 경우 동작하지 않을 수 있습니다.
            // 더 견고한 방법은 Context API를 사용하거나,
            // HomePage가 특정 prop (예: `isMainPage`)을 받을 때만 로직을 실행하도록 하는 것입니다.
            // 하지만 현재는 이해를 돕기 위해 .name을 사용합니다.
            if (React.isValidElement(child) && child.type.name === 'Home'){
              return cloneElement(child, {
                scrollRef: homeIntroRef,    // HomePage의 `home-intro` div에 연결될 Ref입니다.
                isDimmed: isHeaderScrolled  // HomePage의 `home-main` div에 `dimmed` 클래스를 적용할 상태입니다.
              });
            }
            return child; // 'Home' 컴포넌트가 아니면 props 없이 그대로 렌더링합니다.
          })
        }
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
