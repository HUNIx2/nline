import React from "react";
import BaseConfigurator from "./BaseConfigurator";

const Io5_con = () => {
  const basePrice = 70000000;
  const colors = [
    { name: "performance_blue", label: "퍼포먼스 블루" },
    { name: "ecotronic_gray", label: "에코트로닉 그레이" },
    { name: "abyss_black", label: "어비스 블랙펄" },
    { name: "ultimate_red", label: "얼티메이트 레드" },
    { name: "atlas_white", label: "아틀라스 화이트" }
  ];
  const options = [
    { id: "towstrap", name: "Sabelt 토우 스트랩", price: 120000 },
    { id: "wheel", name: "21인치 카본 휠", price: 800000 },
  ];

  return <BaseConfigurator basePrice={basePrice} colors={colors} options={options} modelName="Ioniq5" />;
};

export default Io5_con;