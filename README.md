# 핑크퐁_리액트 SPA 웹 프로젝트 (브랜드/스토어)

https://pinkfong.netlify.app/
---
### 프로젝트 소개

 핑크퐁의 공식 메인 홈페이지와 그 안에 긴밀하게 연동되는 고도화된 핑크퐁 스토어 홈페이지를 React 기반으로 구축한 통합 웹 애플리케이션입니다. 
 SPA (Single Page Application) 형태로 개발되어, 페이지 전환 시 발생하는 깜빡임 없이 부드러운 사용자 경험을 제공합니다. 메인 홈페이지는 브랜드의 핵심 가치와 콘텐츠를 시각적으로 매력적이고 인터랙티브하게 전달하는 데 중점을 두었으며, 스토어 홈페이지는 사용자가 실제 온라인 이커머스 환경에서 상품을 탐색하고 구매하는 전 과정을 편리하고 효율적으로 경험할 수 있도록 상세히 구현되었습니다.

React의 컴포넌트 기반 아키텍처를 적극적으로 활용하여 코드의 모듈성, 재사용성, 그리고 유지보수성을 극대화했습니다. 이를 통해 복잡한 기능들을 체계적으로 관리하고, 사용자에게 일관되면서도 만족스러운 쇼핑 및 브랜드 경험을 동시에 제공합니다.

---
### 기술 스택
- 프론트엔드 프레임워크: React.js (컴포넌트 기반 UI 구축 및 효율적인 상태 관리)
- 상태 관리: React Context API (애플리케이션 전역 상태 관리 및 컴포넌트 간 데이터 공유)
- 라우팅: React Router v6 (선언적 라우팅을 통한 SPA 페이지 전환 및 URL 관리)
- 스타일링: SCSS (CSS 전처리기, 모듈화된 스타일 시트 작성 및 유지보수 용이성 증대)
- 개발 도구: Node.js (런타임 환경), npm / Yarn (패키지 관리)
- 버전 관리: Git / GitHub
- 배포: Netlify (CI/CD 연동을 통한 자동 배포 및 빠른 서비스 제공)

---
### 페이지 구성 및 기능 개요
: 이 애플리케이션은 크게 핑크퐁 메인 홈페이지 영역과 핑크퐁 스토어 홈페이지 영역으로 나뉘며, 각 영역은 다음과 같은 페이지들로 구성되어 있습니다.

#### 1. 핑크퐁 메인 홈페이지 페이지 (Pinkfong Main Homepage Pages)
: 핑크퐁 브랜드의 스토리와 콘텐츠를 풍부한 인터랙션과 함께 전달하는 주요 페이지들입니다.

##### 1) 홈페이지 (Home.js):
- 메인 랜딩 페이지로서 핑크퐁의 핵심 가치와 대표 콘텐츠를 시각적으로 제시합니다.
- 동적인 헤더/푸터: 스크롤 시 헤더의 배경색과 글자색이 동적으로 변경되며, 페이지 깊이에 따른 시각적 변화를 제공합니다.
- 인터랙티브 스크롤 효과: 스크롤에 맞춰 비눗방울 이미지가 자연스럽게 올라가며 사라지는 애니메이션, 각 섹션의 투명도가 조절되며 나타나는 전환 효과를 구현했습니다.
- 데이터 시각화: 구독자/사용자 수 등이 0부터 카운팅되는 애니메이션을 통해 서비스의 활성도를 동적으로 보여줍니다.
  
##### 2) 핑크퐁 소개 페이지 (IntroPinkfong.js):
- 핑크퐁 브랜드에 대한 자세한 정보와 비전을 소개합니다.
  
##### 3) 사업 소개 페이지 (BusinessIntro.js): 
- 핑크퐁의 다양한 사업 영역과 파트너십 기회를 설명합니다.
  
##### 4) 구매처 바로가기 페이지 (Partners.js): 
- 핑크퐁 관련 상품을 구매할 수 있는 다양한 온라인/오프라인 채널 정보를 제공하며, 특히 핑크퐁 스토어 홈페이지로 연결되는 핵심 진입점 역할을 합니다.
  
##### 5) 핑크퐁 플러스 페이지 (PinkfongPlus.js): 
- 핑크퐁의 유료 구독 서비스인 핑크퐁 플러스에 대한 정보를 제공합니다.

#### 2. 핑크퐁 스토어 홈페이지 페이지 (Pinkfong Store Homepage Pages)
: 핑크퐁 메인 홈페이지의 '구매처 바로가기'를 통해 진입하는 스토어 홈페이지는 실제 온라인 쇼핑몰과 같은 상세한 페이지들로 구성되어 있으며, React 컴포넌트 기반으로 복합적인 쇼핑 기능을 구현했습니다.

##### 1) 스토어 메인 페이지 (StoreIndexPage.js):
: 스토어의 핵심 랜딩 페이지로서, 메인 배너, 타임 세일 상품 목록 (TimeSaleProductList 컴포넌트), 발달 단계별 추천 카테고리 목록 (RecommendCategoryList 컴포넌트, 현재 개발 중) 등 스토어의 주요 콘텐츠와 프로모션을 한눈에 보여줍니다.

##### 2) 카테고리 페이지 (StoreCategoryAll.js, StoreCategoryDoll.js, StoreCategorySoundBook.js, StoreCategoryToyBook.js):
- '전체', '토이북', '인형', '사운드북' 등 세분화된 카테고리별 상품 목록을 제공합니다.
- 각 페이지는 StoreCategoryHeader (카테고리 타이틀 및 대표 이미지)와 StoreCategorySection (해당 카테고리 상품 필터링 및 전시) 컴포넌트를 통해 구성됩니다.
- 사용자는 '최신순', '가격 낮은순', '가격 높은순' 등 다양한 기준으로 상품을 정렬하여 탐색할 수 있습니다.

##### 3) 상품 상세 페이지 (ProductDetailPage.js):
- 모든 상품 이미지를 클릭하면 해당 상품의 상세 정보(고화질 이미지, 상세 설명, 가격, 재고, 관련 상품 등)를 볼 수 있는 전용 페이지로 이동합니다.
- 장바구니 추가 기능이 구현되어 있으며, 상품 추가 시 장바구니로 이동하거나 쇼핑을 계속할지 묻는 모달창이 나타납니다.
- '구매하기' 버튼 클릭 시 주문/배송 페이지로 연결됩니다.

##### 4) 장바구니 페이지 (CartPage.js):
- 사용자가 담아둔 상품 목록을 확인하고, 상품 수량 조절, 삭제, 최종 결제 예상 금액 확인 등 장바구니 관련 모든 작업을 편리하게 수행할 수 있습니다.

##### 5) 회원가입 페이지 (JoinPage.js): 
- 새로운 사용자가 회원으로 가입할 수 있는 기능을 제공합니다.

##### 6) 로그인 페이지 (LoginPage.js): 
- 등록된 회원이 서비스에 로그인할 수 있도록 합니다.

##### 7) 주문/배송 페이지 (OrderDeliveryPage.js):
- 상품 구매 절차를 시뮬레이션하며, 주문 정보 입력 및 배송지 확인 등의 단계를 포함합니다.
 
##### 8) 고객센터 페이지 (CustomerServicePage.js):
- 사용자가 서비스 이용 중 궁금한 점이나 문제가 발생했을 때 문의할 수 있는 통로를 제공합니다.

##### 9) 검색 페이지 (SearchPage.js):
- 키워드 기반의 상품 검색 기능을 제공하여 사용자가 원하는 상품을 신속하게 찾아낼 수 있도록 돕습니다.

##### 10) 404 Not Found 페이지 (Error404Page.js): 
- 존재하지 않는 URL로 접근 시 사용자에게 명확하고 친근한 오류 안내를 제공합니다.

##### 11) Coming Soon 페이지 (ComingSoonPage.js): 
- 아직 개발 중이거나 준비 중인 페이지에 접근할 경우, 사용자에게 서비스의 현재 상태를 알리고 기대감을 유지시킵니다.


---
### 폴더 구조
```
.
├── public/                     // 정적 자산 및 빌드 결과물
│   ├── assets/                 // 이미지, 아이콘 등 정적 리소스
│   │   ├── images              // 프로젝트 전반에 사용되는 이미지 파일
|   |   ├── pinkfong-store/     // 프로젝트에 사용되는 제품 이미지 파일
│   ├── index.html              // React 앱의 진입점 HTML 파일
│   ├── manifest.json          
│   └── robots.txt             
└── src/                        // 애플리케이션의 모든 소스 코드
    ├── components/             // 재사용 가능한 UI 컴포넌트 모음
    │   ├── Footer/             // 웹사이트 공통 푸터 컴포넌트 (메인 푸터)
    │   │   ├── Footer.js
    │   │   └── Footer.scss
    │   ├── Header/             // 웹사이트 공통 헤더 컴포넌트 (메인 헤더)
    │   │   ├── Header.js
    │   │   └── Header.scss
    │   ├── Modal/              // 재사용 가능한 모달 컴포넌트 (예: 장바구니 확인 모달)
    │   │   ├── Modal.js
    │   │   └── Modal.scss
    │   ├── StoreCard/          // 스토어 상품 카드 관련 컴포넌트
    │   │   └── StoreProductList.js // 여러 페이지에서 사용되는 상품 리스트 카드 컴포넌트
    │  
    ├── css/                    
    ├── data/                   // product.js 등 제품에 대한 데이터 배열이 담긴 파일
    ├── hooks/                  // 사용자 정의 React Hooks
    ├── layouts/                
    │   ├── MainLayout.js       // 핑크퐁 메인 홈페이지의 레이아웃
    │   └── StoreLayout.js      // 핑크퐁 스토어 홈페이지의 레이아웃
    ├── pages/                  
    │   ├── Home.js             // 메인 홈페이지의 홈/메인 페이지
    │   ├── IntroPinkfong.js    // 핑크퐁 소개 페이지
    │   ├── BusinessIntro.js    // 사업 소개 페이지
    │   ├── Partners.js         // 구매처 바로가기 페이지
    │   └── PinkfongPlus.js     // 핑크퐁 플러스 소개 페이지
    ├── store/                  // 핑크퐁 스토어 관련 모든 소스 코드 및 페이지
    │   ├── pages/              // 핑크퐁 스토어의 개별 페이지 컴포넌트
    │   │   ├── StoreIndexPage/   // 스토어 메인 페이지 관련
    │   │   │   │   ├── RecommendCategoryList/ 
    │   │   │   │   │   └── RecommendCategoryList.js
    │   │   │   │   └── TimeSaleProductList/ // 타임 세일 상품 리스트
    │   │   │   │       └── TimeSaleProductList.js
    │   │   │   └── StoreIndexPage.js // 스토어 메인 페이지 (배너, 컴포넌트 통합)
    │   │   ├── StoreCategory/    // 스토어 카테고리 페이지들
    │   │   │   ├── StoreCategoryAll.js     // 전체 카테고리 페이지
    │   │   │   ├── StoreCategoryDoll.js    // 인형 카테고리 페이지
    │   │   │   ├── StoreCategorySoundBook.js // 사운드북 카테고리 페이지
    │   │   │   └── StoreCategoryToyBook.js // 토이북 카테고리 페이지
    │   │   ├── StoreProductDetailPage/ // 상품 상세 페이지
    │   │   │   └── ProductDetailPage.js
    │   │   ├── StoreCartPage/    // 장바구니 페이지
    │   │   │   └── CartPage.js
    │   │   ├── StoreLogin/       // 로그인 페이지
    │   │   │   └── LoginPage.js
    │   │   ├── StoreJoin/        // 회원가입 페이지
    │   │   │   └── JoinPage.js
    │   │   ├── StoreOrderDelivery/ // 주문/배송 페이지
    │   │   │   └── OrderDeliveryPage.js
    │   │   ├── StoreCustomerService/ // 고객센터 페이지
    │   │   │   └── CustomerServicePage.js
    │   │   ├── StoreSearch/      // 검색 결과 페이지
    │   │   │   └── SearchPage.js
    │   │   ├── Error404Page.js   // 404 Not Found 페이지
    │   │   └── ComingSoonPage.js // 개발 중인 페이지 안내
    │   ├── components     // 스토어 페이지의 내부에서 사용되는 컴포넌트
    │   │   ├── Development        // 발달별 추천 카테고리 리스트 (개발 중)
    │   │   ├── DevelopmentProductList        // 발달별 추천 카테고리 리스트 (개발 중)
    │   │   ├── ProductDetailPage        //제품 클릭 시 이동하게되는 제품 상세페이지
    │   │   ├── StoreCard
    │   │   ├── StoreCategory
    │   │   │   └── StoreCategoryHeader.js   //스토어 홈페이지의 카테고리 각각에서 사용되는 카테고리 상단 섹션
    │   │   │   └── StoreCategoryHeader.scss
    │   │   │   └── StoreCategorySection.js  //스토어 홈페이지의 카테고리 각각에서 사용되는 카테고리 하단 섹션
    │   │   │   └── StoreCategorySection.scss   
    │   │   ├── context        
    │   │   │   └── CartContext.js //카트 기능 구현 파일
    │   └── Store.js              // 핑크퐁 스토어의 라우팅을 총괄하는 파일 (StoreLayout 적용)
    ├── App.css                     // 메인 App 전역 CSS
    ├── App.js                      // 메인 App 컴포넌트 (최상위 라우팅 및 레이아웃 관리)
    ├── index.css                   
    └── index.js                    // React 애플리케이션의 메인 진입점
```
