import React, { useRef, useEffect, useState } from 'react';
import { X } from 'lucide-react';

const injectStyle = () => {
  const style = document.createElement('style');
  style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
    .stroke-strong {
      font-family: 'Pacifico', cursive;
      -webkit-text-stroke: 3px grey;
      text-stroke: 3px black;
      color: white;
      background: none;
    }
  `;
  document.head.appendChild(style);
};

const AdmissionForm = ({ isOpen, onClose, formRef }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    currentStd: '',
    mobileNo: '',
    emailId: '',
    city: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.studentName || !formData.parentName || !formData.currentStd || !formData.mobileNo) {
      alert('Please fill in all required fields');
      return;
    }

    console.log('Form submitted:', formData);
    alert('Admission form submitted successfully!');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      ref={formRef}
      className="absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md mx-4"
    >
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
        <div className="relative bg-gray-50 px-6 py-4 border-b">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 p-1 hover:bg-gray-200 rounded-full transition-colors"
            aria-label="Close form"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
          <h1 className="text-xl font-semibold text-red-600 text-center">
            Admissions Open for<br />2025-26
          </h1>
        </div>

        <div className="p-6 space-y-4">
          <input type="text" name="studentName" value={formData.studentName} onChange={handleInputChange} placeholder="Student Name*" className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500" required />
          <input type="text" name="parentName" value={formData.parentName} onChange={handleInputChange} placeholder="Parent Name" className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500" />
          <select name="currentStd" value={formData.currentStd} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700" required>
            <option value="">Current Std</option>
            {["Nursery","KG","1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th"].map(std => (
              <option key={std} value={std}>{std} Standard</option>
            ))}
          </select>
          <input type="tel" name="mobileNo" value={formData.mobileNo} onChange={handleInputChange} placeholder="Mobile No*" className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500" required />
          <input type="email" name="emailId" value={formData.emailId} onChange={handleInputChange} placeholder="Email ID" className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500" />
          <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="City*" className="w-full px-4 py-3 border border-gray-300 rounded-md placeholder-gray-500" />
          <button onClick={handleSubmit} className="w-full bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 transition-colors font-medium text-lg">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default function HeroPage() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const formRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const togglePlayPause = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
        if (window.gsap) {
          window.gsap.fromTo(videoRef.current, { scale: 0.98 }, { scale: 1, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
        }
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
        if (window.gsap) {
          window.gsap.to(videoRef.current, { scale: 0.99, duration: 0.3, ease: 'power2.out' });
        }
      }
    }
  };

  const toggleForm = () => {
    setShowForm((prev) => !prev);
    if (!showForm && window.gsap && formRef.current) {
      window.gsap.fromTo(formRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' });
    }
  };

  const closeForm = () => {
    if (window.gsap && formRef.current) {
      window.gsap.to(formRef.current, {
        y: 100,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => setShowForm(false),
      });
    } else {
      setShowForm(false);
    }
  };

  useEffect(() => {
    injectStyle();

    if (window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);

      window.gsap.set(videoRef.current, {
        scale: 0.1,
        opacity: 0,
        transformOrigin: 'center center',
      });

      const ctx = window.gsap.context(() => {
        window.gsap.to(videoRef.current, {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: 'expo.out',
          delay: 0.3,
          onComplete: setupScrollAnimation,
        });

        if (buttonRef.current) {
          window.gsap.to(buttonRef.current, {
            rotation: 360,
            duration: 4,
            repeat: -1,
            ease: 'none',
          });
        }

        function setupScrollAnimation() {
          window.ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top top',
            end: '+=500',
            scrub: 0.5,
            onUpdate: (self) => {
              const scale = 1 - self.progress * 0.5;
              window.gsap.to(videoRef.current, {
                scale,
                duration: 0.1,
                ease: 'power1.out',
              });
            },
            onLeave: () => {
              window.gsap.to(videoRef.current, {
                scale: 0.5,
                duration: 0.3,
                ease: 'power1.out',
              });
            },
            onEnterBack: () => {
              window.gsap.to(videoRef.current, {
                scale: 1,
                duration: 0.7,
                ease: 'elastic.out(1, 0.5)',
              });
            },
          });
        }
      }, containerRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <div ref={containerRef} className="relative h-[90vh] w-full overflow-hidden bg-transparent flex items-center justify-center">
      {/* Video Background */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${showForm ? 'opacity-20' : 'opacity-100'}`}>
        <video ref={videoRef} autoPlay muted playsInline className="h-full w-full object-cover origin-center">
          <source src="/background-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* PNG Image on Left */}
<div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 hidden sm:block">
  <img
    src="/ladki.png"
    alt="Right Decoration"
    className="w-[800px] h-auto object-contain ml-4"
  />
</div>




      {/* Center Title */}
      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none px-4 w-full">
        <h1 className="stroke-strong text-[22px] sm:text-[30px] md:text-[40px] lg:text-[60px] xl:text-[100px] leading-tight font-extrabold text-center whitespace-pre-line uppercase">
          Welcome{"\n"}to Vikas{"\n"}HIGH{"\n"}School
        </h1>
      </div>

      {/* Play/Pause Button */}
      <div className="absolute z-20 bottom-8 right-6 md:right-10">
        <button
          ref={buttonRef}
          onClick={togglePlayPause}
          className="w-16 h-16 md:w-20 md:h-20 bg-black/30 border-2 border-white/20 rounded-full flex items-center justify-center shadow-2xl hover:bg-black/40 transition-all duration-300"
        >
          {isPlaying ? (
            <svg className="w-6 h-6 md:w-8 md:h-8 text-white/70" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 md:w-8 md:h-8 text-white/70 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>

      {/* Apply Now Button */}
      {!showForm && (
        <div className="absolute bottom-8 right-24 md:right-40 z-20">
          <button
            onClick={toggleForm}
            className="bg-gradient-to-r from-blue-400 to-blue-100 h-[45px] md:h-[50px] w-[130px] md:w-[150px] px-6 md:px-8 text-black text-sm md:text-base font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out hover:from-blue-700 hover:to-blue-300"
          >
            Apply Now
          </button>
        </div>
      )}

      {/* Admission Form */}
      <AdmissionForm
        isOpen={showForm}
        onClose={closeForm}
        formRef={formRef}
      />
    </div>
  );
}
