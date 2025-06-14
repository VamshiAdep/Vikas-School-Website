import React from 'react';
import './BlogPage.css';
import culturalprogramme from '../assets/blogImages/culturalprogramme.JPG'
import republicDayImage from '../assets/blogImages/republicday.jpeg'
import independenceDayImage from '../assets/blogImages/indipendenceDay.jpg'
import yogaDayImage from '../assets/blogImages/Yogaday.jpeg'
import ganapatiFestivalImage from '../assets/blogImages/Ganpaticel.jpeg'
import Dahihandi from '../assets/blogImages/Dahihandi.jpeg'
import DandiyaCele from '../assets/blogImages/DandiyaCele.jpeg'
import scienceEx from '../assets/blogImages/scienceEx.jpg'
const blogs = [
    {
        id: 1,
        title: 'Annual Day Highlights',
        date: 'June 3, 2025',
        excerpt: 'Catch all the action from our thrilling Annual Day event, featuring student performances, speeches, and celebrations!',
        image: culturalprogramme
    },
    {
        id: 2,
        title: 'Science Exhibition 2025',
        date: 'May 20, 2025',
        excerpt: 'Explore the amazing science projects presented by our talented students at this year’s exhibition.',
        image: scienceEx
    },
    {
        id: 3,
        title: 'Art & Culture Fest',
        date: 'April 15, 2025',
        excerpt: 'Dive into the colorful celebration of art and culture at P.E.M. High School and Degree College.',
        image: culturalprogramme
    },
    {
        id: 4,
        title: 'Dandiya Celebration',
        date: 'February 20, 2025',
        excerpt: 'Join us for the vibrant and colorful Dandiya Celebration, a night filled with traditional dance and festive spirit at P.E.M. High School and Degree College.',
        image: DandiyaCele
    },
    {
        id: 5,
        title: 'Dahi Handi Festival',
        date: 'May 10, 2025',
        excerpt: 'Experience the thrill and excitement of the Dahi Handi Festival, celebrating teamwork and tradition with our enthusiastic students.',
        image: Dahihandi
    },
    {
        id: 6,
        title: 'Republic Day Celebration',
        date: 'January 26, 2025',
        excerpt: 'Join us in honoring the spirit of India’s Republic Day with patriotic events and student performances at P.E.M. High School and Degree College.',
        image: republicDayImage
    },
    {
        id: 7,
        title: 'Independence Day Ceremony',
        date: 'August 15, 2025',
        excerpt: 'Celebrate the freedom and heritage of our nation with flag hoisting and cultural programs organized by P.E.M. High School and Degree College.',
        image: independenceDayImage
    },
    {
        id: 8,
        title: 'International Yoga Day',
        date: 'June 21, 2025',
        excerpt: 'Experience wellness and mindfulness through yoga sessions and workshops hosted at P.E.M. High School and Degree College.',
        image: yogaDayImage
    },
    {
        id: 9,
        title: 'Ganapati Festival',
        date: 'September 10, 2025',
        excerpt: 'Embrace the joy and traditions of Ganapati Festival with vibrant celebrations and student activities at P.E.M. High School and Degree College.',
        image: ganapatiFestivalImage
    }
];

const BlogPage = () => {
    return (
        <div className="blog-page">
            <header className="blog-header">
                <h1>Vikas High School - Blog</h1>
                <p>Stay updated with the latest events, news, and announcements from our vibrant campus community.</p>
            </header>
            <div className="blog-list">
                {blogs.map(blog => (
                    <div key={blog.id} className="blog-card">
                        <div className="blog-image">
                            <img src={blog.image} alt={blog.title} />
                        </div>
                        <div className="blog-content">
                            <h2 className="blog-title">{blog.title}</h2>
                            {/* <p className="blog-date">{blog.date}</p> */}
                            <p className="blog-excerpt">{blog.excerpt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
