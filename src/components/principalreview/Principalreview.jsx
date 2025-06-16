import React from 'react';
import './pincipalreview.css';
import jagdeshHM from '../assets/priencpalImages/jagdeshHM.png'


const Principalreview = () => {
    const Principals = [
        {
            name: "Mr. Jagdish Desale",
            positon: "Principal-primary Section",
            message: "My mission is to inspire and guide young minds to achieve their fullest potential.",
            image: jagdeshHM,
        },
    ];

    return (
        <div className='main-container'>
            <section className='principals-section'>
                <h1 className='section-titile'>Meet Our Principal</h1>
                <div className="card-container">
                    {Principals.map((principal, index) => (
                        <div key={index} className="principal-card">
                            <div className='profile-pic'>
                                <img src={principal.image} alt={principal.name} />
                            </div>
                            <h2 className='name'>{principal.name}</h2>
                            <p className='position'>{principal.positon}</p>
                            <p className='message'>{principal.message}</p>
                        </div>
                    ))}
                </div>
            </section>

        </div>

    )
}

export default Principalreview;
