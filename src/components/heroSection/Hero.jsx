import React, { useRef, useEffect, useState } from 'react';
import { X } from 'lucide-react';
import './hero.css';

const injectStyle = () => {
  const style = document.createElement('style');
  style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
    .stroke-strong {
      font-family: 'Pacifico', cursive;
      -webkit-text-stroke: 2px #fff;
      text-stroke: 2px #fff;
      color: black;
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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.studentName || !formData.parentName || !formData.currentStd || !formData.mobileNo) {
      alert('Please fill in all required fields');
      return;
    }
    alert('Admission form submitted successfully!');
    console.log('Form submitted:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div ref={formRef} className="absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md mx-4">
      <div className="admission-container">
        <div className="admission-header">
          <button onClick={onClose} className="admission-close-btn">
            <X className="w-5 h-5 text-gray-600" />
          </button>
          <img className='' src="src/components/assets/TSSS-Logo.jpg" alt="" />
          <h1>Admissions Open for<br />2025-26</h1>
        </div>
        <div className="admission-body">
          <input name="studentName" value={formData.studentName} onChange={handleInputChange} placeholder="Student Name*" />
          <input name="parentName" value={formData.parentName} onChange={handleInputChange} placeholder="Parent Name" />
          <select name="currentStd" value={formData.currentStd} onChange={handleInputChange} required>
            <option value="">Current Std</option>
            {["Nursery", "KG", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th"].map(std => (
              <option key={std} value={std}>{std} Standard</option>
            ))}
          </select>
          <input type="tel" name="mobileNo" value={formData.mobileNo} onChange={handleInputChange} placeholder="Mobile No*" />
          <input type="email" name="emailId" value={formData.emailId} onChange={handleInputChange} placeholder="Email ID" />
          <input name="city" value={formData.city} onChange={handleInputChange} placeholder="City*" />
          <button onClick={handleSubmit} className="admission-submit-btn">Submit</button>
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
  const [typedText, setTypedText] = useState('');

  const togglePlayPause = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
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

    const fullText = "Welcome<br>to Vikas<br>HIGH School";
    let i = 0;
    let currentText = '';

    const delayTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i >= fullText.length) {
          clearInterval(interval);
          return;
        }
        currentText += fullText[i];
        setTypedText(currentText);
        i++;
      }, 80);
    }, 3000);

    if (window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);

      const ctx = window.gsap.context(() => {
        window.gsap.set(videoRef.current, {
          scale: 0.1,
          opacity: 0,
        });

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
          });
        }
      }, containerRef);

      return () => ctx.revert();
    }

    return () => clearTimeout(delayTimeout);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[90vh] w-full overflow-hidden bg-transparent flex items-center justify-center">
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${showForm ? 'opacity-20' : 'opacity-100'}`}>
        <video ref={videoRef} autoPlay muted  playsInline className="h-full w-full object-cover origin-center">
          <source src="/background-video.mp4" type="video/mp4" />
        </video>
      </div>

<div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none px-4 w-full text-center">
  <h1
    className="stroke-strong text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] leading-tight font-extrabold uppercase"
    dangerouslySetInnerHTML={{ __html: typedText }}
  />
</div>






      <div className="absolute z-20 bottom-8 right-6 md:right-10">
        <button
          ref={buttonRef}
          onClick={togglePlayPause}
          className="w-16 h-16 md:w-20 cursor-pointer md:h-20 bg-black/30 border-2 border-white/20 rounded-full flex items-center justify-center shadow-2xl hover:bg-black/40 transition-all duration-300"
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

      {!showForm && (
        <div className="absolute bottom-8 right-24 md:right-40 z-20">
          <button
            onClick={toggleForm}
            className="bg-gradient-to-r cursor-pointer from-blue-400 to-blue-100 h-[45px] md:h-[50px] w-[130px] md:w-[150px] px-6 md:px-8 text-black text-sm md:text-base font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out hover:from-blue-700 hover:to-blue-300"
          >
            Apply Now
          </button>
        </div>
      )}

      <AdmissionForm isOpen={showForm} onClose={closeForm} formRef={formRef} />
    </div>
  );
}
