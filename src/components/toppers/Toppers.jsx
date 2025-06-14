import React from 'react';
import pastyearResults from '../assets/schoolImages/pastyearResults.jpg';
import './Toppers.css'; // Make sure to import the CSS

const Toppers = () => {
    return (
        <section className="toppers-section">
            <h1 className="toppers-title">Past Year Results</h1>
            <div className="toppers-image-wrapper">
                <img src={pastyearResults} alt="Past Year Results" className="toppers-image" />
            </div>
        </section>
    );
};

export default Toppers;
