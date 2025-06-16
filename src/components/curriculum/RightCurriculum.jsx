import React from 'react';
import './RightCurriculum.css';

const RightCurriculum = () => {
  return (
    <section className="curriculum-section">
      <h1 className="curriculum-title">
        Curriculum Overview - Vikas English Medium School
      </h1>

      {/* New Primary School Curriculum Block */}
      <div className="curriculum-block">
        <h2 className="curriculum-subtitle highschool">Primary School Curriculum</h2>
        <p>
          The Primary School curriculum at Vikas English Medium School is designed to develop basic literacy, numeracy, and social skills
          in young learners. It fosters curiosity and a love of learning, following the Maharashtra State Board guidelines.
        </p>
        <ul className="curriculum-list">
          <li>English (First Language)</li>
          <li>Hindi (Second Language)</li>
          <li>Marathi (Third Language)</li>
          <li>Mathematics</li>
          {/* <li>Environmental Studies</li> */}
          <li>General Science</li>
          <li>Social Science</li>
          <li>Physical Education and Health</li>
          <li>Computer Literacy</li>
        </ul>
      </div>

      <div className="curriculum-block">
        <h2 className="curriculum-subtitle highschool">High School Curriculum (SSC)</h2>
        <p>
          The High School curriculum at Vikas English Medium School is designed to provide a strong foundation in all major subjects
          while preparing students for their SSC examinations. The syllabus follows the Maharashtra State Board guidelines
          and emphasizes both theoretical knowledge and practical skills.
        </p>
        <ul className="curriculum-list">
          <li>English (First Language)</li>
          <li>Hindi (Second Language )</li>
          <li>Marathi (Third Language )</li>
          <li>Mathematics</li>
          <li>Science (Physics, Chemistry, Biology)</li>
          <li>Social Science (History, Geography, Civics)</li>
          {/* <li>Information Technology / Computer Science</li> */}
          <li>Physical Education and Health</li>
          {/* <li>Environmental Studies</li>
          <li>Optional Vocational Subjects</li> */}
        </ul>
      </div>
    </section>
  );
};

export default RightCurriculum;
