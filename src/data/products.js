import React from 'react'

const products =
[
  {
    "id": "목욕놀이 스티커+아기상어 목욕물총 3종세트",
    "original_price": "40,000원",
    "discounted_price": "19,900원",
    "discount_rate": "50%",
    "image_name": "product1.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달"]
  },
  {
    "id": "핑크퐁 아기상어 분수매트",
    "original_price": "28,000원",
    "discounted_price": "13,900원",
    "discount_rate": "50%",
    "image_name": "product2.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["신체발달"]
  },
  {
    "id": "[무료배송] 아기상어 멜로디 버블 토이",
    "original_price": "30,000원",
    "discounted_price": "17,900원",
    "discount_rate": "40%",
    "image_name": "product3.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["창작활동"]
  },
  {
    "id": "아기상어 샤워기 뜰채낚시놀이 세트",
    "original_price": "10,900원",
    "discounted_price": "9,900원",
    "discount_rate": null,
    "image_name": "product4.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["인지발달", "신체발달"]
  },
  {
    "id": "베베핀 샤워기 뜰채낚시놀이 세트",
    "original_price": "12,900원",
    "discounted_price": "11,900원",
    "discount_rate": null,
    "image_name": "product5.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["인지발달", "신체발달"]
  },
  {
    "id": "아기상어 배낭물총",
    "original_price": "15,000원",
    "discounted_price": "11,900원",
    "discount_rate": "20%",
    "image_name": "product6.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["신체발달"]
  },
  {
    "id": "아기상어 미니물총",
    "original_price": "6,000원",
    "discounted_price": "5,000원",
    "discount_rate": "16%",
    "image_name": "product7.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["신체발달"]
  },
  {
    "id": "[무료배송] 두들북 2종 세트",
    "original_price": "16,000원",
    "discounted_price": "9,900원",
    "discount_rate": "38%",
    "image_name": "product8.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달"]
  },
  {
    "id": "베베핀 빅 플레이 사운드북 + 베베핀 인형 키링",
    "original_price": "50,000원",
    "discounted_price": "29,900원",
    "discount_rate": "40%",
    "image_name": "product9.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "EQ발달"]
  },
  {
    "id": "[무료배송] 아기상어 미니 가방스티커 3종 세트 (슈퍼마켓, 아이스크림, 햄버거가게)",
    "original_price": "18,000원",
    "discounted_price": "9,900원",
    "discount_rate": "45%",
    "image_name": "product10.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["사회관계"]
  },
  {
    "id": "[무료배송] 가방스티커 베베핀 생생 3종세트 (동물,탈것,과일채소)",
    "original_price": "20,400원",
    "discounted_price": "9,900원",
    "discount_rate": "51%",
    "image_name": "product11.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["자연탐구", "인지발달"]
  },
  {
    "id": "베베핀 생생 놀이북 3종 세트(동물, 바다동물, 공룡)",
    "original_price": "24,000원",
    "discounted_price": "12,900원",
    "discount_rate": "46%",
    "image_name": "product12.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["자연탐구", "인지발달"]
  },
  {
    "id": "아기상어 첫 놀이북 6종세트 (선긋기, 길찾기, 오리기, 풀칠하기, 접기, 붙이기)",
    "original_price": "47,000원",
    "discounted_price": "19,900원",
    "discount_rate": "57%",
    "image_name": "product13.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["인지발달", "신체발달"]
  },
  {
    "id": "핑크퐁 홈스쿨 잉글리시 박스",
    "original_price": "249,000원",
    "discounted_price": "109,000원",
    "discount_rate": "56%",
    "image_name": "product14.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["언어학습"]
  },
  {
    "id": "아기상어 멜로디 버블건",
    "original_price": "15,000원",
    "discounted_price": "10,900원",
    "discount_rate": "27%",
    "image_name": "product15.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["창작활동"]
  },
  {
    "id": "멜로디 자동 버블봉",
    "original_price": "16,000원",
    "discounted_price": "11,900원",
    "discount_rate": "25%",
    "image_name": "product16.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["창작활동"]
  },
  {
    "id": "[세트할인] 아기상어 코딩컴퓨터+첫 스마트폰",
    "original_price": "179,000원",
    "discounted_price": "119,000원",
    "discount_rate": "33%",
    "image_name": "product17.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["인지발달", "언어학습"]
  },
  {
    "id": "[1+1] 한글버스+알파벳버스",
    "original_price": "120,000원",
    "discounted_price": "64,900원",
    "discount_rate": "45%",
    "image_name": "product18.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["언어학습"]
  },
  {
    "id": "[무료배송] 베베핀 동요 스마트폰",
    "original_price": "20,000원",
    "discounted_price": "12,900원",
    "discount_rate": "35%",
    "image_name": "product19.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습"]
  },
  {
    "id": "베베핀 빅 플레이 사운드북 - 아기상어 인형을 찾아라!",
    "original_price": "35,000원",
    "discounted_price": "22,900원",
    "discount_rate": "34%",
    "image_name": "product20.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["인지발달"]
  },
  {
    "id": "아기상어 첫 사운드 터치북",
    "original_price": "37,000원",
    "discounted_price": "26,900원",
    "discount_rate": "27%",
    "image_name": "product21.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "인지발달"]
  },
  {
    "id": "핑크퐁플러스 멤버십",
    "original_price": "132,000원",
    "discounted_price": "70,000원",
    "discount_rate": "46%",
    "image_name": "product22.png",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["종합발달"]
  },
  {
    "id": "베베핀 사운드 터치북",
    "original_price": "37,000원",
    "discounted_price": "26,900원",
    "discount_rate": "27%",
    "image_name": "product23.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "인지발달"]
  },
  {
    "id": "[무료배송] 아기상어 한글 카드 버스",
    "original_price": "30,000원",
    "discounted_price": "23,900원",
    "discount_rate": "20%",
    "image_name": "product24.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["언어학습"]
  },
  {
    "id": "[무료배송] 베베핀 영어 카드 버스",
    "original_price": "30,000원",
    "discounted_price": "23,900원",
    "discount_rate": "20%",
    "image_name": "product25.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["언어학습"]
  },
  {
    "id": "베베핀 빅 플레이 사운드북+카드버스",
    "original_price": "65,000원",
    "discounted_price": "39,900원",
    "discount_rate": "38%",
    "image_name": "product26.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "인지발달"]
  },
  {
    "id": "아기상어 멜로디 버블토이+아기상어 목욕물총 3종세트",
    "original_price": "45,000원",
    "discounted_price": "23,900원",
    "discount_rate": "46%",
    "image_name": "product27.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달"]
  },
  {
    "id": "베베핀 목욕물총",
    "original_price": "37,000원",
    "discounted_price": "19,900원",
    "discount_rate": "46%",
    "image_name": "product28.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["신체발달"]
  },
  {
    "id": "목욕놀이 스티커 시리즈",
    "original_price": "18,000원",
    "discounted_price": "12,900원",
    "discount_rate": "28%",
    "image_name": "product29.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달"]
  },
  {
    "id": "바다 해변 통 모래놀이 세트",
    "original_price": "12,000원",
    "discounted_price": "10,900원",
    "discount_rate": null,
    "image_name": "product30.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달"]
  },
  {
    "id": "아기상어 코딩컴퓨터",
    "original_price": "159,000원",
    "discounted_price": "109,000원",
    "discount_rate": "31%",
    "image_name": "product31.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["인지발달"]
  },
  {
    "id": "아기상어 분수매트+상어가족 목욕물총 3종 세트",
    "original_price": "43,000원",
    "discounted_price": "19,900원",
    "discount_rate": "53%",
    "image_name": "product32.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["신체발달"]
  },
  {
    "id": "스티커 세트 4종 세트 (옷 입히기, 뽑기, 카메라, 우리 집)",
    "original_price": "20,000원",
    "discounted_price": "9,900원",
    "discount_rate": "50%",
    "image_name": "product33.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "사회관계", "EQ발달"]
  },
  {
    "id": "아기상어 버블토이+목욕놀이 스티커",
    "original_price": "55,000원",
    "discounted_price": "29,900원",
    "discount_rate": "45%",
    "image_name": "product34.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달"]
  },
  {
    "id": "아기상어 첫 사운드토이+첫 사운드하우스",
    "original_price": "75,000원",
    "discounted_price": "29,900원",
    "discount_rate": "60%",
    "image_name": "product35.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "인지발달"]
  },
  {
    "id": "[세트할인] 아기상어 첫 뜯어 만들기 2종 세트 (생일파티, 슈퍼마켓)",
    "original_price": "26,000원",
    "discounted_price": "14,900원",
    "discount_rate": "42%",
    "image_name": "product36.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달", "사회관계"]
  },
  {
    "id": "듀얼동요패드+마더구스패드",
    "original_price": "55,000원",
    "discounted_price": "27,500원",
    "discount_rate": "50%",
    "image_name": "product37.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습"]
  },
  {
    "id": "[무료배송] 아기상어 첫 놀이북 4종 세트 (선긋기,길찾기,오리기,풀칠놀이)",
    "original_price": "28,000원",
    "discounted_price": "13,900원",
    "discount_rate": "50%",
    "image_name": "product38.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["인지발달", "신체발달"]
  },
  {
    "id": "아기상어 스티커 세트 - 카메라",
    "original_price": "5,000원",
    "discounted_price": "3,000원",
    "discount_rate": "40%",
    "image_name": "product39.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달"]
  },
  {
    "id": "아기상어 스티커 세트 - 뽑기",
    "original_price": "5,000원",
    "discounted_price": "3,000원",
    "discount_rate": "40%",
    "image_name": "product40.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달"]
  },
  {
    "id": "핑크퐁 스티커 세트 - 옷 입히기",
    "original_price": "5,000원",
    "discounted_price": "3,000원",
    "discount_rate": "40%",
    "image_name": "product41.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["사회관계", "EQ발달"]
  },
  {
    "id": "핑크퐁 스티커 세트 - 카페",
    "original_price": "5,000원",
    "discounted_price": "3,000원",
    "discount_rate": "40%",
    "image_name": "product42.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["사회관계"]
  },
  {
    "id": "베베핀 스티커 세트 - 우리 집",
    "original_price": "5,000원",
    "discounted_price": "3,000원",
    "discount_rate": "40%",
    "image_name": "product43.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["사회관계"]
  },
  {
    "id": "베베핀 스티커 세트 - 캠핑",
    "original_price": "5,000원",
    "discounted_price": "3,000원",
    "discount_rate": "40%",
    "image_name": "product44.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["사회관계"]
  },
  {
    "id": "[무료배송] 아기상어 첫 사운드 토이",
    "original_price": "30,000원",
    "discounted_price": "19,900원",
    "discount_rate": "33%",
    "image_name": "product45.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "인지발달"]
  },
  {
    "id": "[무료배송] 아기상어 첫 사운드 하우스",
    "original_price": "45,000원",
    "discounted_price": "34,900원",
    "discount_rate": "22%",
    "image_name": "product46.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "인지발달"]
  },
  {
    "id": "[무료배송] 아기상어 댄싱 패드",
    "original_price": "70,000원",
    "discounted_price": "49,900원",
    "discount_rate": "28%",
    "image_name": "product47.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["신체발달"]
  },
  {
    "id": "[세트할인] 슈퍼구조대 멜로디 자동차 3종 세트",
    "original_price": "45,000원",
    "discounted_price": "29,900원",
    "discount_rate": "33%",
    "image_name": "product48.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["사회관계", "인지발달"]
  },
  {
    "id": "핑크퐁 베베핀 마이크",
    "original_price": "30,000원",
    "discounted_price": "19,900원",
    "discount_rate": "33%",
    "image_name": "product49.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습"]
  },
  {
    "id": "핑크퐁 베베핀 냠냠놀이",
    "original_price": "35,000원",
    "discounted_price": "19,900원",
    "discount_rate": "43%",
    "image_name": "product50.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["사회관계", "신체발달"]
  },
  {
    "id": "아기상어 첫 운전놀이",
    "original_price": "35,000원",
    "discounted_price": "22,900원",
    "discount_rate": "34%",
    "image_name": "product51.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["인지발달"]
  },
  {
    "id": "베베핀 매직 목욕놀이 스티커 2종 세트 (동물, 과일채소)",
    "original_price": "55,000원",
    "discounted_price": "25,900원",
    "discount_rate": "52%",
    "image_name": "product52.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "자연탐구", "신체발달"]
  },
  {
    "id": "[무료배송] 베베핀 촛불 생일 케이크",
    "original_price": "38,900원",
    "discounted_price": "34,900원",
    "discount_rate": null,
    "image_name": "product53.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["사회관계", "EQ발달"]
  },
  {
    "id": "[무료배송] 아기상어 회전 트랙 LED 레일카",
    "original_price": "55,900원",
    "discounted_price": "49,900원",
    "discount_rate": null,
    "image_name": "product54.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["인지발달", "신체발달"]
  },
  {
    "id": "아기상어 에어프라이어 주방놀이",
    "original_price": "39,900원",
    "discounted_price": "35,900원",
    "discount_rate": null,
    "image_name": "product55.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["사회관계"]
  },
  {
    "id": "[무료배송] 베베핀 사파리 기차놀이",
    "original_price": "39,900원",
    "discounted_price": "35,900원",
    "discount_rate": null,
    "image_name": "product56.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["자연탐구", "인지발달", "신체발달"]
  },
  {
    "id": "아기상어 빙글뱅글 말하는 세탁기",
    "original_price": "44,900원",
    "discounted_price": "39,900원",
    "discount_rate": "11%",
    "image_name": "product57.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["사회관계"]
  },
  {
    "id": "베베핀 똑똑한 자석놀이 세트",
    "original_price": "35,900원",
    "discounted_price": "32,900원",
    "discount_rate": null,
    "image_name": "product58.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["인지발달", "신체발달"]
  },
  {
    "id": "핑크퐁 슈퍼구조대 출동 본부",
    "original_price": "79,900원",
    "discounted_price": "69,900원",
    "discount_rate": "12%",
    "image_name": "product59.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["사회관계"]
  },
  {
    "id": "핑크퐁 슈퍼구조대 5층 주차타워",
    "original_price": "64,900원",
    "discounted_price": "54,900원",
    "discount_rate": "15%",
    "image_name": "product60.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["사회관계", "인지발달"]
  },
  {
    "id": "아기상어 목욕물총 3종 세트",
    "original_price": "15,000원",
    "discounted_price": "9,900원",
    "discount_rate": "34%",
    "image_name": "product61.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["신체발달"]
  },
  {
    "id": "[무료배송] 아기상어 첫 뜯어 만들기 - 생일 파티",
    "original_price": "13,000원",
    "discounted_price": "9,900원",
    "discount_rate": "23%",
    "image_name": "product62.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달", "사회관계"]
  },
  {
    "id": "[무료배송] 아기상어 첫 뜯어 만들기 - 슈퍼마켓",
    "original_price": "13,000원",
    "discounted_price": "9,900원",
    "discount_rate": "23%",
    "image_name": "product63.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달", "사회관계"]
  },
  {
    "id": "베베핀 플레이 사운드북 - 응가하자",
    "original_price": "28,000원",
    "discounted_price": "17,900원",
    "discount_rate": "36%",
    "image_name": "product64.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["EQ발달", "사회관계"]
  },
  {
    "id": "베베핀 플레이 사운드북 - 잠잘 시간이야",
    "original_price": "28,000원",
    "discounted_price": "17,900원",
    "discount_rate": "36%",
    "image_name": "product65.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["EQ발달", "사회관계"]
  },
  {
    "id": "베베핀 플레이 사운드북 - 밥 먹을 시간이야",
    "original_price": "28,000원",
    "discounted_price": "17,900원",
    "discount_rate": "36%",
    "image_name": "product66.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["EQ발달", "사회관계"]
  },
  {
    "id": "베베핀 플레이 사운드북 - 생일 축하해!",
    "original_price": "28,000원",
    "discounted_price": "17,900원",
    "discount_rate": "36%",
    "image_name": "product67.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["EQ발달", "사회관계"]
  },
  {
    "id": "베베핀 플레이 사운드북 - 만져봐! 동물",
    "original_price": "28,000원",
    "discounted_price": "17,900원",
    "discount_rate": "36%",
    "image_name": "product68.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["자연탐구", "언어학습"]
  },
  {
    "id": "베베핀 플레이 사운드북 - 크리스마스 동요",
    "original_price": "28,000원",
    "discounted_price": "17,900원",
    "discount_rate": "36%",
    "image_name": "product69.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "EQ발달"]
  },
  {
    "id": "베베핀 플레이 사운드북 - 베베핀 구조대",
    "original_price": "28,000원",
    "discounted_price": "17,900원",
    "discount_rate": "36%",
    "image_name": "product70.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["사회관계"]
  },
  {
    "id": "베베핀 생생 피규어북 - 동물탐험",
    "original_price": "30,000원",
    "discounted_price": "19,900원",
    "discount_rate": "33%",
    "image_name": "product71.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["자연탐구", "인지발달", "신체발달"]
  },
  {
    "id": "베베핀 생생 피규어북 - 바다동물탐험",
    "original_price": "30,000원",
    "discounted_price": "19,900원",
    "discount_rate": "33%",
    "image_name": "product72.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["자연탐구", "인지발달", "신체발달"]
  },
  {
    "id": "베베핀 생생 피규어북 - 공룡탐험",
    "original_price": "30,000원",
    "discounted_price": "19,900원",
    "discount_rate": "33%",
    "image_name": "product73.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["자연탐구", "인지발달", "신체발달"]
  },
  {
    "id": "아기상어 한글카드버스+베베핀 영어카드버스",
    "original_price": "60,000원",
    "discounted_price": "29,900원",
    "discount_rate": "50%",
    "image_name": "product74.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "인지발달"]
  },
  {
    "id": "아기상어 첫 스티커북 3종 세트 (우리집,유치원,슈퍼마켓)",
    "original_price": "24,000원",
    "discounted_price": "11,900원",
    "discount_rate": "50%",
    "image_name": "product75.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["사회관계", "창작활동", "신체발달"]
  },
  {
    "id": "[무료배송] 베베핀 인형 키링",
    "original_price": "15,000원",
    "discounted_price": "12,000원",
    "discount_rate": "20%",
    "image_name": "product76.jpg",
    "product": "인형",
    "registration_date": "2024-07-11",
    "development": ["EQ발달"]
  },
  {
    "id": "아기상어 미니 인형 키링",
    "original_price": "10,000원",
    "discounted_price": "6,000원",
    "discount_rate": "40%",
    "image_name": "product77.jpg",
    "product": "인형",
    "registration_date": "2024-07-11",
    "development": ["EQ발달"]
  },
  {
    "id": "아기상어 미니 가방스티커 - 슈퍼마켓",
    "original_price": "6,000원",
    "discounted_price": "3,900원",
    "discount_rate": "35%",
    "image_name": "product78.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["사회관계", "창작활동"]
  },
  {
    "id": "아기상어 미니 가방 스티커 - 아이스크림 가게",
    "original_price": "6,000원",
    "discounted_price": "3,900원",
    "discount_rate": "35%",
    "image_name": "product79.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["사회관계", "창작활동"]
  },
  {
    "id": "아기상어 미니 가방 스티커 - 햄버거 가게",
    "original_price": "6,000원",
    "discounted_price": "3,900원",
    "discount_rate": "35%",
    "image_name": "product80.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["사회관계", "창작활동"]
  },
  {
    "id": "핑크퐁 아기상어 베베핀 포토 키링",
    "original_price": "8,000원",
    "discounted_price": "4,900원",
    "discount_rate": "38%",
    "image_name": "product81.jpg",
    "product": "인형",
    "registration_date": "2024-07-11",
    "development": ["EQ발달"]
  },
  {
    "id": "베베핀 썼다지웠다 한글+아기상어 한글카드120",
    "original_price": "38,000원",
    "discounted_price": "22,900원",
    "discount_rate": "39%",
    "image_name": "product82.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "인지발달"]
  },
  {
    "id": "아기상어 사운드 터치북+베베핀 사운드 터치북",
    "original_price": "74,000원",
    "discounted_price": "39,900원",
    "discount_rate": "46%",
    "image_name": "product83.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "인지발달"]
  },{
    "id": "베베핀 매직 목욕놀이 스티커+베베핀 목욕물총 세트",
    "original_price": "62,000원",
    "discounted_price": "38,900원",
    "discount_rate": "37%",
    "image_name": "product84.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달", "자연탐구"]
  },
  {
    "id": "베베핀 구조대 플레이 사운드북+멜로디 자동차",
    "original_price": "43,000원",
    "discounted_price": "24,900원",
    "discount_rate": "42%",
    "image_name": "product85.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["사회관계", "인지발달"]
  },
  {
    "id": "베베핀 사운드 터치북+영어카드버스",
    "original_price": "67,000원",
    "discounted_price": "34,900원",
    "discount_rate": "47%",
    "image_name": "product86.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "인지발달"]
  },
  {
    "id": "아기상어 사운드 터치북+한글카드버스",
    "original_price": "67,000원",
    "discounted_price": "34,900원",
    "discount_rate": "47%",
    "image_name": "product87.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "인지발달"]
  },
  {
    "id": "[3-5세] 홈스쿨 스텝업박스",
    "original_price": "160,000원",
    "discounted_price": "69,900원",
    "discount_rate": "56%",
    "image_name": "product88.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["종합발달"]
  },
  {
    "id": "[0-3세] 핑크퐁 홈스쿨 스타트박스",
    "original_price": "604,000원",
    "discounted_price": "199,000원",
    "discount_rate": "67%",
    "image_name": "product89.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["종합발달"]
  },
  {
    "id": "핑크퐁 홈스쿨 스타트 영어박스",
    "original_price": "109,000원",
    "discounted_price": "59,900원",
    "discount_rate": "45%",
    "image_name": "product90.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["언어학습"]
  },
  {
    "id": "가방스티커 역할놀이 3종세트 (생일파티,쇼핑몰,카페놀이)",
    "original_price": "20,400원",
    "discounted_price": "9,900원",
    "discount_rate": "51%",
    "image_name": "product91.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["사회관계", "창작활동"]
  },
  {
    "id": "[역할놀이세트] 베베핀 냠냠놀이+베베핀 30cm인형",
    "original_price": "67,000원",
    "discounted_price": "34,900원",
    "discount_rate": "47%",
    "image_name": "product92.jpg",
    "product": "인형",
    "registration_date": "2024-07-11",
    "development": ["사회관계", "EQ발달"]
  },
  {
    "id": "베베핀 마이크+아기상어 사운드 미러볼",
    "original_price": "60,000원",
    "discounted_price": "34,900원",
    "discount_rate": "41%",
    "image_name": "product93.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "창작활동"]
  },
  {
    "id": "베베핀 썼다 지웠다 - 한글",
    "original_price": "20,000원",
    "discounted_price": "12,900원",
    "discount_rate": "35%",
    "image_name": "product94.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "신체발달"]
  },
  {
    "id": "베베핀 놀이세트 (마이크+냠냠놀이+매직목욕스티커)",
    "original_price": "90,000원",
    "discounted_price": "49,900원",
    "discount_rate": "44%",
    "image_name": "product95.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "사회관계", "창작활동", "신체발달", "자연탐구"]
  },
  {
    "id": "아기상어 첫 사운드패드+아기상어 첫 스마트폰",
    "original_price": "50,000원",
    "discounted_price": "24,900원",
    "discount_rate": "50%",
    "image_name": "product96.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "인지발달"]
  },
  {
    "id": "아기상어 첫 스티커북 - 우리 집",
    "original_price": "8,000원",
    "discounted_price": "4,900원",
    "discount_rate": "38%",
    "image_name": "product97.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "사회관계", "신체발달"]
  },
  {
    "id": "아기상어 첫 스티커북 - 유치원",
    "original_price": "8,000원",
    "discounted_price": "4,900원",
    "discount_rate": "38%",
    "image_name": "product98.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "사회관계", "신체발달"]
  },
  {
    "id": "아기상어 첫 스티커북 - 슈퍼마켓",
    "original_price": "8,000원",
    "discounted_price": "4,900원",
    "discount_rate": "38%",
    "image_name": "product99.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "사회관계", "신체발달"]
  },
  {
    "id": "아기상어 끈달린 빨대물통",
    "original_price": "13,000원",
    "discounted_price": "8,900원",
    "discount_rate": "31%",
    "image_name": "product100.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["신체발달"]
  },
  {
    "id": "핑크퐁 아기상어 손잡이컵 3종 세트",
    "original_price": "4,700원",
    "discounted_price": "3,900원",
    "discount_rate": "17%",
    "image_name": "product101.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["신체발달"]
  },
  {
    "id": "핑크퐁 아기상어 입체스푼포크",
    "original_price": "15,000원",
    "discounted_price": "11,900원",
    "discount_rate": "20%",
    "image_name": "product102.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["신체발달"]
  },
  {
    "id": "아기상어 입체스푼포크 케이스 세트",
    "original_price": "24,900원",
    "discounted_price": "16,900원",
    "discount_rate": "32%",
    "image_name": "product103.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["신체발달"]
  },
  {
    "id": "아기상어 스텐논슬립컵",
    "original_price": "18,000원",
    "discounted_price": "8,900원",
    "discount_rate": "50%",
    "image_name": "product104.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["신체발달"]
  },
  {
    "id": "핑크퐁 투명 치카컵",
    "original_price": "4,200원",
    "discounted_price": "3,900원",
    "discount_rate": null,
    "image_name": "product105.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["신체발달"]
  },
  {
    "id": "아기상어 스텐 교정 젓가락",
    "original_price": "7,900원",
    "discounted_price": "5,900원",
    "discount_rate": "25%",
    "image_name": "product106.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["신체발달"]
  },
  {
    "id": "아기상어 입체 교정 젓가락",
    "original_price": "12,000원",
    "discounted_price": "7,900원",
    "discount_rate": "34%",
    "image_name": "product107.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["신체발달"]
  },
  {
    "id": "아기상어 다용도스푼포크 세트 6p",
    "original_price": "5,500원",
    "discounted_price": "4,900원",
    "discount_rate": null,
    "image_name": "product108.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["신체발달"]
  },
  {
    "id": "인기 동요 BEST 10 사운드북",
    "original_price": "14,000원",
    "discounted_price": "9,900원",
    "discount_rate": "29%",
    "image_name": "product109.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습"]
  },
  {
    "id": "캐릭터 컬러링북 2종 세트",
    "original_price": "16,000원",
    "discounted_price": "9,900원",
    "discount_rate": "38%",
    "image_name": "product110.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달"]
  },
  {
    "id": "베베핀 캐릭터 컬러링북",
    "original_price": "8,000원",
    "discounted_price": "5,400원",
    "discount_rate": "32%",
    "image_name": "product111.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달"]
  },
  {
    "id": "핑크퐁 베베핀 인형",
    "original_price": "32,000원",
    "discounted_price": "19,900원",
    "discount_rate": "37%",
    "image_name": "product112.jpg",
    "product": "인형",
    "registration_date": "2024-07-11",
    "development": ["EQ발달"]
  },
  {
    "id": "베베핀 매직 목욕놀이 스티커 - 동물",
    "original_price": "25,000원",
    "discounted_price": "13,900원",
    "discount_rate": "44%",
    "image_name": "product113.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달", "자연탐구"]
  },
  {
    "id": "베베핀 매직 목욕놀이 스티커 - 과일 채소",
    "original_price": "25,000원",
    "discounted_price": "13,900원",
    "discount_rate": "44%",
    "image_name": "product114.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달", "자연탐구"]
  },
  {
    "id": "가방스티커 - 생일파티",
    "original_price": "6,800원",
    "discounted_price": "3,900원",
    "discount_rate": "42%",
    "image_name": "product115.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["사회관계", "창작활동"]
  },
  {
    "id": "가방스티커 - 쇼핑몰",
    "original_price": "6,800원",
    "discounted_price": "3,900원",
    "discount_rate": "42%",
    "image_name": "product116.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["사회관계", "창작활동"]
  },
  {
    "id": "[무료배송] 아기상어 베이비볼 딸랑이 미니카 3종 세트",
    "original_price": "13,800원",
    "discounted_price": "12,900원",
    "discount_rate": null,
    "image_name": "product117.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["신체발달", "인지발달"]
  },
  {
    "id": "베베핀 생생 피규어북 세트",
    "original_price": "60,000원",
    "discounted_price": "35,900원",
    "discount_rate": "40%",
    "image_name": "product118.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["자연탐구", "인지발달", "신체발달"]
  },
  {
    "id": "베베핀 플레이 사운드북 3종세트 (응가하자,잠잘시간이야,밥먹을시간이야)",
    "original_price": "84,000원",
    "discounted_price": "39,800원",
    "discount_rate": "52%",
    "image_name": "product119.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["EQ발달", "사회관계"]
  },
  {
    "id": "핑크퐁 사운드워크북 한글세트",
    "original_price": "20,000원",
    "discounted_price": "9,900원",
    "discount_rate": "50%",
    "image_name": "product120.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "신체발달"]
  },
  {
    "id": "아기상어 사운드터치북+아기상어 첫사운드패드",
    "original_price": "67,000원",
    "discounted_price": "29,900원",
    "discount_rate": "55%",
    "image_name": "product121.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "인지발달"]
  },
  {
    "id": "아기상어 사운드 애착인형",
    "original_price": "22,000원",
    "discounted_price": "14,900원",
    "discount_rate": "32%",
    "image_name": "product122.jpg",
    "product": "인형",
    "registration_date": "2024-07-11",
    "development": ["EQ발달"]
  },
  {
    "id": "니니모 인형",
    "original_price": "25,000원",
    "discounted_price": "13,900원",
    "discount_rate": "44%",
    "image_name": "product123.jpg",
    "product": "인형",
    "registration_date": "2024-07-11",
    "development": ["EQ발달"]
  },
  {
    "id": "[무료배송] 핑크퐁 리틀 아티스트 물감놀이",
    "original_price": "39,900원",
    "discounted_price": "32,900원",
    "discount_rate": "17%",
    "image_name": "product124.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달"]
  },
  {
    "id": "[무료배송] 베베핀 스마트 병원놀이 패드",
    "original_price": "30,000원",
    "discounted_price": "19,900원",
    "discount_rate": "33%",
    "image_name": "product125.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["사회관계", "인지발달"]
  },
  {
    "id": "베베핀 생생 피규어북+ 생생놀이북 3종세트",
    "original_price": "54,000원",
    "discounted_price": "24,900원",
    "discount_rate": "53%",
    "image_name": "product126.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["자연탐구", "인지발달", "신체발달"]
  },
  {
    "id": "핑크퐁 캐릭터 컬러링북",
    "original_price": "8,000원",
    "discounted_price": "5,400원",
    "discount_rate": "32%",
    "image_name": "product127.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달"]
  },
  {
    "id": "아기상어 캐릭터 컬러링북",
    "original_price": "8,000원",
    "discounted_price": "5,400원",
    "discount_rate": "32%",
    "image_name": "product128.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달"]
  },
  {
    "id": "핑크퐁 한글버스",
    "original_price": "60,000원",
    "discounted_price": "34,900원",
    "discount_rate": "41%",
    "image_name": "product129.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "인지발달"]
  },
  {
    "id": "아기상어 알파벳 버스",
    "original_price": "60,000원",
    "discounted_price": "34,900원",
    "discount_rate": "41%",
    "image_name": "product130.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "인지발달"]
  },
  {
    "id": "[무료배송] 가방퍼즐 1+1",
    "original_price": "26,000원",
    "discounted_price": "14,900원",
    "discount_rate": "42%",
    "image_name": "product131.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["인지발달", "신체발달"]
  },
  {
    "id": "[세트할인] 베베핀 스탬프 놀이북+베베핀 두들북",
    "original_price": "36,000원",
    "discounted_price": "19,900원",
    "discount_rate": "44%",
    "image_name": "product132.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달"]
  },
  {
    "id": "핑크퐁 크로스백 (WP-B27K)",
    "original_price": "15,000원",
    "discounted_price": "9,900원",
    "discount_rate": "34%",
    "image_name": "product133.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["사회관계"]
  },
  {
    "id": "아기상어 크로스백 (WP-B22K)",
    "original_price": "15,000원",
    "discounted_price": "9,900원",
    "discount_rate": "34%",
    "image_name": "product134.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["사회관계"]
  },
  {
    "id": "베베핀 목욕물총+목욕놀이 스티커",
    "original_price": "55,000원",
    "discounted_price": "29,900원",
    "discount_rate": "45%",
    "image_name": "product135.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["신체발달", "창작활동", "자연탐구"]
  },
  {
    "id": "베베핀 플레이 사운드북 베스트 2종 세트 (응가하자,생일축하해)",
    "original_price": "56,000원",
    "discounted_price": "29,900원",
    "discount_rate": "46%",
    "image_name": "product136.jpg",
    "product": "사운드북",
    "registration_date": "2020-07-11",
    "development": ["EQ발달", "사회관계"]
  },
  {
    "id": "베베핀 생생 놀이북 - 동물",
    "original_price": "8,000원",
    "discounted_price": "5,400원",
    "discount_rate": "32%",
    "image_name": "product137.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["자연탐구", "인지발달"]
  },
  {
    "id": "베베핀 생생 놀이북 - 바다동물",
    "original_price": "8,000원",
    "discounted_price": "5,400원",
    "discount_rate": "32%",
    "image_name": "product138.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["자연탐구", "인지발달"]
  },
  {
    "id": "베베핀 생생 놀이북 - 공룡",
    "original_price": "8,000원",
    "discounted_price": "5,400원",
    "discount_rate": "32%",
    "image_name": "product139.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["자연탐구", "인지발달"]
  },
  {
    "id": "슈퍼구조대 멜로디 자동차 - 소방차",
    "original_price": "15,000원",
    "discounted_price": "12,000원",
    "discount_rate": "20%",
    "image_name": "product140.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["사회관계", "인지발달"]
  },
  {
    "id": "슈퍼구조대 멜로디 자동차 - 경찰차",
    "original_price": "15,000원",
    "discounted_price": "12,000원",
    "discount_rate": "20%",
    "image_name": "product141.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["사회관계", "인지발달"]
  },
  {
    "id": "슈퍼구조대 멜로디 자동차 - 구급차",
    "original_price": "15,000원",
    "discounted_price": "12,000원",
    "discount_rate": "20%",
    "image_name": "product142.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["사회관계", "인지발달"]
  },
  {
    "id": "[세트할인] 만져봐! 동물 사운드북 + 생생 동물 퍼즐",
    "original_price": "36,000원",
    "discounted_price": "19,900원",
    "discount_rate": "44%",
    "image_name": "product143.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["자연탐구", "언어학습", "인지발달"]
  },
  {
    "id": "핑크퐁 인기동요 마이크+사운드 미러볼",
    "original_price": "78,000원",
    "discounted_price": "34,900원",
    "discount_rate": "55%",
    "image_name": "product144.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "창작활동"]
  },
  {
    "id": "[무료배송] 베베핀 스탬프 놀이북",
    "original_price": "28,000원",
    "discounted_price": "17,900원",
    "discount_rate": "36%",
    "image_name": "product145.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달"]
  },
  {
    "id": "핑크퐁 클라우드 샌드몬 - 아이스크림 만들기 세트",
    "original_price": "19,800원",
    "discounted_price": "15,900원",
    "discount_rate": "19%",
    "image_name": "product146.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달"]
  },
  {
    "id": "아기상어 클라우드 샌드몬 - 아쿠아캐슬 만들기 세트",
    "original_price": "19,800원",
    "discounted_price": "15,900원",
    "discount_rate": "19%",
    "image_name": "product147.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달"]
  },
  {
    "id": "아기상어 첫 놀이북 3종세트 (오리기,접기,풀칠하기)",
    "original_price": "21,000원",
    "discounted_price": "9,900원",
    "discount_rate": "52%",
    "image_name": "product148.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["신체발달", "인지발달"]
  },
  {
    "id": "[무료배송] 가방스티커 베스트 3종 세트 (아기상어, 동물, 마트놀이)",
    "original_price": "20,400원",
    "discounted_price": "9,900원",
    "discount_rate": "51%",
    "image_name": "product149.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["사회관계", "창작활동", "자연탐구"]
  },
  {
    "id": "베베핀 빙글빙글 멜로디 채집놀이",
    "original_price": "13,000원",
    "discounted_price": "9,900원",
    "discount_rate": "23%",
    "image_name": "product150.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["자연탐구", "신체발달"]
  },
  {
    "id": "아기상어 스피드 체인지 낚시놀이",
    "original_price": "14,000원",
    "discounted_price": "10,900원",
    "discount_rate": "22%",
    "image_name": "product151.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["신체발달", "인지발달"]
  },
  {
    "id": "아기상어 첫 피아노 사운드북",
    "original_price": "30,000원",
    "discounted_price": "19,900원",
    "discount_rate": "33%",
    "image_name": "product152.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "창작활동"]
  },
  {
    "id": "[세트할인] 베베핀 목욕물총+베베핀 두들북",
    "original_price": "45,000원",
    "discounted_price": "24,900원",
    "discount_rate": "44%",
    "image_name": "product153.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["신체발달", "창작활동"]
  },
  {
    "id": "[무료배송] 핑크퐁 원더스타 병원놀이 의사가방 세트",
    "original_price": "31,900원",
    "discounted_price": "25,900원",
    "discount_rate": "18%",
    "image_name": "product154.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["사회관계", "인지발달"]
  },
  {
    "id": "아기상어 첫 사운드 패드",
    "original_price": "30,000원",
    "discounted_price": "14,900원",
    "discount_rate": "50%",
    "image_name": "product155.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "인지발달"]
  },
  {
    "id": "아기상어 안전벨트 인형",
    "original_price": "22,000원",
    "discounted_price": "15,900원",
    "discount_rate": "27%",
    "image_name": "product156.jpg",
    "product": "인형",
    "registration_date": "2024-07-11",
    "development": ["EQ발달"]
  },
  {
    "id": "베베핀 멜로디 키링",
    "original_price": "15,000원",
    "discounted_price": "9,900원",
    "discount_rate": "34%",
    "image_name": "product157.jpg",
    "product": "인형",
    "registration_date": "2024-07-11",
    "development": ["EQ발달"]
  },
  {
    "id": "핑크퐁 인형 네임택",
    "original_price": "12,000원",
    "discounted_price": "9,900원",
    "discount_rate": "17%",
    "image_name": "product158.jpg",
    "product": "인형",
    "registration_date": "2024-07-11",
    "development": ["EQ발달"]
  },
  {
    "id": "아기상어 인형 네임택",
    "original_price": "12,000원",
    "discounted_price": "9,900원",
    "discount_rate": "17%",
    "image_name": "product159.jpg",
    "product": "인형",
    "registration_date": "2024-07-11",
    "development": ["EQ발달"]
  },
  {
    "id": "핑크퐁 아기상어 타투 스티커",
    "original_price": "2,500원",
    "discounted_price": "2,000원",
    "discount_rate": "20%",
    "image_name": "product160.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달"]
  },
  {
    "id": "베베핀 타투 스티커",
    "original_price": "2,500원",
    "discounted_price": "2,000원",
    "discount_rate": "20%",
    "image_name": "product161.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달"]
  },
  {
    "id": "핑크퐁 호기 인형",
    "original_price": "32,000원",
    "discounted_price": "19,900원",
    "discount_rate": "37%",
    "image_name": "product162.jpg",
    "product": "인형",
    "registration_date": "2024-07-11",
    "development": ["EQ발달"]
  },
  {
    "id": "아기상어 한글카드버스+첫 놀이북 4종세트",
    "original_price": "58,000원",
    "discounted_price": "29,900원",
    "discount_rate": "48%",
    "image_name": "product163.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "인지발달", "신체발달"]
  },
  {
    "id": "[무료배송] 가방스티커 놀이세트 (병원,카페,마트)",
    "original_price": "20,400원",
    "discounted_price": "9,900원",
    "discount_rate": "51%",
    "image_name": "product164.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["사회관계", "창작활동"]
  },
  {
    "id": "[1+1] 한글카드+알파벳카드",
    "original_price": "36,000원",
    "discounted_price": "20,900원",
    "discount_rate": "41%",
    "image_name": "product165.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "인지발달"]
  },
  {
    "id": "아기상어 첫 색칠놀이 3종세트 (탈것,공룡,과일채소)",
    "original_price": "21,000원",
    "discounted_price": "9,900원",
    "discount_rate": "52%",
    "image_name": "product166.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달", "자연탐구"]
  },
  {
    "id": "핑크퐁 사운드워크북 영단어 6권세트",
    "original_price": "37,000원",
    "discounted_price": "15,900원",
    "discount_rate": "57%",
    "image_name": "product167.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "인지발달"]
  },
  {
    "id": "베베핀 생활 습관 사운드북",
    "original_price": "14,000원",
    "discounted_price": "9,900원",
    "discount_rate": "29%",
    "image_name": "product168.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["EQ발달", "사회관계"]
  },
  {
    "id": "[답례품추천] 타투스티커 8개 세트",
    "original_price": "20,000원",
    "discounted_price": "9,900원",
    "discount_rate": "50%",
    "image_name": "product169.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달"]
  },
  {
    "id": "핑크퐁 아기상어 눈집게",
    "original_price": "4,900원",
    "discounted_price": "4,400원",
    "discount_rate": null,
    "image_name": "product170.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["신체발달"]
  },
  {
    "id": "아기상어 아이에듀 쓰기패드",
    "original_price": "79,900원",
    "discounted_price": "63,900원",
    "discount_rate": "20%",
    "image_name": "product171.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "인지발달", "신체발달"]
  },
  {
    "id": "핑크퐁 멜로디 수면등",
    "original_price": "32,000원",
    "discounted_price": "19,900원",
    "discount_rate": "37%",
    "image_name": "product172.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["EQ발달"]
  },
  {
    "id": "아기상어 첫 놀이북 - 선 긋기",
    "original_price": "7,000원",
    "discounted_price": "4,900원",
    "discount_rate": "30%",
    "image_name": "product173.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["신체발달", "인지발달"]
  },
  {
    "id": "아기상어 첫 놀이북 - 길 찾기",
    "original_price": "7,000원",
    "discounted_price": "4,900원",
    "discount_rate": "30%",
    "image_name": "product174.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["인지발달"]
  },
  {
    "id": "아기상어 첫 놀이북 - 오리기",
    "original_price": "7,000원",
    "discounted_price": "4,900원",
    "discount_rate": "30%",
    "image_name": "product175.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["신체발달", "창작활동"]
  },
  {
    "id": "아기상어 첫 놀이북 - 풀칠놀이",
    "original_price": "7,000원",
    "discounted_price": "4,900원",
    "discount_rate": "30%",
    "image_name": "product176.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["신체발달", "창작활동"]
  },
  {
    "id": "아기상어 첫 놀이북 - 접기",
    "original_price": "7,000원",
    "discounted_price": "4,900원",
    "discount_rate": "30%",
    "image_name": "product177.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["신체발달", "창작활동"]
  },
  {
    "id": "아기상어 첫 놀이북 - 붙이기",
    "original_price": "12,000원",
    "discounted_price": "7,900원",
    "discount_rate": "34%",
    "image_name": "product178.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["신체발달", "창작활동"]
  },
  {
    "id": "핑크퐁 아기상어 사운드 미러볼",
    "original_price": "30,000원",
    "discounted_price": "17,900원",
    "discount_rate": "40%",
    "image_name": "product179.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["창작활동"]
  },
  {
    "id": "핑크퐁 아기퍼즐 시리즈 (5종 선택)",
    "original_price": "13,000원",
    "discounted_price": "8,400원",
    "discount_rate": "35%",
    "image_name": "product180.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["인지발달", "신체발달", "자연탐구", "언어학습"]
  },
  {
    "id": "베베핀 가방스티커 - 생생 동물",
    "original_price": "6,800원",
    "discounted_price": "3,900원",
    "discount_rate": "42%",
    "image_name": "product181.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["자연탐구", "창작활동"]
  },
  {
    "id": "베베핀 가방스티커 - 생생 탈것",
    "original_price": "6,800원",
    "discounted_price": "3,900원",
    "discount_rate": "42%",
    "image_name": "product182.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["자연탐구", "창작활동"]
  },
  {
    "id": "베베핀 가방스티커 - 생생 과일 채소",
    "original_price": "6,800원",
    "discounted_price": "3,900원",
    "discount_rate": "42%",
    "image_name": "product183.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["자연탐구", "창작활동"]
  },
  {
    "id": "베베핀 가방스티커 - 생생 바다 동물",
    "original_price": "6,800원",
    "discounted_price": "3,900원",
    "discount_rate": "42%",
    "image_name": "product184.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["자연탐구", "창작활동"]
  },
  {
    "id": "베베핀 가방스티커 - 생생 내 물건",
    "original_price": "6,800원",
    "discounted_price": "3,900원",
    "discount_rate": "42%",
    "image_name": "product185.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["인지발달", "창작활동"]
  },
  {
    "id": "핑크퐁 베베핀 생생 동물 퍼즐",
    "original_price": "8,000원",
    "discounted_price": "4,900원",
    "discount_rate": "38%",
    "image_name": "product186.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["자연탐구", "인지발달", "신체발달"]
  },
  {
    "id": "핑크퐁 듀얼동요 사운드패드",
    "original_price": "30,000원",
    "discounted_price": "18,000원",
    "discount_rate": "40%",
    "image_name": "product187.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습"]
  },
  {
    "id": "[무료배송] 가방스티커 3종세트 (생생동물,아기상어,마트놀이)",
    "original_price": "20,400원",
    "discounted_price": "9,900원",
    "discount_rate": "51%",
    "image_name": "product188.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["자연탐구", "사회관계", "창작활동"]
  },
  {
    "id": "아기상어 첫 사운드패드+핑크퐁 첫 스티커북 3종(동물,탈것,음식)",
    "original_price": "51,000원",
    "discounted_price": "24,900원",
    "discount_rate": "51%",
    "image_name": "product189.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "인지발달", "창작활동", "신체발달", "자연탐구"]
  },
  {
    "id": "[무료배송] 핑크퐁 첫 스티커북 3종세트 (동물,탈것,음식)",
    "original_price": "21,000원",
    "discounted_price": "9,900원",
    "discount_rate": "52%",
    "image_name": "product190.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달", "자연탐구"]
  },
  {
    "id": "[물만 준비하세요]컬러링 종이물감+두들북 세트",
    "original_price": "17,900원",
    "discounted_price": "9,900원",
    "discount_rate": "44%",
    "image_name": "product191.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달"]
  },
  {
    "id": "[나들이세트]아기상어 안전벨트인형+두들북+가방스티커",
    "original_price": "36,800원",
    "discounted_price": "19,990원",
    "discount_rate": "45%",
    "image_name": "product192.jpg",
    "product": "인형",
    "registration_date": "2024-07-11",
    "development": ["EQ발달", "창작활동", "신체발달", "사회관계"]
  },
  {
    "id": "아기상어 스티커 색칠북 시리즈",
    "original_price": "8,200원",
    "discounted_price": "4,900원",
    "discount_rate": "40%",
    "image_name": "product193.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달"]
  },
  {
    "id": "[무료배송] 아기상어 첫 색칠놀이 4종 세트 (과일채소,동물,탈것,공룡)",
    "original_price": "28,000원",
    "discounted_price": "12,900원",
    "discount_rate": "53%",
    "image_name": "product194.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달", "자연탐구"]
  },
  {
    "id": "아기상어 첫 색칠놀이 - 동물",
    "original_price": "7,000원",
    "discounted_price": "4,900원",
    "discount_rate": "30%",
    "image_name": "product195.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달", "자연탐구"]
  },
  {
    "id": "아기상어 첫 색칠놀이 - 과일 채소",
    "original_price": "7,000원",
    "discounted_price": "4,900원",
    "discount_rate": "30%",
    "image_name": "product196.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달", "자연탐구"]
  },
  {
    "id": "아기상어 첫 색칠놀이 - 탈것",
    "original_price": "7,000원",
    "discounted_price": "4,900원",
    "discount_rate": "30%",
    "image_name": "product197.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달", "자연탐구"]
  },
  {
    "id": "아기상어 첫 색칠놀이 - 공룡",
    "original_price": "7,000원",
    "discounted_price": "4,900원",
    "discount_rate": "30%",
    "image_name": "product198.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달", "자연탐구"]
  },
  {
    "id": "핑크퐁 돌돌이 청소롤러",
    "original_price": "16,900원",
    "discounted_price": "12,900원",
    "discount_rate": "23%",
    "image_name": "product199.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["사회관계", "신체발달"]
  },
  {
    "id": "아기상어 돌돌이 청소롤러",
    "original_price": "16,900원",
    "discounted_price": "12,900원",
    "discount_rate": "23%",
    "image_name": "product200.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["사회관계", "신체발달"]
  },
  {
    "id": "핑크퐁 아기상어 컬러링돌 세트",
    "original_price": "36,900원",
    "discounted_price": "29,900원",
    "discount_rate": "18%",
    "image_name": "product201.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달"]
  },
  {
    "id": "[무료배송] 스마트 드로잉패드",
    "original_price": "40,000원",
    "discounted_price": "23,900원",
    "discount_rate": "40%",
    "image_name": "product202.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달"]
  },
  {
    "id": "베베핀 인기동요 사운드북",
    "original_price": "14,000원",
    "discounted_price": "9,900원",
    "discount_rate": "29%",
    "image_name": "product203.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습"]
  },
  {
    "id": "상어가족 사운드북",
    "original_price": "14,000원",
    "discounted_price": "9,900원",
    "discount_rate": "29%",
    "image_name": "product204.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습"]
  },
  {
    "id": "핑크퐁 베베핀 베이비 퍼즐 - 우리 집",
    "original_price": "13,000원",
    "discounted_price": "8,400원",
    "discount_rate": "35%",
    "image_name": "product205.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["인지발달", "신체발달", "사회관계"]
  },
  {
    "id": "아기퍼즐 1+1 (동물, 탈것)",
    "original_price": "26,000원",
    "discounted_price": "15,900원",
    "discount_rate": "38%",
    "image_name": "product206.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["인지발달", "신체발달", "자연탐구"]
  },
  {
    "id": "아기퍼즐 1+1 (한글, 숫자)",
    "original_price": "27,000원",
    "discounted_price": "15,900원",
    "discount_rate": "41%",
    "image_name": "product207.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["인지발달", "신체발달", "언어학습", "수리학습"]
  },
  {
    "id": "핑크퐁 아기퍼즐 - 동물",
    "original_price": "13,000원",
    "discounted_price": "8,400원",
    "discount_rate": "35%",
    "image_name": "product208.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["인지발달", "신체발달", "자연탐구"]
  },
  {
    "id": "핑크퐁 아기퍼즐 - 탈것",
    "original_price": "13,000원",
    "discounted_price": "8,400원",
    "discount_rate": "35%",
    "image_name": "product209.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["인지발달", "신체발달", "자연탐구"]
  },
  {
    "id": "핑크퐁 아기퍼즐 - 한글",
    "original_price": "14,000원",
    "discounted_price": "9,400원",
    "discount_rate": "32%",
    "image_name": "product210.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["인지발달", "신체발달", "언어학습"]
  },
  {
    "id": "핑크퐁 아기퍼즐 - 숫자",
    "original_price": "13,000원",
    "discounted_price": "8,400원",
    "discount_rate": "35%",
    "image_name": "product211.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["인지발달", "신체발달", "수리학습"]
  },
  {
    "id": "핑크퐁 아기퍼즐 - 공룡",
    "original_price": "13,000원",
    "discounted_price": "8,400원",
    "discount_rate": "35%",
    "image_name": "product212.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["인지발달", "신체발달", "자연탐구"]
  },
  {
    "id": "동물동요 사운드북",
    "original_price": "14,000원",
    "discounted_price": "9,900원",
    "discount_rate": "29%",
    "image_name": "product213.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "자연탐구"]
  },
  {
    "id": "자동차동요 사운드북",
    "original_price": "14,000원",
    "discounted_price": "9,900원",
    "discount_rate": "29%",
    "image_name": "product214.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "자연탐구"]
  },
  {
    "id": "사운드북 베스트 3종세트 (인기율동,자동차,상어가족)",
    "original_price": "42,000원",
    "discounted_price": "26,900원",
    "discount_rate": "35%",
    "image_name": "product215.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "신체발달", "자연탐구"]
  },
  {
    "id": "핑크퐁 아기상어 컬러링 종이물감",
    "original_price": "9,900원",
    "discounted_price": "4,900원",
    "discount_rate": "50%",
    "image_name": "product216.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달"]
  },
  {
    "id": "핑크퐁 아기상어 베베핀 별빛봉",
    "original_price": "28,000원",
    "discounted_price": "15,000원",
    "discount_rate": "46%",
    "image_name": "product217.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["창작활동"]
  },
  {
    "id": "핑크퐁 마더구스 패드",
    "original_price": "25,000원",
    "discounted_price": "14,900원",
    "discount_rate": "40%",
    "image_name": "product218.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습"]
  },
  {
    "id": "인기율동동요 사운드북",
    "original_price": "14,000원",
    "discounted_price": "9,900원",
    "discount_rate": "29%",
    "image_name": "product219.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "신체발달"]
  },
  {
    "id": "가방스티커 - 카페놀이",
    "original_price": "6,800원",
    "discounted_price": "3,900원",
    "discount_rate": "42%",
    "image_name": "product220.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["사회관계", "창작활동"]
  },
  {
    "id": "가방스티커 - 병원놀이",
    "original_price": "6,800원",
    "discounted_price": "3,900원",
    "discount_rate": "42%",
    "image_name": "product221.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["사회관계", "창작활동"]
  },
  {
    "id": "베베핀 가방스티커 - 우리가족",
    "original_price": "6,800원",
    "discounted_price": "3,900원",
    "discount_rate": "42%",
    "image_name": "product222.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["사회관계", "창작활동"]
  },
  {
    "id": "마이 리틀 퍼펫+놀이북 세트",
    "original_price": "20,000원",
    "discounted_price": "9,900원",
    "discount_rate": "50%",
    "image_name": "product223.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "언어학습"]
  },
  {
    "id": "생활습관동요 사운드북 2종 세트",
    "original_price": "28,000원",
    "discounted_price": "18,900원",
    "discount_rate": "32%",
    "image_name": "product224.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["EQ발달", "사회관계", "언어학습"]
  },
  {
    "id": "아기상어 포켓배낭",
    "original_price": "38,000원",
    "discounted_price": "26,900원",
    "discount_rate": "29%",
    "image_name": "product225.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["사회관계"]
  },
  {
    "id": "생활습관동요 사운드북 STEP 1",
    "original_price": "14,000원",
    "discounted_price": "9,900원",
    "discount_rate": "29%",
    "image_name": "product226.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["EQ발달", "사회관계", "언어학습"]
  },
  {
    "id": "생활습관동요 사운드북 STEP 2",
    "original_price": "14,000원",
    "discounted_price": "9,900원",
    "discount_rate": "29%",
    "image_name": "product227.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["EQ발달", "사회관계", "언어학습"]
  },
  {
    "id": "핑크퐁 아기상어 모래놀이 가방세트",
    "original_price": "25,000원",
    "discounted_price": "17,500원",
    "discount_rate": "30%",
    "image_name": "product228.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달"]
  },
  {
    "id": "핑크퐁 인형 30cm",
    "original_price": "32,000원",
    "discounted_price": "16,900원",
    "discount_rate": "47%",
    "image_name": "product229.jpg",
    "product": "인형",
    "registration_date": "2024-07-11",
    "development": ["EQ발달"]
  },
  {
    "id": "핑크퐁 두들북",
    "original_price": "8,000원",
    "discounted_price": "5,400원",
    "discount_rate": "32%",
    "image_name": "product230.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달"]
  },
  {
    "id": "아기상어 두들북",
    "original_price": "8,000원",
    "discounted_price": "5,400원",
    "discount_rate": "32%",
    "image_name": "product231.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달"]
  },
  {
    "id": "베베핀 두들북",
    "original_price": "8,000원",
    "discounted_price": "5,400원",
    "discount_rate": "32%",
    "image_name": "product232.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달"]
  },
  {
    "id": "공룡 두들북",
    "original_price": "8,000원",
    "discounted_price": "5,400원",
    "discount_rate": "32%",
    "image_name": "product233.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달", "자연탐구"]
  },
  {
    "id": "핑크퐁 마이크 - 인기동요",
    "original_price": "48,000원",
    "discounted_price": "28,000원",
    "discount_rate": "41%",
    "image_name": "product234.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "창작활동"]
  },
  {
    "id": "아기상어 멜로디 패드",
    "original_price": "34,000원",
    "discounted_price": "25,900원",
    "discount_rate": "23%",
    "image_name": "product235.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "인지발달"]
  },
  {
    "id": "[단품선택] 핑크퐁 첫 스티커북 5종",
    "original_price": "7,000원",
    "discounted_price": "4,900원",
    "discount_rate": "30%",
    "image_name": "product236.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달", "자연탐구"]
  },
  {
    "id": "핑크퐁 가방퍼즐",
    "original_price": "13,000원",
    "discounted_price": "8,400원",
    "discount_rate": "35%",
    "image_name": "product237.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["인지발달", "신체발달"]
  },
  {
    "id": "아기상어 가방퍼즐",
    "original_price": "13,000원",
    "discounted_price": "8,400원",
    "discount_rate": "35%",
    "image_name": "product238.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["인지발달", "신체발달"]
  },
  {
    "id": "핑크퐁 자동차 가방퍼즐",
    "original_price": "13,000원",
    "discounted_price": "8,400원",
    "discount_rate": "35%",
    "image_name": "product239.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["인지발달", "신체발달", "자연탐구"]
  },
  {
    "id": "핑크퐁 팝업 스마트폰",
    "original_price": "20,000원",
    "discounted_price": "15,900원",
    "discount_rate": "20%",
    "image_name": "product240.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "인지발달"]
  },
  {
    "id": "상어가족 한영 듀얼 사운드북",
    "original_price": "14,000원",
    "discounted_price": "9,900원",
    "discount_rate": "29%",
    "image_name": "product241.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습"]
  },
  {
    "id": "상어가족 리믹스 사운드북",
    "original_price": "14,000원",
    "discounted_price": "9,900원",
    "discount_rate": "29%",
    "image_name": "product242.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "신체발달"]
  },
  {
    "id": "핑크퐁 컬러링 3D 퍼즐 시리즈",
    "original_price": "17,000원",
    "discounted_price": "5,900원",
    "discount_rate": "65%",
    "image_name": "product243.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달", "인지발달"]
  },
  {
    "id": "크리스마스 스티커북",
    "original_price": "2,500원",
    "discounted_price": "1,800원",
    "discount_rate": "28%",
    "image_name": "product244.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "EQ발달"]
  },
  {
    "id": "[무료배송] 동요자석퍼즐 - 동물",
    "original_price": "24,000원",
    "discounted_price": "15,900원",
    "discount_rate": "33%",
    "image_name": "product245.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["인지발달", "신체발달", "언어학습", "자연탐구"]
  },
  {
    "id": "동요하우스",
    "original_price": "19,000원",
    "discounted_price": "9,900원",
    "discount_rate": "47%",
    "image_name": "product246.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "창작활동"]
  },
  {
    "id": "핑크퐁 우드블록가방 시리즈",
    "original_price": "26,000원",
    "discounted_price": "15,000원",
    "discount_rate": "42%",
    "image_name": "product247.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달", "인지발달"]
  },
  {
    "id": "핑크퐁 아기상어 미니 낚시놀이",
    "original_price": "10,000원",
    "discounted_price": "7,900원",
    "discount_rate": "21%",
    "image_name": "product248.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["신체발달", "인지발달"]
  },
  {
    "id": "[무료배송] 핑크퐁 한글카드 120",
    "original_price": "18,000원",
    "discounted_price": "13,500원",
    "discount_rate": "25%",
    "image_name": "product249.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "인지발달"]
  },
  {
    "id": "아기상어 알파벳카드 120",
    "original_price": "18,000원",
    "discounted_price": "13,500원",
    "discount_rate": "25%",
    "image_name": "product250.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "인지발달"]
  },
  {
    "id": "가방스티커 - 아기상어",
    "original_price": "6,800원",
    "discounted_price": "3,900원",
    "discount_rate": "42%",
    "image_name": "product251.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "사회관계"]
  },
  {
    "id": "가방스티커 - 자동차",
    "original_price": "6,800원",
    "discounted_price": "3,900원",
    "discount_rate": "42%",
    "image_name": "product252.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "자연탐구"]
  },
  {
    "id": "가방스티커 - 동물",
    "original_price": "6,800원",
    "discounted_price": "3,900원",
    "discount_rate": "42%",
    "image_name": "product253.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "자연탐구"]
  },
  {
    "id": "가방스티커 - 바다동물",
    "original_price": "6,800원",
    "discounted_price": "3,900원",
    "discount_rate": "42%",
    "image_name": "product254.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "자연탐구"]
  },
  {
    "id": "가방스티커 - 공룡",
    "original_price": "6,800원",
    "discounted_price": "3,900원",
    "discount_rate": "42%",
    "image_name": "product255.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "자연탐구"]
  },
  {
    "id": "가방스티커 - 마트놀이",
    "original_price": "6,800원",
    "discounted_price": "3,900원",
    "discount_rate": "42%",
    "image_name": "product256.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "사회관계"]
  },
  {
    "id": "가방스티커 - 한글",
    "original_price": "6,800원",
    "discounted_price": "3,900원",
    "discount_rate": "42%",
    "image_name": "product257.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "언어학습"]
  },
  {
    "id": "핑크퐁 벽그림 3종 세트",
    "original_price": "12,000원",
    "discounted_price": "5,000원",
    "discount_rate": "58%",
    "image_name": "product258.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "인지발달"]
  },
  {
    "id": "슈퍼 구조대 입체만들기",
    "original_price": "5,500원",
    "discounted_price": "4,400원",
    "discount_rate": "20%",
    "image_name": "product259.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "신체발달"]
  },
  {
    "id": "호기 키링",
    "original_price": "12,000원",
    "discounted_price": "5,900원",
    "discount_rate": "50%",
    "image_name": "product260.jpg",
    "product": "인형",
    "registration_date": "2024-07-11",
    "development": ["EQ발달", "사회관계"]
  },
  {
    "id": "윌리엄 가방고리 인형",
    "original_price": "11,000원",
    "discounted_price": "5,900원",
    "discount_rate": "46%",
    "image_name": "product261.jpg",
    "product": "인형",
    "registration_date": "2024-07-11",
    "development": ["EQ발달", "사회관계"]
  },
  {
    "id": "슈퍼구조대 소방차 RC카",
    "original_price": "24,000원",
    "discounted_price": "15,900원",
    "discount_rate": "33%",
    "image_name": "product262.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["신체발달"]
  },
  {
    "id": "용감한 경찰차 RC카",
    "original_price": "24,000원",
    "discounted_price": "15,900원",
    "discount_rate": "33%",
    "image_name": "product263.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["신체발달"]
  },
  {
    "id": "[무료배송] 핑크퐁 대형 물놀이 풀장 150",
    "original_price": "80,000원",
    "discounted_price": "44,000원",
    "discount_rate": "45%",
    "image_name": "product264.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["신체발달", "사회관계"]
  },
  {
    "id": "아기상어 쿠션보행기 튜브",
    "original_price": "36,000원",
    "discounted_price": "31,900원",
    "discount_rate": "11%",
    "image_name": "product265.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["신체발달"]
  },
  {
    "id": "핑크퐁 크리스마스 쉐이킹 스티커",
    "original_price": "5,000원",
    "discounted_price": "2,800원",
    "discount_rate": "44%",
    "image_name": "product266.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "EQ발달"]
  },
  {
    "id": "베베핀 크리스마스 쉐이킹 스티커",
    "original_price": "5,000원",
    "discounted_price": "2,800원",
    "discount_rate": "44%",
    "image_name": "product267.jpg",
    "product": "토이북",
    "registration_date": "2024-07-11",
    "development": ["창작활동", "EQ발달"]
  },
  {
    "id": "베베핀 사운드북+베이비퍼즐+우리가족 가방스티커",
    "original_price": "33,800원",
    "discounted_price": "22,900원",
    "discount_rate": "32%",
    "image_name": "product268.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "사회관계", "EQ발달"]
  },
  {
    "id": "베베핀 병원놀이 패드+베베핀 스마트폰",
    "original_price": "50,000원",
    "discounted_price": "29,900원",
    "discount_rate": "40%",
    "image_name": "product269.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["사회관계", "인지발달", "언어학습"]
  },
  {
    "id": "베베핀 사운드 터치북+베베핀 스마트폰",
    "original_price": "57,000원",
    "discounted_price": "29,900원",
    "discount_rate": "47%",
    "image_name": "product270.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "인지발달", "EQ발달"]
  },
  {
    "id": "베베핀 플레이 사운드북 응가하자+동요 스마트폰",
    "original_price": "48,000원",
    "discounted_price": "28,800원",
    "discount_rate": "40%",
    "image_name": "product271.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "인지발달", "EQ발달"]
  },
  {
    "id": "아기상어 한글카드버스+아기상어 스마트폰",
    "original_price": "50,000원",
    "discounted_price": "29,900원",
    "discount_rate": "40%",
    "image_name": "product272.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "인지발달", "신체발달"]
  },
  {
    "id": "아기상어 멜로디패드+첫 스마트폰",
    "original_price": "54,000원",
    "discounted_price": "29,900원",
    "discount_rate": "44%",
    "image_name": "product273.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "인지발달", "창작활동"]
  },
  {
    "id": "아기상어 피아노 사운드북+아기상어 스마트폰",
    "original_price": "50,000원",
    "discounted_price": "24,900원",
    "discount_rate": "50%",
    "image_name": "product274.jpg",
    "product": "사운드북",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "인지발달", "창작활동"]
  },
  {
    "id": "[무료배송] 아기상어 첫 스마트폰",
    "original_price": "20,000원",
    "discounted_price": "12,900원",
    "discount_rate": "35%",
    "image_name": "product275.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["언어학습", "인지발달"]
  },
  {
    "id": "[무료배송] 신나는 워터파크 낚시놀이+모래놀이",
    "original_price": "49,900원",
    "discounted_price": "33,900원",
    "discount_rate": "32%",
    "image_name": "product280.jpg",
    "product": "기타",
    "registration_date": "2024-07-11",
    "development": ["신체발달", "자연탐구"]
  }
]



export default products
