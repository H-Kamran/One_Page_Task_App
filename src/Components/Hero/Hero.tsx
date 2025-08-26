import "./Hero.css";
import desktopImage from "../../assets/desktop.png";
import mobileImage from "../../assets/phone.png";
import laptopImage from "../../assets/laptop.png";
import useTypewriter from "./UseTypewriter";
// import { motion } from "framer-motion";

export default function Hero() {
  const typewriterText = useTypewriter(
    "Task manager",
    50
  );
  return (
    <section className="hero">
      <div className="hero-content flex items-center justify-between p-40">
        <div className="hero-texts">
          <h1 className="hero-title">{typewriterText}</h1>
          {/* <span className="blinking-cursor">|</span> */}
          <p className="hero-subtitle">
            Your journey to productivity starts here.
          </p>
          <button className="hero-button duration-200 hover:scale-110">
            Get Started
          </button>
        </div>
        <div className="hero-images">
          <img
            className="desktop-image"
            src={desktopImage}
            alt="desktop image"
          />
          <img className="mobile-image" src={mobileImage} alt="mobile image" />
          <img className="laptop-image" src={laptopImage} alt="laptop image" />
        </div>
      </div>
    </section>
  );
}
