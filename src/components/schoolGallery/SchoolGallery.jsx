import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import image1 from '../assets/schoolImages/schoolImage2.jpg';
import image2 from '../assets/schoolImages/schoolImage.jpg';
import imageLab from '../assets/schoolImages/computterLab.jpg';
import ChemistryLab from '../assets/schoolImages/ChemistryLab.JPG';
import picnicImage from '../assets/schoolImages/picnicImage.jpeg';
import image3 from '../assets/carouselImages/image3.jpg';
import image4 from '../assets/carouselImages/image4.jpg';
import image5 from '../assets/carouselImages/image1.jpg';
import independenceDayImage from '../assets/blogImages/indipendenceDay.jpg';
import yogaDayImage from '../assets/blogImages/Yogaday.jpeg';
import Dahihandi from '../assets/blogImages/Dahihandi.jpeg';
import DandiyaCele from '../assets/blogImages/DandiyaCele.jpeg';

gsap.registerPlugin(ScrollTrigger);

const imagePaths = [
  image1, image2, image5,
  image4, imageLab, ChemistryLab,
  image3, DandiyaCele, picnicImage,
  yogaDayImage, independenceDayImage, Dahihandi,
];

const videoIds = ['qLU4dpXP0B8', 'iuviq3yvUhc', 'jzQSc584XZ8', 'F1MaojJovbo'];

const SchoolGallery = () => {
  const [currentVideo, setCurrentVideo] = useState(videoIds[0]);
  const colRefs = useRef([]);
  const headingRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    colRefs.current.forEach((col, index) => {
      const clone = col.cloneNode(true);
      clone.classList.add('absolute', 'top-full', 'left-0');
      col.parentNode.appendChild(clone);

      gsap.to([col, clone], {
        yPercent: index % 2 === 0 ? -100 : 100,
        ease: 'none',
        duration: 15,
        repeat: -1,
      });
    });

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -60 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        delay: 0.3,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
        },
      }
    );

    gsap.fromTo(
      leftRef.current,
      { opacity: 0, x: -120 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        delay: 0.6,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: leftRef.current,
          start: 'top 85%',
        },
      }
    );

    gsap.fromTo(
      rightRef.current,
      { opacity: 0, y: 120 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        delay: 0.9,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: rightRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  const handleThumbnailClick = (videoId) => setCurrentVideo(videoId);
  const handleNext = () => {
    const currentIndex = videoIds.indexOf(currentVideo);
    setCurrentVideo(videoIds[(currentIndex + 1) % videoIds.length]);
  };
  const handlePrev = () => {
    const currentIndex = videoIds.indexOf(currentVideo);
    setCurrentVideo(videoIds[(currentIndex - 1 + videoIds.length) % videoIds.length]);
  };

  const columns = [
    imagePaths.slice(0, 3),
    imagePaths.slice(3, 6),
    imagePaths.slice(6, 9),
    imagePaths.slice(9, 12),
  ];

  return (
    <section className="relative mr-2.5 min-h-[90vh] py-16 px-4 overflow-hidden bg-white text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('src/components/assets/trusteeImages/videobg.jpg')` }}
      ></div>

      {/* Overlay content */}
      <div className="relative z-10"><br /><br />
        {/* Section Heading */}
        <h2
          ref={headingRef}
          className="relative text-5xl lg:text-6xl font-bold text-center mb-36 text-gray-900"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Our School Gallery
          </span>
          <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="absolute w-[80%] h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent transform -rotate-3"></span>
            <span className="absolute w-[80%] h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent transform rotate-3"></span>
          </span>
        </h2><br /><br />

        {/* Gallery and Video Content */}
        <div className="flex flex-col lg:flex-row items-start gap-16 mt-24">
          {/* Left Scrolling Images */}
          <div
            ref={leftRef}
            className="relative w-full lg:w-[60vw] h-[520px] flex justify-center gap-5 overflow-hidden"
          >
            {columns.map((colImages, colIndex) => (
              <div key={colIndex} className="relative h-full w-[180px] overflow-hidden">
                <div
                  className="absolute top-0 left-0 w-full flex flex-col gap-6"
                  ref={(el) => (colRefs.current[colIndex] = el)}
                >
                  {colImages.map((img, idx) => (
                    <div key={idx} className="w-full">
                      <img
                        src={img}
                        alt={`Event ${colIndex * 3 + idx}`}
                        className="w-[180px] h-[180px] object-cover rounded-xl shadow-md"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Video Section */}
          <div
            ref={rightRef}
            className="flex flex-col items-center w-full lg:w-[35vw] mt-10"
          >
            <iframe
              src={`https://www.youtube.com/embed/${currentVideo}`}
              frameBorder="0"
              allowFullScreen
              muted
              title="School Video"
              className="w-full h-[400px] rounded-lg shadow-2xl"
            ></iframe><br /><br />

            <div className="flex mt-6 items-center gap-2 overflow-hidden overflow-x-auto w-full px-2 py-2 scroll-smooth no-scrollbar">
              <button
                className="text-3xl text-gray-300 hover:text-white px-2"
                onClick={handlePrev}
              >
                ‹
              </button>
              {videoIds.map((id) => (
                <div key={id} className="flex-shrink-0 w-[110px]">
                  <img
                    src={`https://img.youtube.com/vi/${id}/0.jpg`}
                    alt={`Video ${id}`}
                    onClick={() => handleThumbnailClick(id)}
                    className={`w-full h-[70px] object-cover rounded-md cursor-pointer border-2 transition-transform duration-300 ${currentVideo === id
                        ? 'border-yellow-500 scale-105'
                        : 'border-transparent'
                      }`}
                  />
                </div>
              ))}
              <button
                className="text-3xl text-gray-300 hover:text-white px-2"
                onClick={handleNext}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolGallery;
