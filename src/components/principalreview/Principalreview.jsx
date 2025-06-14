import React from 'react';
import './pincipalreview.css';
import SecondaryHM from '../assets/priencpalImages/SecondaryHM.png'
import More from '../assets/priencpalImages/More.png'
import jagdeshHM from '../assets/priencpalImages/jagdeshHM.png'


const Principalreview = () => {
    const Principals = [
        {
            name: "Mr. Jagdish Desale",
            positon: "Principal-primary Section",
            message: "My mission is to inspire and guide young minds to achieve their fullest potential.",
            image: jagdeshHM,
        },
        {
            name: "MRS. Vidya Ghorpade",
            positon: "Principal-Secondary Section",
            message: "We cannot always prepare a better future for our children but we can always prepare our children for a better future.",
            image: SecondaryHM,
        },
        {
            name: "Mr. Sanjay More",
            positon: "College principal",
            message: "Committed to academic excellence and holistic development of every student.",
            image: More,
        },

    ];





    return (
        <div className='main-container'>
            <section className='principals-section'>
                <h1 className='section-titile'>Meet Our Principals</h1>
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
