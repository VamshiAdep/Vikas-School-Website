import React from 'react';
import './OurManagment.css';
import KundenPurushottam from '../assets/trusteeImages/KundenPurushottam1.png';
import BhairiNiskham from '../assets/trusteeImages/BhairiNiskham1.png';
import BhairiGangadhar from '../assets/trusteeImages/BhairiGangadhar1.png';
import RamaswamiRamayya from '../assets/trusteeImages/RamaswamiRamayya1.png';
import GajengiKrishna from '../assets/trusteeImages/GajengiKrishna1.png';
import KalyadapuBhumesh from '../assets/trusteeImages/KalyadapuBhumesh1.png';
import GandurLaxminarayana from '../assets/trusteeImages/GandurLaxminarayana1.png';
import ManchalaShankar from '../assets/trusteeImages/ManchalaShankar1.png';
import KodamRajaiah from '../assets/trusteeImages/KodamRajaiah1.png';
import BolliSatyanarayan from '../assets/trusteeImages/BolliSatyanarayan1.png';
import ChennaDevarajam from '../assets/trusteeImages/ChennaDevarajam1.png';
import SamalRavindra from '../assets/trusteeImages/SamalRavindra1.png';
import PamuManohar from '../assets/trusteeImages/PamuManohar1.png';
import tributeImage from '../assets/trusteeImages/tributeImage.png';
import MamidalaMallesham from '../assets/trusteeImages/MamidalaMallesham.png';
import AnkamShankar from '../assets/trusteeImages/AnkamShankar.png';
import LaxmanBallaya from '../assets/trusteeImages/LaxmanBallaya.png';
import AmbadasBuchayya from '../assets/trusteeImages/AmbadasBuchayya.png';

const OurManagement = () => {
    return (
        <div className="our-management">
            <div className="our-management__wrapper">
                <h1 className="our-management__title">Our Management</h1>

                {/* Tribute Committee */}
                <section className="committee">
                    <h2 className="committee__title">Tribute To</h2>
                    <div className="committee__member-container">
                        <div className="committee__member_card">
                            <div className="committee__member">
                                <img src={LaxmanBallaya} alt="Laxman Ballaya" className="committee__image" />
                            </div>
                            <p className='member-name'>Late. Laxman Ballaya Bhairi</p>
                            <p className='member-position'>Chief Trustee</p>
                        </div>
                        <div className="committee__member_card">
                            <div className="committee__member">
                                <img src={AmbadasBuchayya} alt="Ambadas Buchayya" className="committee__image" />
                            </div>
                            <p className='member-name'>Late. Ambadas Buchayya Dasi</p>
                            <p className='member-position'>Trustee</p>
                        </div>
                        <div className="committee__member_card">
                            <div className="committee__member">
                                <img src={MamidalaMallesham} alt="Mamidala Mallesham" className="committee__image" />
                            </div>
                            <p className='member-name'>Late. Mamidala Mallesham Lingaiah</p>
                            <p className='member-position'>Member</p>
                        </div>
                        <div className="committee__member_card">
                            <div className="committee__member">
                                <img src={AnkamShankar} alt="Ankam Shankar" className="committee__image" />
                            </div>
                            <p className='member-name'>Late. Ankam Shankar Veeraiah</p>
                            <p className='member-position'>Vice President</p>
                        </div>
                    </div>
                </section>

                {/* Trustee Committee */}
                <section className="committee">
                    <h2 className="committee__title">Trustee Committee</h2>
                    <div className="committee__grid">
                        <div className="committee__member-container">
                            <div className="committee__member_card">
                                <div className="committee__member">
                                    <img src={RamaswamiRamayya} alt="Ramaswami Ramayya" className="committee__image" />
                                </div>
                                <p className='member-name'>Shri. Bhairi Ramswami Ramaiah</p>
                                <p className='member-position'>Chief Trustee</p>
                            </div>
                            <div className="committee__member_card">
                                <div className="committee__member">
                                    <img src={GajengiKrishna} alt="Gajengi Krishna" className="committee__image" />
                                </div>
                                <p className='member-name'>Shri. Ganjengi Krishna Rajaiah</p>
                                <p className='member-position'>Trustee</p>
                            </div>
                            <div className="committee__member_card">
                                <div className="committee__member">
                                    <img src={PamuManohar} alt="Pamu Manohar" className="committee__image" />
                                </div>
                                <p className='member-name'>Shri. Dr. Pamu Manohar Somayya</p>
                                <p className='member-position'>Trustee</p>
                            </div>
                        </div>
                        <div className="committee__member-container">
                            <div className="committee__member_card">
                                <div className="committee__member">
                                    <img src={KundenPurushottam} alt="Kunden Purushottam" className="committee__image" />
                                </div>
                                <p className='member-name'>Shri. Kunden Purushottam Bhumaiah</p>
                                <p className='member-position'>Trustee</p>
                            </div>
                            <div className="committee__member_card">
                                <div className="committee__member">
                                    <img src={KalyadapuBhumesh} alt="Kalyadapu Bhumesh" className="committee__image" />
                                </div>
                                <p className='member-name'>Shri. Kalyadapu Bhumesh Rajaiah</p>
                                <p className='member-position'>Trustee</p>
                            </div>
                            <div className="committee__member_card">
                                <div className="committee__member">
                                    <img src={GandurLaxminarayana} alt="Gandur Laxminarayana" className="committee__image" />
                                </div>
                                <p className='member-name'>Shri. Gandur Laxminarayana Ramulu</p>
                                <p className='member-position'>Chief Trustee</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Management Committee */}
                <section className="committee">
                    <h2 className="committee__title">Management Committee</h2>
                    <div className="committee__grid">
                        <div className="committee__member-container">
                            <div className="committee__member_card">
                                <div className="committee__member">
                                    <img src={KalyadapuBhumesh} alt="Kalyadapu Bhumesh" className="committee__image" />
                                </div>
                                <p className='member-name'>Shri. Kalyadapu Bhumesh Rajaiah</p>
                                <p className='member-position'>President</p>
                            </div>
                            <div className="committee__member_card">
                                <div className="committee__member">
                                    <img src={BolliSatyanarayan} alt="Bolli Satyanarayan" className="committee__image" />
                                </div>
                                <p className='member-name'>Shri. Dr. Bolli Satyanarayana Narshaiah</p>
                                <p className='member-position'>Treasurer</p>
                            </div>
                            <div className="committee__member_card">
                                <div className="committee__member">
                                    <img src={ManchalaShankar} alt="Manchala Shankar" className="committee__image" />
                                </div>
                                <p className='member-name'>Shri. Manchala Shankar Mallesham</p>
                                <p className='member-position'>Secretary</p>
                            </div>

                        </div>
                        <div className="committee__member-container">
                            <div className="committee__member_card">
                                <div className="committee__member">
                                    <img src={KodamRajaiah} alt="Kodam Rajaiah" className="committee__image" />
                                </div>
                                <p className='member-name'>Shri. Kodam Rajaiah Nampelli</p>
                                <p className='member-position'>Jt. Secretary</p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* School Committee */}
                <section className="committee">
                    <h2 className="committee__title">School Committee</h2>
                    <div className="committee__grid">
                        <div className="committee__member-container">
                            <div className="committee__member_card">
                                <div className="committee__member">
                                    <img src={BhairiNiskham} alt="Bhairi Niskham" className="committee__image" />
                                </div>
                                <p className='member-name'>Shri. Bhairi Nishkam Ramaswami</p>
                                <p className='member-position'>Chairman</p>
                            </div>
                            <div className="committee__member_card">
                                <div className="committee__member">
                                    <img src={ChennaDevarajam} alt="Chenna Devarajam" className="committee__image" />
                                </div>
                                <p className='member-name'>Shri. Chenna Devarajam Hanumanthu</p>
                                <p className='member-position'>Vice Chairman</p>
                            </div>
                            <div className="committee__member_card">
                                <div className="committee__member committee__member--hide-mobile">
                                    <img src={SamalRavindra} alt="Samal Ravindra" className="committee__image" />
                                </div>
                                <p className='member-name'>Shri. Samal Ravindra Veeramallu</p>
                                <p className='member-position'>Secretary</p>
                            </div>
                        </div>
                        <div className="committee__member-container">

                            <div className="committee__member_card">
                                <div className="committee__member">
                                    <img src={BhairiGangadhar} alt="Bhairi Gangadhar" className="committee__image" />
                                </div>
                                <p className='member-name'>Shri. Bhairi Gangadhar Laxman</p>
                                <p className='member-position'>Member</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default OurManagement;
