import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedBanner = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const el = sectionRef.current;

    // Animate the whole container
    gsap.fromTo(
      el,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div className="w-full flex justify-center mt-20 px-4">
      <div
        ref={sectionRef}
        className="relative w-full max-w-[92%] h-[300px] bg-[#e6f0ff] rounded-md overflow-hidden shadow-lg flex items-center justify-center"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-30"
          style={{
            backgroundImage:
              'url("https://tse1.mm.bing.net/th/id/OIP.bW0pOV1mMVkTRUgCrUknCQHaFj?r=0&rs=1&pid=ImgDetMain&cb=idpwebp1&o=7&rm=3")',
          }}
        ></div>

        {/* Centered Content */}
        <div className="relative z-10 text-center px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-[#003366] mb-2 leading-snug">
            Empowering Students Through{' '}
            <span className="text-[#ff6b33]">Education & Excellence</span>
          </h2>
          <p className="text-base md:text-lg text-[#003366] mb-4 max-w-3xl mx-auto">
            Join our vibrant learning community where future leaders are shaped with care, creativity, and commitment.
          </p>
          <button className="bg-blue-300 text-white  h-20 ">
            Explore Admissions
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBanner;
