import React from 'react';
import './BlogPage.css';

import culturalprogramme from '../assets/blogImages/culturalprogramme.JPG';
import republicDayImage from '../assets/blogImages/republicday.jpeg';
import independenceDayImage from '../assets/blogImages/indipendenceDay.jpg';
import yogaDayImage from '../assets/blogImages/Yogaday.jpeg';
import ganapatiFestivalImage from '../assets/blogImages/Ganpaticel.jpeg';
import Dahihandi from '../assets/blogImages/Dahihandi.jpeg';
import DandiyaCele from '../assets/blogImages/DandiyaCele.jpeg';
import scienceEx from '../assets/blogImages/scienceEx.jpg';

const blogs = [
    {
        id: 1,
        title: 'Annual Day Highlights',
        date: 'June 3, 2025',
        excerpt: 'Our Annual Day was a grand celebration of India’s cultural richness. Students performed Bharatnatyam, skits on social issues, and inspiring speeches.',
        image: culturalprogramme,
        category: 'Annual Festival',
    },
    {
        id: 2,
        title: 'Science Exhibition 2025',
        date: 'May 20, 2025',
        excerpt: 'From AI-powered robots to eco-friendly innovations, students exhibited futuristic talent at the annual Science Fair.',
        image: scienceEx,
    },
    {
        id: 3,
        title: 'Art & Culture Fest',
        date: 'April 15, 2025',
        excerpt: 'A colorful blend of Rangoli, folk dance, and live painting brought India’s diverse heritage to life.',
        image: culturalprogramme,
        category: 'Art & Culture',
    },
    {
        id: 4,
        title: 'Dandiya Celebration',
        date: 'February 20, 2025',
        excerpt: 'Vibrant traditional attire and rhythmic Garba beats marked this lively Navratri celebration.',
        image: DandiyaCele,
        category: 'Navratri',
    },
    {
        id: 5,
        title: 'Dahi Handi Festival',
        date: 'May 10, 2025',
        excerpt: 'Chants of “Govinda Ala Re!” echoed as students formed human pyramids celebrating Janmashtami.',
        image: Dahihandi,
        category: 'Janmashtami',
    },
    {
        id: 6,
        title: 'Republic Day Celebration',
        date: 'January 26, 2025',
        excerpt: 'A salute to the tricolor! Parade, patriotic songs, and skits brought pride and unity to campus.',
        image: republicDayImage,
        category: 'Republic Day',
    },
    {
        id: 7,
        title: 'Independence Day Ceremony',
        date: 'August 15, 2025',
        excerpt: 'Flag hoisting, freedom fighter tributes, and cultural events honored India’s hard-earned freedom.',
        image: independenceDayImage,
        category: 'Independence Day',
    },
    {
        id: 8,
        title: 'International Yoga Day',
        date: 'June 21, 2025',
        excerpt: 'Faculty and students embraced India’s ancient wisdom with guided yoga sessions on campus.',
        image: yogaDayImage,
        category: 'Yoga & Wellness',
    },
    {
        id: 9,
        title: 'Ganapati Festival',
        date: 'September 10, 2025',
        excerpt: 'Ganpati Bappa Morya! Eco-friendly idols, devotional songs, and vibrant aarti ceremonies graced the occasion.',
        image: ganapatiFestivalImage,
        category: 'Ganesh Utsav'
    }
];

const BlogPage = () => {
    return (
        <div className="blog-page">
            <header className="blog-header">
                <h1>Vikas High School - Campus Chronicles</h1>
                <p>Explore our vibrant celebrations, academic achievements, and authentic Indian cultural experiences.</p>
            </header>

            <div className="blog-list">
                {blogs.map(blog => (
                    <div key={blog.id} className="blog-card">
                        <div className="blog-image">
                            <img src={blog.image} alt={blog.title} />
                        </div>
                        <div className="blog-content">
                            <span className="blog-category">{blog.category}</span>
                            <h3 className="blog-title">{blog.title}</h3>
                            <p className="blog-excerpt">{blog.excerpt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
