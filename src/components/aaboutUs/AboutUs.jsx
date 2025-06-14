import React, { useState, useEffect, useRef } from 'react';
import { FaAward, FaHeart } from 'react-icons/fa';

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
      className={`min-h-[85vh] bg-gradient-to-br from-[#fff0f0] to-[#ffe8f8] px-4 md:px-10 py-10 transition-all duration-1000 flex gap-14 flex-col justify-center items-center overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600 drop-shadow-md">
        🎓 About Vikas Primary and High School
      </h1>

      <div className="w-full max-w-6xl flex flex-col-reverse lg:flex-row items-center justify-center gap-10">
        {/* Left Section */}
        <div
          className={`flex-1 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
        >
          <div className="p-5 rounded-2xl shadow-lg backdrop-blur-md bg-white/60 transition-all">
            <p className="text-lg md:text-xl text-gray-800 mb-5 leading-relaxed text-center lg:text-left">
              Welcome to <span className="font-semibold text-pink-600">Vikas Primary and High School</span> —
              a nurturing learning space for students from <strong>Playgroup to 10th Grade</strong>. We believe in shaping young minds through compassion, creativity, and a commitment to excellence.
            </p>

            <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded mb-5 shadow-sm">
              <p className="text-yellow-900 text-md">
                <span className="font-bold">🎯 Our Mission:</span> To deliver holistic education that balances academic strength with emotional intelligence, preparing students for life.
              </p>
            </div>

            <p className="text-gray-700 mb-6 text-md leading-relaxed">
              Since 2005, Vikas Primary and High School has been guiding children through every stage of their formative years with love, discipline, and modern teaching methods. Our school is known for a warm culture, strong results, and joyful learning.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-pink-100 p-5 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="font-bold text-pink-700 mb-2 flex items-center gap-2">
                  <FaHeart className="text-pink-500" /> Core Values
                </h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Discipline & Dedication</li>
                  <li>• Compassion & Respect</li>
                  <li>• Curiosity & Growth</li>
                </ul>
              </div>

              <div className="bg-green-100 p-5 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                  <FaAward className="text-green-500" /> Achievements
                </h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• 100% SSC Pass Rate</li>
                  <li>• Inter-school Science & Art Champions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Carousel */}
        <div
          className={`flex-1 flex flex-col items-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
        >
          <div className="relative w-full h-[300px] max-w-md rounded-xl overflow-hidden shadow-xl border-4 border-white">
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                <img
                  src={img}
                  alt={`School ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4 space-x-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3.5 h-3.5 rounded-full border border-purple-400 ${index === currentImageIndex ? 'bg-purple-600' : 'bg-gray-300'
                  } transition-all duration-300`}
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
