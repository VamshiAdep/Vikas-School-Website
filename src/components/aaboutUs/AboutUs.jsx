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

  // Intersection Observer for scroll reveal
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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  // Auto-slide images
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
      className={`h-150 bg-[#ffeeee] px-4 md:px-10 py-12 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Top Centered Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
        About Our School
      </h1>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* Left Content - with staggered animation */}
        <div 
          className={`flex-1 flex flex-col justify-center text-center lg:text-left transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <div className="space-y-5">
            <p className="text-gray-700">
              Welcome to <span className="font-bold text-blue-600">Sunshine Academy</span>, where we nurture young minds to become creative, confident individuals.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r">
              <p className="text-yellow-800">
                <span className="font-bold">Our Mission:</span> Provide a stimulating learning environment for students to achieve their potential.
              </p>
            </div>

            <p className="text-gray-700">
              Established in 2005, we've grown from a small community initiative to a leading educational institution.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <h3 className="font-bold text-blue-700 mb-2">Our Values</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Integrity</li>
                  <li>• Respect</li>
                  <li>• Curiosity</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-green-700 mb-2">Achievements</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 100% graduation</li>
                  <li>• STEM awards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image Slider with animation */}
        <div 
          className={`flex-1 flex flex-col items-center lg:items-end justify-center transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-xl max-w-md">
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
                />
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? 'bg-purple-600' : 'bg-gray-300'
                }`}
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