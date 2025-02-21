import "../styles/main.scss"; 

function Footer() {
  return (
    <footer className="footer">
      {/* ✅ 상단 링크 목록 */}
      <div className="footer-link-wrap">
        <div className="footer-grid">
          <div className="footer-link-area">
            <h3 className="footer-link-tit">현대 N 월드와이드</h3>
            <div className="footer-link">
              <a href="https://www.instagram.com/hyundai_n_worldwide/?hl=en" className="btn-icon btn-icon24 icon-instagram-wh"></a>
              <a href="https://www.youtube.com/@hyundainworldwide" className="btn-icon btn-icon24 icon-youtube-wh"></a>
            </div>
          </div>

          <div className="footer-link-area">
            <h3 className="footer-link-tit">현대 모터스포츠</h3>
            <div className="footer-link">
              <a href="https://www.instagram.com/hmsgofficial/" className="btn-icon btn-icon24 icon-instagram-wh"></a>
              <a href="https://www.youtube.com/c/HyundaiMotorsport" className="btn-icon btn-icon24 icon-youtube-wh"></a>
              <a href="https://motorsport.hyundai.com/" className="btn-icon btn-icon24 icon-link-wh"></a>
            </div>
          </div>

          <div className="footer-link-area">
            <h3 className="footer-link-tit">현대 드라이빙 익스피리언스 (대한민국)</h3>
            <div className="footer-link">
              <a href="https://www.instagram.com/hmgdrivingexperience/" className="btn-icon btn-icon24 icon-instagram-wh"></a>
              <a href="https://www.youtube.com/@HMGDrivingExperience" className="btn-icon btn-icon24 icon-youtube-wh"></a>
              <a href="https://drivingexperience.hyundai.co.kr/kr/main" className="btn-icon btn-icon24 icon-link-wh"></a>
            </div>
          </div>

          <div className="footer-link-area">
            <h3 className="footer-link-tit">현대 드라이빙 익스피리언스 (글로벌)</h3>
            <div className="footer-link">
              <a href="https://www.instagram.com/hyundai.driving.experience/" className="btn-icon btn-icon24 icon-instagram-wh"></a>
              <a href="https://www.youtube.com/channel/UCxuJhEiEcaW5iRwOG8fMAig" className="btn-icon btn-icon24 icon-youtube-wh"></a>
              <a href="https://eu.drivingexperience.hyundai.com/" className="btn-icon btn-icon24 icon-link-wh"></a>
            </div>
          </div>

          <div className="footer-link-area">
            <h3 className="footer-link-tit">현대 N 컬렉션</h3>
            <div className="footer-link">
              <a href="https://collection.hyundai.com/index.do" className="btn-icon btn-icon24 icon-link-wh"></a>
            </div>
          </div>

          <div className="footer-link-area">
            <h3 className="footer-link-tit">N 퍼포먼스 Shop (대한민국)</h3>
            <div className="footer-link">
              <a href="https://nperformanceshop.com/" className="btn-icon btn-icon24 icon-link-wh"></a>
            </div>
          </div>

          <div className="footer-link-area">
            <h3 className="footer-link-tit">현대 N 페스티벌</h3>
            <div className="footer-link">
              <a href="https://www.instagram.com/hyundai_n_festival/" className="btn-icon btn-icon24 icon-instagram-wh"></a>
              <a href="https://www.youtube.com/@HyundaiNFestival" className="btn-icon btn-icon24 icon-youtube-wh"></a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-etc-wrap">
        <ul className="footer-etc">
          <li><a href="">이용약관</a></li>
          <li><a href="">쿠키 정책</a></li>
          <li><a href="">개인정보처리방침</a></li>
          <li><a href="">Go to Your Country</a></li>
          <li><a href="">1:1 문의</a></li>
        </ul>
        <p className="footer-copy">© Hyundai Motor Company. All rights reserved.(x)</p>
        <p className="footer-copy">🫡 이 페이지는 교육용으로 제작하였습니다.(O)</p>
      </div>
    </footer>
  );
}

export default Footer;