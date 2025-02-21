import React from "react";
import BaseConfigurator from "./BaseConfigurator";

const Avante_con = () => {
  const basePrice = 36000000;
  const colors = [
    { name: "performance_blue", label: "퍼포먼스 블루" },
    { name: "abyss_black", label: "어비스 블랙펄" },
    { name: "cyber_gray", label: "사이버 그레이" },
    { name: "metal_blue", label: "메탈 블루펄" },
    { name: "ultimate_red", label: "얼티메이트 레드" },
    { name: "atlas_white", label: "아틀라스 화이트" }
  ];

  const options = [
    { id: "brake", name: "N 퍼포먼스 브레이크 시스템", price: 1830000 },
    { id: "towstrap", name: "Sabelt 토우 스트랩", price: 120000 },
  ];

  return <BaseConfigurator basePrice={basePrice} colors={colors} options={options} modelName="Avante" />;
};

export default Avante_con;