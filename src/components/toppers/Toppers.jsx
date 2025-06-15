import React from 'react';
import pastyearResults from '../assets/schoolImages/pastyearResults.jpg';
import './Toppers.css';

const Toppers = () => {
    return (
        <section className="toppers-section">
            {/* Clear background image */}
            <div className="toppers-bg" />

            <h1 className="toppers-title">Past Year Results</h1>
            <div className="toppers-image-wrapper">
                <img src={pastyearResults} alt="Past Year Results" className="toppers-image" />
            </div>
        </section>
    );
};

export default Toppers;
