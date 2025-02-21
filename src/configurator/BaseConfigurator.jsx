import React, { useState } from "react";
import "../styles/config.scss";

const BaseConfigurator = ({ basePrice, colors, options, modelName }) => {
  const [currentColor, setCurrentColor] = useState(colors[0].name);
  const [currentAngle, setCurrentAngle] = useState(0);
  const [totalPrice, setTotalPrice] = useState(basePrice);
  const [selectedOptions, setSelectedOptions] = useState([]);

  // 색상 선택 핸들링
  const handleColorChange = (color) => {
    setCurrentColor(color);
  };

  // 360도 이미지 표현
  const changeAngle = (direction) => {
    setCurrentAngle((prev) => (direction === "next" ? (prev + 1) % 8 : (prev - 1 + 8) % 8));
  };

  // 옵션 선택 시 가격 업데이트
  const toggleOption = (option) => {
    if (selectedOptions.includes(option.id)) {
      setSelectedOptions(selectedOptions.filter((opt) => opt !== option.id));
      setTotalPrice(totalPrice - option.price);
    } else {
      setSelectedOptions([...selectedOptions, option.id]);
      setTotalPrice(totalPrice + option.price);
    }
  };

  return (
    <div className="configurator-wrapper">
      <div className="configurator">
        {/* 차량 이미지 변경 , 버튼 */}
        <div className="car-image-container">
          <button className="arrow right" onClick={() => changeAngle("prev")}>〉</button>
          <img src={`${import.meta.env.BASE_URL}img/${modelName.toLowerCase()}/${currentColor}/${currentAngle}.png`} alt="Car" />
          <button className="arrow left" onClick={() => changeAngle("next")}>〈</button>
        </div>

        {/* 색상 선택 */}
        <div className="color-selection">
          <h3></h3>
          <div className="color-options">
            {colors.map((color) => (
              <div
                key={color.name}
                className={`color-box ${currentColor === color.name ? "selected" : ""}`}
                onClick={() => handleColorChange(color.name)}
              >
                <img src={`${import.meta.env.BASE_URL}img/${color.name}.png`} alt={color.label} />
                <p>{color.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 옵션 선택 */}
        <div className="option-selection">
          {options.map((option) => (
            <div key={option.id} className="option-box">
              <label htmlFor={option.id}>
                <img src={`${import.meta.env.BASE_URL}img/${option.id}.png`} alt={option.name} />
                <p>{option.name}</p>
                <input type="checkbox" id={option.id} checked={selectedOptions.includes(option.id)} onChange={() => toggleOption(option)} />
                <span> ₩{option.price.toLocaleString()}</span>
              </label>
            </div>
          ))}
        </div>

        {/* 가격 표시 */}
        <div className="price-box">
          <h3>예상 가격</h3>
          <p className="price">₩ {totalPrice.toLocaleString()}</p>
        </div>

        {/* 주문 버튼 -> 문의로 수정 */}
        <button className="order-btn" onClick={() => alert("로그인이 필요한 서비스입니다.")}>
          문의하기
        </button>
      </div>
    </div>
  );
};

export default BaseConfigurator;