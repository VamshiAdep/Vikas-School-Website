import React, { useState, useEffect, useRef } from "react";
import "./AboutUsPage.css"; // ✅ external CSS file

const AboutUsPage = () => {
  const images = [
    "https://img.freepik.com/free-vector/many-children-with-happy-face-sitting-log_1308-40564.jpg?semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-vector/happy-child-with-school-supplies_1308-174081.jpg?semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-vector/set-different-doodle-kids-cartoon-character-isolated_1308-80628.jpg?semt=ais_hybrid&w=740",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={aboutRef}
      className={`about-section ${isVisible ? "visible" : ""}`}
    >
      <h1 className="about-title">🎓 About Vikas High School</h1>

      <div className="about-container">
        {/* Left Text Section */}
        <div className="about-text">
          <h2 className="about-subtitle">Where Young Minds Blossom</h2>
          <p>
            At Vikas, we nurture each child with care and creativity. Our
            educators blend traditional values with modern methods to inspire
            students daily. From early learning to board prep, we shape bright
            futures with joy. Learning here is more than education — it’s
            transformation.
          </p>
        </div>

        {/* Right Image Carousel */}
        <div className="about-carousel">
          {images.map((img, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentImageIndex ? "active" : ""
                }`}
            >
              <img src={img} alt={`Slide ${index + 1}`} />
            </div>
          ))}

          {/* Dots */}
          {/* <div className="carousel-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentImageIndex ? "active" : ""
                  }`}
                onClick={() => setCurrentImageIndex(index)}
              ></button>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
