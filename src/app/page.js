import MainSection from "./components/MainSection/index";
import Ingredients from "./components/Ingredients/index";
import LatestNews from './components/LatestNews/index'
import Footer from './components/Footer/index'
import { global } from "styled-jsx/css";

export default function Home() {
  return (
    <div className="main">
      <img className="logo"  src='/logo.png' slt='logo' loading="lazy" />
      <div className="section-con">
        <MainSection />
        <Ingredients />
        <LatestNews />
        <Footer />
      </div>
    </div>
  );
}
