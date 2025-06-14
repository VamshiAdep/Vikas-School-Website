import React from 'react';
import './RightCapability.css';

const capabilities = [
    {
        title: "Academic Excellence",
        description: "We provide a rigorous and comprehensive curriculum designed to foster critical thinking, analytical reasoning, and innovative problem-solving skills. Our passionate educators personalize learning experiences, inspiring students to excel academically and become lifelong learners prepared for the challenges of tomorrow.",
    },
    {
        title: "Sports and Fitness",
        description: "Our institution boasts state-of-the-art sports facilities alongside expert coaching programs that emphasize physical fitness, discipline, teamwork, and leadership. Students participate in inter-school competitions, promoting healthy habits and camaraderie that extend beyond the classroom.",
    },
    {
        title: "Arts and Culture",
        description: "We nurture creativity and self-expression through a vibrant arts program that includes music, dance, drama, and visual arts. Students engage in workshops, exhibitions, and performances, cultivating confidence and a deep appreciation for diverse cultural traditions.",
    },
    {
        title: "Technology Integration",
        description: "Our classrooms are equipped with cutting-edge digital tools that enhance interactive learning and develop essential digital literacy skills. Students gain hands-on experience in emerging technologies such as coding, robotics, and multimedia production, preparing them for the future’s tech-driven world.",
    },
    {
        title: "Community Engagement",
        description: "We believe in the power of social responsibility and leadership, offering students meaningful opportunities to engage in community service, environmental initiatives, and outreach programs. This fosters empathy, communication skills, and a strong sense of civic duty.",
    },
];

const RightCapability = () => {
    return (
        <section className="capability-section">
            <h2 className="capability-title">Our Right Capabilities</h2>
            <p className="capability-caption">
                At P.E.M. High School and Degree College, we empower our students through diverse capabilities that build a strong foundation for lifelong success.
            </p>

            <div className="capability-grid">
                {capabilities.map((capability, index) => (
                    <div className="capability-card" key={index}>
                        <h3>{capability.title}</h3>
                        <p>{capability.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RightCapability;
