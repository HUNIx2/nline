import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/main.scss";

function Home() {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    videoRef.current?.play();
  }, []);

  return (
    <div className="home-container">
      {/* 비디오 */}
      <section className="video-container">
        <video 
          controls 
          autoPlay 
          loop 
          muted 
          src={`${import.meta.env.BASE_URL}mp4/opening.mp4`} 
        />
      </section>
      <div className="video-background"></div>

      <div className="home-content">
        {/* 질주본능 DNA */}
        <section className="performance-section">
          <h2>두 가지 레벨의 퍼포먼스.</h2>
          <h2>질주본능 DNA는 같습니다.</h2>
          <div className="performance-container">
            {/* N 모델 */}
            <div className="performance-box">
              <img 
                src={`${import.meta.env.BASE_URL}img/n-model.png`} 
                alt="N 모델" 
              />
              <h3>준비가 된 성능과 엔지니어링, 그리고 기술력</h3>
              <h4>N</h4>
              <p>
                엄격한 테스트를 거쳐 다듬어진 N 모델은 고성능 차량 애호가를 위해 탄생했습니다.
                파워풀한 엔진과 정밀한 핸들링, 최적화된 브레이크 성능을 제공합니다.
              </p>
            </div>

            {/* N Line 모델 */}
            <div className="performance-box">
              <img 
                src={`${import.meta.env.BASE_URL}img/n-line.png`} 
                alt="N Line 모델" 
              />
              <h3>레이싱에서 영감을 얻은 디자인과 향상된 성능</h3>
              <h4>N Line</h4>
              <p>
                N Line 모델은 보다 강렬한 스타일과 성능으로 차별화됩니다.
                공기역학적 요소와 최적화된 엔진 셋업을 통해 다이내믹한 주행이 가능합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 추가 영상 섹션 */}
        <section className="additional-video-section">
          <div className="additional-video-container">
            {/* 왼쪽 영상 */}
            <div className="additional-video-box">
              <img 
                src={`${import.meta.env.BASE_URL}img/track.png`} 
                alt="트랙을 알고 트랙을 정복하라" 
              />
              <div className="additional-video-text">
                <h3>트랙을 알고 트랙을 정복하라.</h3>
                <p>세계적으로 유명한 레이스 코스에서 N 모델이 주행하는 모습을 확인하세요.</p>
                <a 
                  href="https://www.youtube.com/watch?v=Yi82VlfPIA8" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="additional-video-btn"
                >
                  영상 보기
                </a>
              </div>
            </div>

            {/* 오른쪽 영상 */}
            <div className="additional-video-box">
              <img 
                src={`${import.meta.env.BASE_URL}img/mountain.png`} 
                alt="인간 vs. 산" 
              />
              <div className="additional-video-text">
                <h3>인간 vs. 산</h3>
                <p>30년 전통의 Pikes Peak 레이스에서 N 모델의 성능을 확인하세요.</p>
                <a 
                  href="https://www.youtube.com/watch?v=JG4-vqo0UIA" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="additional-video-btn"
                >
                  영상 보기
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 페이지 이동 버튼 */}
        <section className="page-navigation">
          <button className="nav-btn" onClick={() => navigate("/intro")}>
            Introduce
          </button>
          <button className="nav-btn" onClick={() => navigate("/configurator")}>
            Configurator
          </button>
        </section>
      </div>
    </div>
  );
}

export default Home;