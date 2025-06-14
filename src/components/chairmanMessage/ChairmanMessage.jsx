import BhairiNiskham from '../assets/trusteeImages/BhairiNiskham1.png';
import './chairmanmessage.css';

export const ChairmanMessage = () => {
  return (
    <div className='chairman_main_container'>

      <div className='chairman-container'>
        <div className="Chairman_card">
          <div className="chairmain_img_container">
            <img src={BhairiNiskham} alt="Chenna Devarajam" className="chairman_image" />

          </div>
          <p className='member-name1'>Shri. Bhairi Nishkam Ramaswami</p>
          <p className='member-position1'>Chairman</p>
        </div>
        <div className='chairman_messahe-conatiner'>
          <h5 className='chairman_name' >Chairman message</h5>
          <h3 className='chairman_name1'>Shri. Bhairi Nishkam Ramaswami</h3>
          <p className='chairmain-message-text'>
            Dear Students, Parents, and Well-Wishers,
          </p>
          <p className='chairmain-message-text'>
            It gives me immense pleasure to welcome you to P.E.M High School & Jr. College, a proud institution under the aegis of Telugu Samaj Shikshan Sanstha (TSSS).
          </p>
          <p className='chairmain-message-text'>
            Founded with a vision to impart quality education rooted in values and excellence, our institution has steadily grown into a beacon of learning in Bhiwandi. At PEM, we believe that education is not merely the acquisition of knowledge but the holistic development of character, confidence, and compassion.
          </p>

          <p className='chairmain-message-text'>
            Under the guidance of TSSS and with the support of our dedicated faculty, staff, and parents, we strive to nurture young minds and prepare them for the challenges of the future. Our academic programs, discipline, and cultural values ensure that every student receives a well-rounded education.
          </p>
          <p className='chairmain-message-text'>
            I extend my heartfelt gratitude to all the stakeholders who continue to support our journey. Let us work together to create an environment where children grow with purpose, passion, and pride.
          </p>

          <p className='chairmain-message-text'>
            Warm regards,
            <br />
            Bhairi Nishkam Ramaswami
            <br />
            Chairman, Telugu Samaj Shikshan Sanstha (TSSS)
            <br />
            P.E.M High School & Jr. College
            <br />
          </p>






        </div>
      </div>
    </div>
  )
}
