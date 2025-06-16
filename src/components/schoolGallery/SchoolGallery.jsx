import React, { useState, useEffect } from 'react';
import './SchoolGallery.css';
import image1 from '../assets/schoolImages/schoolImage2.jpg';
import image2 from '../assets/schoolImages/schoolImage.jpg';
import imageLab from '../assets/schoolImages/computterLab.jpg';
import ChemistryLab from '../assets/schoolImages/ChemistryLab.JPG';
import picnicImage from '../assets/schoolImages/picnicImage.jpeg';
import image3 from '../assets/carouselImages/image3.jpg';
import image4 from '../assets/carouselImages/image4.jpg';
import image5 from '../assets/carouselImages/image1.jpg';
import independenceDayImage from '../assets/blogImages/indipendenceDay.jpg'
import yogaDayImage from '../assets/blogImages/Yogaday.jpeg'
import Dahihandi from '../assets/blogImages/Dahihandi.jpeg'
import DandiyaCele from '../assets/blogImages/DandiyaCele.jpeg'


const imagePaths = [image1, image2, image5, image4, imageLab, ChemistryLab, image3, DandiyaCele, picnicImage, yogaDayImage, independenceDayImage, Dahihandi];
const videoIds = [
    'qLU4dpXP0B8',
    'iuviq3yvUhc',
    'jzQSc584XZ8',
    'F1MaojJovbo'
];

const SchoolGallery = () => {
    const [currentVideo, setCurrentVideo] = useState(videoIds[0]);

    const handleThumbnailClick = (videoId) => {
        setCurrentVideo(videoId);
    };

    const handleNext = () => {
        const currentIndex = videoIds.indexOf(currentVideo);
        const nextIndex = (currentIndex + 1) % videoIds.length;
        setCurrentVideo(videoIds[nextIndex]);
    };

    const handlePrev = () => {
        const currentIndex = videoIds.indexOf(currentVideo);
        const prevIndex = (currentIndex - 1 + videoIds.length) % videoIds.length;
        setCurrentVideo(videoIds[prevIndex]);
    };

    return (
        <section className="gallery-section">
            <h2 className="gallery-title">Our School Gallery</h2>

            <div className='gallery-container'>
                <div className="gallery-grid">
                    {imagePaths.map((path, idx) => (
                        <div key={idx} className="gallery-card">
                            <img src={path} alt={`School Event ${idx + 1}`} />
                        </div>
                    ))}
                </div>

                <div className="video-container">
                    <iframe
                        id="main-video"
                        src={`https://www.youtube.com/embed/${currentVideo}`}
                        frameBorder="0"
                        allowFullScreen
                        title="School Video"
                    ></iframe>

                    <div className="video-thumbnails">
                        <button className="nav-btn" onClick={handlePrev}>‹</button>
                        {videoIds.map((id) => (
                            <img
                                key={id}
                                src={`https://img.youtube.com/vi/${id}/0.jpg`}
                                alt={`Video ${id}`}
                                onClick={() => handleThumbnailClick(id)}
                                className={currentVideo === id ? 'active' : ''}
                            />
                        ))}
                        <button className="nav-btn" onClick={handleNext}>›</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SchoolGallery;
