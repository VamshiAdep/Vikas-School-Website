import "./stats-section.css";

const StatsSection = () => {
    return (
        <section className="stats-wrapper">
            <div className="stats-container">

                <div className="stat-card yellow">
                    <h2>30+</h2>
                    <p>Years Of Excellence</p>
                </div>

                <div className="stat-card green">
                    <h2>10+</h2>
                    <p>Programs & Specializations</p>
                </div>

                <div className="stat-card blue">
                    <h2>1.60 Lac+</h2>
                    <p>Learners</p>
                </div>

                <div className="stat-card pink">
                    <h2>3.5L+</h2>
                    <p>Strong Alumni Network</p>
                </div>

            </div>
        </section>
    );
};

export default StatsSection;
