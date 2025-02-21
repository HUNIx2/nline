import { Routes, Route, Link, useLocation } from "react-router-dom";
import Avante_con from "./configurator/Avante_con";
import Io5_con from "./configurator/Io5_con";
import Sonata_con from "./configurator/Sonata_con";
import Tucson_con from "./configurator/Tucson_con";
import { useState, useEffect } from "react";
import "./styles/main.scss";

function Configurator() {
  const location = useLocation();
  const isConfiguratorPage = location.pathname === "/configurator";

  // 가격 관련 상태
  const basePrice = 36000000;
  const [totalPrice, setTotalPrice] = useState(basePrice);
  const [animate, setAnimate] = useState(false);

  // 옵션 선택 시 가격 업데이트
  const updatePrice = (priceChange) => {
    setTotalPrice((prev) => prev + priceChange);
    setAnimate(true); // 애니메이션 활성화
  };

  // 애니메이션 효과 제거 (일정 시간 후 원래 크기로)
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 500);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  return (
    <div>
      {isConfiguratorPage && (
       <div
       className="configurator-container"
       style={{
         backgroundImage: `url(${import.meta.env.BASE_URL}img/conbg.jpg)`,
         backgroundSize: "cover",
         backgroundPosition: "center",
         backgroundRepeat: "no-repeat",
         width: "100%",
         height: "100%",
         display: "flex",
         flexDirection: "column",
         alignItems: "center",
         justifyContent: "center",
         overflow: "hidden",
       }}
     >
          <h2 >Configurator N</h2>
          <div className="car-selection">
            <div className="car-box">
              <Link to="/configurator/avante">
                <img 
                  src={`${import.meta.env.BASE_URL}img/AVANTE.png`} 
                  alt="Avante N" 
                />
                <p>Avante N</p>
              </Link>
            </div>
            <div className="car-box">
              <Link to="/configurator/io5">
                <img 
                  src={`${import.meta.env.BASE_URL}img/IONIQ5.png`} 
                  alt="Ioniq 5 N" 
                />
                <p>Ioniq 5 N</p>
              </Link>
            </div>
            <div className="car-box">
              <Link to="/configurator/sonata">
                <img 
                  src={`${import.meta.env.BASE_URL}img/SONATA.png`} 
                  alt="Sonata N" 
                />
                <p>Sonata N</p>
              </Link>
            </div>
            <div className="car-box">
              <Link to="/configurator/tucson">
                <img 
                  src={`${import.meta.env.BASE_URL}img/TUCSON.png`} 
                  alt="Tucson N" 
                />
                <p>Tucson N</p>
              </Link>
            </div>
          </div>
        </div>
      )}

      <Routes>
        <Route index element={<h3></h3>} />
        <Route path="avante" element={<Avante_con updatePrice={updatePrice} />} />
        <Route path="io5" element={<Io5_con updatePrice={updatePrice} />} />
        <Route path="sonata" element={<Sonata_con updatePrice={updatePrice} />} />
        <Route path="tucson" element={<Tucson_con updatePrice={updatePrice} />} />
      </Routes>
    </div>
  );
}

export default Configurator;