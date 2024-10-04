import React, { useState, useEffect } from "react";
import BubbleParticles from "../../Components/BubbleParticles";
import "./home.css";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const Home = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let bubble = document.getElementById("bubble");
    bubble.classList.add("bubble-animate");
    const contentTimer = setTimeout(() => {
      clearTimeout(contentTimer);
      setShowContent(true);
    }, 8000); // 8 seconds

    return () => {
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div className="container">
      {showContent && <Navbar />}
      {showContent ? (
        <div className="content-container">
          <h1 className="gradient-background">Dont miss the bubble</h1>
          <img src="/img/bubble-image.png" alt="Bubble Computing" />
        </div>
      ) : (
        <div className="bubble-container">
          <div
            id="bubble"
            className="main-bubble"
            onClick={() => {
              let bubble = document.getElementById("bubble");
              bubble.classList.remove("bubble-animate");
              bubble.classList.add("bubble-cancel");
              const timer = setTimeout(() => {
                clearTimeout(timer);
                setShowContent(true);
              }, 1000);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
