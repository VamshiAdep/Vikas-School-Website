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

  const goToSlide = (index) => setCurrentImageIndex(index);

  return (
    <section
      ref={aboutRef}
      className={`min-h-screen px-4 sm:px-6 lg:px-12 py-16 transition-all duration-1000 flex flex-col justify-center items-center overflow-hidden bg-cover bg-center bg-no-repeat ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{
        backgroundImage:
          "url('https://imgs.search.brave.com/1w6HQLwFOgk4EpPsgP1VDRHKiPdGku_q2YwOGULNU6o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQx/Nzg1MjA4OC9waG90/by9iYWNrLXRvLXNj/aG9vbC1jb25jZXB0/LXNjaG9vbC1zdXBw/bGllcy10b3Atdmll/dy1pbi1jaGFsa2Jv/YXJkLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1VeE1qdDVf/WE5KODZiaHZJUGI0/OV80T1hYcm8tb3FM/R2ZBSUZLQ0NoVzlF/PQ')",
      }}
    >
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

      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold my-8 text-center uppercase tracking-wider text-stroke">
        🎓 About Vikas High School
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-10">
        {/* Left Section */}
        <div
          className={`flex-1 flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-stroke font-[cursive] mb-4">
            Where Young Minds Blossom
          </h2>

          <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
            At Vikas, we nurture each child with care and creativity. Our educators
            blend traditional values with modern methods to inspire students daily.
            From early learning to board prep, we shape bright futures with joy.
            Learning here is more than education — it's transformation.
          </p>

          <div className="relative w-40 h-40 mt-10 flex items-center justify-center">
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
            <div className="z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-blue-300">
              <span className="text-yellow-500 text-2xl">✨</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div
          className={`flex-1 flex flex-col items-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
        >
          {/* Mobile Static Image */}
          <div className="block md:hidden w-full flex justify-center px-4">
            <div className="w-[80%] max-w-sm aspect-[16/12] rounded-xl overflow-hidden">
              <img
                src={images[0]}
                alt="School Mobile View"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>


          {/* Desktop Carousel */}
          <div className="hidden md:block relative w-full max-w-md aspect-[16/12] mt-6 rounded-xl overflow-hidden">
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
              >
                <img
                  src={img}
                  alt={`School Image ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="hidden md:flex justify-center items-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${index === currentImageIndex
                  ? 'bg-purple-600 border-purple-600 scale-110'
                  : 'bg-white border-purple-400 hover:bg-purple-300'}`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
