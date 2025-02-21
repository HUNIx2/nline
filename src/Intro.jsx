import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles/intro.scss';

function Intro() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carList = ["AVANTE", "IONIQ5", "SONATA", "TUCSON"];
  const prices = ["₩36,000,000", "₩70,000,000", "₩28,310,000", "₩27,710,000"]; // 차량 가격
  const specs = [
    ["최고출력 : 280 PS", "복합연비 : 10.6 km/ℓ", "배기량 : 1,998cc"],
    ["최고출력 : 650 PS", "최대토크 : 770 Nm", "연비 : 3.7km/kWh"],
    ["최고출력 : 290 PS", "복합연비 : 13.5 km/ℓ", "배기량 : 2,497cc"],
    ["최고출력 : 290 PS", "복합연비 : 13.5 km/ℓ", "배기량 : 2,497cc"]
  ];

  // 차량 이동 로직
  const toLeftMove = () => {
    setCurrentIndex((prev) => (prev === carList.length - 1 ? 0 : prev + 1));
  };

  const toRightMove = () => {
    setCurrentIndex((prev) => (prev === 0 ? carList.length - 1 : prev - 1));
  };

  // ✅ 차량 이름 클릭 시 이동
  const handleCarClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="intro-container">
      {/* 차량 이름 리스트 */}
      <div id="carheader">
        <div id="carName">
          {carList.map((car, index) => (
            <h2 
              key={index} 
              className={index === currentIndex ? "select" : ""} 
              onClick={() => handleCarClick(index)} 
              style={{ cursor: "pointer" }} 
            >
              {car}
            </h2>
          ))}
        </div>
      </div>

      {/* 슬라이드 영역 */}
      <div id="slideArea">
        <div id="slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {carList.map((car, index) => (
            <div key={index} className="car">
              <img 
                src={`${import.meta.env.BASE_URL}img/${car}.png`} 
                alt={car} 
              />
            </div>
          ))}
        </div>
      </div>

      {/* 차량 정보 */}
      <div id="footer">
        <div className="carInfo">
          <div className="start-price">Starting from <p>{prices[currentIndex]}</p></div>
          <div className="carSpec">
            {specs[currentIndex].map((spec, i) => (
              <p key={i}>{spec}</p>
            ))}
          </div>
        </div>
      </div>

      {/* 네비게이션 버튼 */}
      <div id="arrow">
        <button onClick={toRightMove}>〈</button>
        <button onClick={toLeftMove}>〉</button>
      </div>
    
      <div className="config-button-container">
        <Link to="/configurator" className="config-button">
          Configurator
        </Link>
      </div>
    </section>
  );
}

export default Intro;