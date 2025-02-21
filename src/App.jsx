import { Routes, Route } from "react-router-dom";
import Nav from "./com/Nav";
import Footer from "./com/Footer";
import Home from "./Home";
import Intro from "./Intro";
import Configurator from "./Configurator";
import Login from "./Login";
import ScrollToTop from "./com/ScrollToTop";
import './styles/main.scss';


function App() {
  return (
    <div className="App-container">
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/intro" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/configurator/*" element={<Configurator />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;