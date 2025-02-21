import React from "react";
import BaseConfigurator from "./BaseConfigurator";

const Tucson_con = () => {
  const basePrice = 27710000;
  const colors = [
    { name: "ultimate_red", label: "얼티밋 레드" },
    { name: "titan_gray", label: "타이탄 그레이" },
    { name: "ash_black", label: "애쉬 블랙" },
    { name: "creamy_white", label: "크리미 화이트" },
    { name: "ti_gray", label: "티타늄 그레이" }
  ];
  const options = [
    { id: "towstrap", name: "Sabelt 토우 스트랩", price: 120000 },
    { id: "wheel", name: "21인치 카본 휠", price: 800000 },
  ];

  return <BaseConfigurator basePrice={basePrice} colors={colors} options={options} modelName="Tucson" />;
};

export default Tucson_con;