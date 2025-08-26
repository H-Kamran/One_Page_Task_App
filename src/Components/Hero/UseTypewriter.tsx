import { useEffect, useState } from "react";
import "./UseTypewriter.css";
// import { useInView } from "framer-motion";

// Custom hook to trigger a key change when the element is in view
export default function useTypewriter(text: string, speed: number = 100) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");
    let interval;
    function typeNext(current: string) {
      if (current.length < text.length) {
        setTimeout(() => {
          setDisplayedText(text.slice(0, current.length + 1));
          typeNext(text.slice(0, current.length + 1));
        }, speed);
      }
    }
    typeNext("");
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [text, speed]);

  return (
    <>
      {displayedText}<span className="blinking-cursor">|</span>
    </>
  );
}
