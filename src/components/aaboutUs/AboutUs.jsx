import React, { useState, useEffect, useRef } from 'react';

const AboutUsPage = () => {
  const images = [
    'https://img.freepik.com/free-vector/many-children-with-happy-face-sitting-log_1308-40564.jpg?semt=ais_hybrid&w=740',
    'https://img.freepik.com/free-vector/happy-child-with-school-supplies_1308-174081.jpg?semt=ais_hybrid&w=740',
    'https://img.freepik.com/free-vector/set-different-doodle-kids-cartoon-character-isolated_1308-80628.jpg?semt=ais_hybrid&w=740',
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
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div
      ref={aboutRef}
      className={`min-h-[85vh] px-4 md:px-10 py-10 transition-all duration-1000 flex flex-col justify-center items-center overflow-hidden bg-cover bg-center bg-no-repeat ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        backgroundImage:
          "url('https://imgs.search.brave.com/1w6HQLwFOgk4EpPsgP1VDRHKiPdGku_q2YwOGULNU6o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQx/Nzg1MjA4OC9waG90/by9iYWNrLXRvLXNj/aG9vbC1jb25jZXB0/LXNjaG9vbC1zdXBw/bGllcy10b3Atdmll/dy1pbi1jaGFsa2Jv/YXJkLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1VeE1qdDVf/WE5KODZiaHZJUGI0/OV80T1hYcm8tb3FM/R2ZBSUZLQ0NoVzlF/PQ')",
      }}
    >
      {/* Text Stroke Styles */}
      <style>
        {`
          .text-stroke {
            color: transparent;
            -webkit-text-stroke: 1.5px white;
            text-shadow: none;
          }

          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 10s linear infinite;
          }
        `}
      </style>

      <h1 className="text-6xl md:text-8xl font-extrabold mb-10 text-center uppercase tracking-wide text-stroke">
        🎓 About Vikas High School
      </h1>

      <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-6xl gap-10">
        {/* Left Section */}
        <div
          className={`flex-1 flex flex-col items-start justify-center gap-6 transition-all duration-700 delay-150 px-2 md:px-8 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <h2 className="text-[6px] sm:text-[44px] md:text-[44px] font-bold text-stroke font-[cursive] tracking-wide">
            Where Young Minds Blossom
          </h2>

          <p className="text-white text-lg leading-relaxed max-w-xl">
            At Vikas, we nurture each child with care and creativity. Our educators
            blend traditional values with modern methods to inspire students daily.
            From early learning to board prep, we shape bright futures with joy.
            Learning here is more than education — it's transformation.
          </p>

          {/* Circular Badge */}
          <div className="relative w-[160px] h-[160px] mt-10 flex items-center justify-center">
            <div className="absolute w-full h-full animate-spin-slow">
              {[...Array(24)].map((_, i) => {
                const angle = i * 15;
                const text = ' About Us • About Us • ';
                return (
                  <span
                    key={i}
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: `rotate(${angle}deg) translate(65px) rotate(-${angle}deg)`,
                      transformOrigin: '0 0',
                      fontSize: '14px',
                      color: 'white',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {text[i % text.length]}
                  </span>
                );
              })}
            </div>
            <div className="z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-blue-300">
              <span className="text-yellow-500 text-2xl">✨</span>
            </div>
          </div>
        </div>

        {/* Right Section - Only visible on md screens and above */}
        <div className={`hidden md:flex flex-1 flex-col items-center transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}>
          {/* Desktop/Tablet Carousel */}
          <div className="relative w-full h-[300px] max-w-md rounded-xl overflow-hidden border-4 border-white shadow-xl">
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={img}
                  alt={`School ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3.5 h-3.5 rounded-full border border-purple-400 ${
                  index === currentImageIndex ? 'bg-purple-600' : 'bg-gray-300'
                } transition-all duration-300 hover:scale-125`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
    </div>
      </div>
  );
};

export default AboutUsPage;