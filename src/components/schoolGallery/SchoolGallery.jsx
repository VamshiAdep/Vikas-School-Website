import React, { useState, useEffect } from 'react';
import './SchoolGallery.css';
import studPhoto from '../assets/schoolImages/studPhoto.jpg';
import yoga from '../assets/schoolImages/yoga.jpg';
import BlueDayPhoto from '../assets/schoolImages/BlueDayPhoto.jpg';
import computterLab from '../assets/schoolImages/computterLab.JPG';
import FairwellPhoto from '../assets/schoolImages/FairwellPhoto.jpg';
import holiPhoto from '../assets/schoolImages/holiPhoto.jpg';
import holiPhoto2 from '../assets/schoolImages/holiPhoto2.jpg';
import kidsPhoto from '../assets/schoolImages/kidsPhoto.jpg';
import jrKidsPhoto from '../assets/schoolImages/jrKidsPhoto.jpg';
import FlagPhoto from '../assets/schoolImages/FlagPhoto.jpg'
import rakhiMaking from '../assets/schoolImages/rakhiMaking.jpg'
import navratriPHoto from '../assets/schoolImages/navratriPHoto.jpg'

const imagePaths = [studPhoto, yoga, jrKidsPhoto, kidsPhoto, BlueDayPhoto, computterLab, holiPhoto, navratriPHoto, FairwellPhoto, rakhiMaking, FlagPhoto, holiPhoto2];
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
