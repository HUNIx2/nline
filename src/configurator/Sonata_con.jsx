import React from "react";
import BaseConfigurator from "./BaseConfigurator";

const Sonata_con = () => {
  const basePrice = 28310000;
  const colors = [
    { name: "ultimate_red", label: "얼티밋 레드" },
    { name: "abyss_black", label: "어비스 블랙" },
    { name: "phto_gray", label: "포르토피노 그레이" },
    { name: "serenity_white", label: "세레니티 화이트" },
    { name: "carbon_blue", label: "카본 블루" }
  ];
  const options = [
    { id: "brake", name: "N 퍼포먼스 브레이크 시스템", price: 1830000 },
    { id: "towstrap", name: "Sabelt 토우 스트랩", price: 120000 },
  ];

  return <BaseConfigurator basePrice={basePrice} colors={colors} options={options} modelName="Sonata" />;
};

export default Sonata_con;