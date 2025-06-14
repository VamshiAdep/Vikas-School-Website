import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPlay, FaPause } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function HeroPage() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.set(videoRef.current, {
      scale: 0.1,
      opacity: 0,
      transformOrigin: 'center center',
    });

    const ctx = gsap.context(() => {
      gsap.to(videoRef.current, {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: 'expo.out',
        delay: 0.3,
        onComplete: setupScrollAnimation,
      });

      gsap.to(buttonRef.current, {
        rotation: 360,
        duration: 4,
        repeat: -1,
        ease: 'none',
      });

      function setupScrollAnimation() {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'top top',
          end: '+=500',
          scrub: 0.5,
          onUpdate: (self) => {
            const scale = 1 - self.progress * 0.5;
            gsap.to(videoRef.current, {
              scale: scale,
              duration: 0.1,
              ease: 'power1.out',
            });
          },
          onLeave: () => {
            gsap.to(videoRef.current, {
              scale: 0.5,
              duration: 0.3,
              ease: 'power1.out',
            });
          },
          onEnterBack: () => {
            gsap.to(videoRef.current, {
              scale: 1,
              duration: 0.7,
              ease: 'elastic.out(1, 0.5)',
            });
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const togglePlayPause = (e) => {
    e.stopPropagation();
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      gsap.fromTo(videoRef.current, { scale: 0.98 }, { scale: 1, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
      gsap.to(videoRef.current, { scale: 0.99, duration: 0.3, ease: 'power2.out' });
    }
  };

  const toggleForm = () => {
    setShowForm((prev) => !prev);
    if (!showForm) {
      gsap.fromTo(
        formRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' }
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    gsap.to(formRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.in',
      onComplete: () => setShowForm(false),
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative h-200 w-full overflow-hidden bg-transparent flex items-center justify-center"
    >
      {/* Background Video */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${showForm ? 'opacity-20' : 'opacity-200'}`}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover origin-center"
          style={{ transform: 'scale(0.1)', opacity: 0 }}
        >
          <source src="/background-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Play / Pause Button */}
      <div className="absolute z-20 bottom-10 right-10">
        <button
          ref={buttonRef}
          onClick={togglePlayPause}
          className="w-20 h-20 bg-black/30 border-2 border-white/20 rounded-full flex items-center justify-center shadow-2xl hover:bg-black/40 transition-all duration-300"
        >
          {isPlaying ? <FaPause className="w-8 h-8 text-white/70" /> : <FaPlay className="w-8 h-8 text-white/70 ml-1" />}
        </button>
      </div>

      {/* Apply Now Button - Only show when form is not visible */}
      {!showForm && (
        <div className="absolute bottom-10 right-40 z-20">
          <button
            onClick={toggleForm}
            className="bg-gradient-to-r from-blue-300 to-white h-[50px] w-[150px] px-8 text-black font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out hover:from-blue-700 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50"
          >
            Apply Now
          </button>
        </div>
      )}

      {/* Form - Positioned in the hero section background */}
      <div 
        ref={formRef}
        className={`absolute z-10 w-full max-w-2xl mx-auto transition-all duration-500 ${showForm ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-xl w-full overflow-y-auto p-8"
        >
          <div className="space-y-4">
            <h2 className="text-gray-800 text-2xl font-bold text-center mb-2">
              Complete the form for more information
            </h2>
            <p className="text-gray-600 text-sm text-center mb-6">Our team will contact you soon.</p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">State</label>
                <input type="text" className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400" />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">City</label>
                <input type="text" className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400" />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">School</label>
                <input type="text" className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400" />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Student's First Name</label>
                <input type="text" className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400" />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Student's Last Name</label>
                <input type="text" className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400" />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Standard</label>
                <select className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400">
                  <option value="">Select</option>
                  <option>Nursery</option>
                  <option>LKG</option>
                  <option>UKG</option>
                  <option>1st</option>
                  <option>2nd</option>
                  <option>3rd</option>
                  <option>4th</option>
                  <option>5th</option>
                  <option>6th</option>
                  <option>7th</option>
                  <option>8th</option>
                  <option>9th</option>
                  <option>10th</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                <input type="email" className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400" />
              </div>
              <div className="col-span-2">
                <label className="block text-gray-700 text-sm font-medium mb-1">Mobile Number</label>
                <input type="tel" className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400" />
              </div>
              <div className="col-span-2">
                <label className="block text-gray-700 text-sm font-medium mb-1">Enter Captcha</label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className="flex-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                  />
                  <div className="bg-gray-200 px-4 py-2 rounded-md font-mono text-lg">Ydips</div>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={toggleForm}
                className="bg-gray-300 text-gray-800 py-2 px-6 rounded-lg hover:bg-gray-400 transition-colors font-medium"
              >
                BACK
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                SEND ENQUIRY
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}