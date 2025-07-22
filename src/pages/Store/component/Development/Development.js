//(추후 업데이트 예정)
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import './Development.scss';
import DevelopmentProductList from '../DevelopmentProductList/DevelopmentProductList.js'; // 상품 리스트 컴포넌트 임포트

const developmentContent = [
    {
      id: "cognitive", // URL 용
      name: "인지발달", // 사용자 표시용
      title: "우리 아이, 생각하는 힘이 자라나는 시간",
      content: "아이들은 놀이 속에서 끊임없이 관찰하고, 비교하고, 추론하며 스스로의 생각을 키워갑니다. 이 시기의 인지 발달은 단순한 지식 습득이 아니라, 세상을 이해하고 문제를 해결해 나가는 힘의 기초가 됩니다.",
      contentImg: "",
      title2: "생각하는 힘, 이렇게 키워주세요!",
      content2: "블록을 쌓거나 퍼즐을 맞추면서 자신만의 방식으로 문제를 해결합니다. 그럴 땐 도와주기보다 기다려주는 것이 가장 좋은 방법이에요.",
      swiperItems: [
        { swiperItem: "퍼즐 맞추기", swiperContent: "- 난이도보단 “끝까지 해보려는 태도”가 중요해요." },
        { swiperItem: "블록 놀이", swiperContent: "- 목표 없이 자유롭게 쌓게 해보세요. 공간지각력도 함께 자랍니다." },
        { swiperItem: "같은 그림 찾기", swiperContent: "- 관찰력과 기억력을 동시에 자극하는 활동이에요." }
      ]
    },
    {
      id: "eq",
      name: "EQ발달",
      title: "아이 마음을 알아주는 연습, 정서·사회성 발달",
      content: "감정을 인식하고 표현하며, 타인의 감정을 공감하는 힘은 유아기에 급격히 자라납니다. 감정을 말로 표현하고 친구와 어울리는 경험이 쌓일수록 아이의 마음도 더 단단해집니다.",
      contentImg: "",
      title2: "마음 표현, 놀이로 시작해보세요",
      content2: "감정 카드를 활용해 지금 기분을 말로 표현해보거나, 역할 놀이를 통해 다른 사람의 입장을 경험하게 해보세요.",
      swiperItems: [
        { swiperItem: "감정 카드 놀이", swiperContent: "- “이 표정은 어떤 기분일까?” 질문해보세요." },
        { swiperItem: "역할 놀이", swiperContent: "- 친구나 가족 역할을 바꿔보며 공감을 배워요." },
        { swiperItem: "감정 스티커 일기", swiperContent: "- 오늘 기분을 그림 스티커로 표현해요." }
      ]
    },
    {
      id: "creative",
      name: "창작활동",
      title: "상상력과 표현력, 마음껏 펼치는 시간",
      content: "창작활동은 아이의 상상력과 자기표현력을 키워주는 중요한 놀이입니다...",
      contentImg: "",
      title2: "틀 없이, 마음껏 만들어보는 경험이 중요해요",
      content2: "정해진 결과보다는 과정을 즐기도록 격려해주세요. 창작은 자기표현의 첫걸음입니다.",
      swiperItems: [
        { swiperItem: "클레이 놀이", swiperContent: "- 나만의 캐릭터를 만들고 이름도 붙여보세요." },
        { swiperItem: "종이접기 & 만들기", swiperContent: "- 종이접기 후 역할놀이로 연결해도 좋아요." },
        { swiperItem: "그림 그리기", swiperContent: "- “이건 뭐야?” 보다 “이건 어떤 이야기야?”로 질문해 주세요." }
      ]
    },
    {
      id: "language",
      name: "언어학습",
      title: "말하고 듣고, 이야기로 자라는 언어 발달",
      content: "언어는 아이의 사고와 표현 능력을 연결하는 중요한 도구입니다...",
      contentImg: "",
      title2: "대화가 가장 좋은 언어 교육입니다",
      content2: "책을 읽어줄 때는 일방적으로 읽기보다는 이야기를 주고받듯 해주세요...",
      swiperItems: [
        { swiperItem: "동화책 읽기", swiperContent: "- “이 장면에서 OO는 왜 이렇게 했을까?” 질문해보세요." },
        { swiperItem: "단어 카드 놀이", swiperContent: "- 사물과 글자를 연결하는 재미를 느끼게 해요." },
        { swiperItem: "이야기 이어 말하기", swiperContent: "- 서로 한 문장씩 이야기 지어보기!" }
      ]
    },
    {
      id: "math",
      name: "수리학습",
      title: "수와 도형, 놀이로 만나는 첫 수학",
      content: "수학은 놀이를 통해 자연스럽게 접근할 때 아이가 더 흥미롭게 받아들입니다...",
      contentImg: "",
      title2: "일상 속 수놀이가 최고의 학습입니다",
      content2: "과자 나누기, 블록 색깔 분류 등 실생활에서 수 개념을 익혀보세요.",
      swiperItems: [
        { swiperItem: "과자 나누기", swiperContent: "- “엄마는 3개, 넌 몇 개 줄래?” 수를 실감하게 해요." },
        { swiperItem: "도형 퍼즐 맞추기", swiperContent: "- 모양 분류와 공간 인식이 함께 자라요." },
        { swiperItem: "패턴 카드 놀이", swiperContent: "- 규칙성 찾기, 수학적 사고의 시작이에요." }
      ]
    },
    {
      id: "nature",
      name: "자연탐구",
      title: "세상을 궁금해하는 아이, 자연 속 과학자로",
      content: "자연 현상과 생명체에 대한 호기심은 유아기의 과학적 탐구심을 자극합니다...",
      contentImg: "",
      title2: "직접 보고, 만져보는 경험이 중요해요",
      content2: "돋보기로 관찰하거나 식물을 키워보는 등의 경험을 통해 탐구심이 쑥쑥 자랍니다.",
      swiperItems: [
        { swiperItem: "잎사귀 관찰", swiperContent: "- “잎맥이 왜 이렇게 생겼을까?” 질문해보세요." },
        { swiperItem: "식물 키우기", swiperContent: "- 직접 물 주며 생명의 변화를 관찰해요." },
        { swiperItem: "곤충 탐험 놀이", swiperContent: "- 모형 곤충을 탐색하며 분류하기 놀이도 가능해요." }
      ]
    },
    {
      id: "social",
      name: "사회관계",
      title: "함께 놀며 배우는 사회성",
      content: "유아기에 친구와의 놀이를 통해 규칙, 차례, 협력 같은 사회적 규범을 배우게 됩니다...",
      contentImg: "",
      title2: "역할 나누기, 규칙 지키기부터 시작해보세요",
      content2: "병원놀이, 시장놀이처럼 역할과 규칙이 있는 놀이가 사회성 발달에 좋아요.",
      swiperItems: [
        { swiperItem: "가족놀이", swiperContent: "- 역할 분담과 공감 능력을 자연스럽게 배워요." },
        { swiperItem: "시장놀이", swiperContent: "- 물건 사고팔며 순서와 예절을 배워요." },
        { swiperItem: "간단한 보드게임", swiperContent: "- 차례 기다리기, 규칙 이해 훈련에 좋아요." }
      ]
    }
  ];

// Development 컴포넌트가 props로 selectedId를 받도록 수정
const Development = ({ selectedId }) => {
  // Debugging console logs
  console.log('Development component rendering');
  console.log('Received selectedId:', selectedId);

  // developmentContent 배열에서 selectedId와 일치하는 항목을 찾습니다.
  const selectedContent = developmentContent.find(item => item.id === selectedId);

  console.log('Found selectedContent:', selectedContent);
  // End of debugging console logs

  if (!selectedContent) {
    return (
        <div style={{ color: 'red', fontSize: '24px', textAlign: 'center', padding: '20px' }}>
            선택된 발달 영역 콘텐츠를 찾을 수 없습니다. (ID: {selectedId})
        </div>
    );
  }

  const d = selectedContent; // 찾은 콘텐츠를 'd' 변수에 할당

  return (
    <main className='Development' key={d.id}> {/* key는 d.id로 설정 */}
      <section className="title">
        <div className="inner">
            <span>{d.name}</span> {/* 사용자 표시용 name 사용 */}
            <h1>{d.title}</h1>
            <p>{d.content}</p>
        </div>
      </section>

      <section className="text">
        <div className="inner">
            <h1>{d.title2}</h1>
            <p>{d.content2}</p>
        </div>
      </section>

      <section className="content">
        <div className="inner">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              {d.swiperItems.map((item, index) => (
                <SwiperSlide key={index}> {/* SwiperSlide의 key는 고유해야 합니다. */}
                  <h2>{item.swiperItem}</h2>
                  <p>{item.swiperContent}</p>
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
      </section>

      {/* DevelopmentProductList 컴포넌트 추가 */}
      <section className="related-products">
        <div className="inner">
          {/* DevelopmentProductList에 현재 발달 영역의 id를 selectedCategory로 전달 */}
          <DevelopmentProductList selectedCategory={d.id} />
        </div>
      </section>
    </main>
  );
};

export default Development;
