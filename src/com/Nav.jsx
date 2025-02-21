import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/main.scss";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav-bar">
      <div
        className="hamburger-container"
        onMouseEnter={() => setMenuOpen(true)}
        onMouseLeave={() => setMenuOpen(false)}
      >
        <button className="hamburger">☰</button>

        {/* 사이드 메뉴 */}
        <nav className={`side-menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li><Link to="/">❏ Home</Link></li>
            <li><Link to="/intro">❏ Introduce N</Link></li>
            <li><Link to="/configurator">❏ Configurator N</Link></li>
            <li><Link to="/configurator/avante">- Avante N configurator</Link></li>
            <li><Link to="/configurator/io5">- Ioniq5 N configurator</Link></li>
            <li><Link to="/configurator/sonata">- Sonata N configurator</Link></li>
            <li><Link to="/configurator/tucson">- Tucson N configurator</Link></li>
          </ul>
        </nav>
      </div>

      {/* 로고 */}
      <Link to="/" className="logo">
        <img src={`${import.meta.env.BASE_URL}img/logo2.svg`} alt="N Line" />
      </Link>

      {/* 프로필 아이콘 */}
      <Link to="/login" className="login-icon">
        <img src={`${import.meta.env.BASE_URL}img/login.png`} alt="login" />
      </Link>
    </header>
  );
}

export default Nav;