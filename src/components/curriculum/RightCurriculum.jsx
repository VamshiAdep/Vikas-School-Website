import React from 'react';
import './RightCurriculum.css';

const RightCurriculum = () => {
  return (
    <section className="curriculum-section">
      <h1 className="curriculum-title">
        Curriculum Overview - P.E.M. High School & Degree College
      </h1>

      {/* New Primary School Curriculum Block */}
      <div className="curriculum-block">
        <h2 className="curriculum-subtitle highschool">Primary School Curriculum</h2>
        <p>
          The Primary School curriculum at P.E.M. High School is designed to develop basic literacy, numeracy, and social skills
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
          The High School curriculum at P.E.M. High School is designed to provide a strong foundation in all major subjects
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

      <div className="curriculum-block">
        <h2 className="curriculum-subtitle degreecollege">Degree College Curriculum</h2>
        <p>
          P.E.M. Degree College offers undergraduate courses with a focus on academic excellence and holistic development.
          The curriculum is aligned with Mumbai University standards and prepares students for professional and higher studies.
        </p>

        <div className="degree-section">
          <h3 className="degree-subtitle">Bachelor of Science (BSc)</h3>
          <ul className="curriculum-list">
            <li>Chemistry</li>
            {/* <li>Mathematics</li> */}
            {/* <li>Computer Science</li> */}
            <li>Zoology</li>
            <li>Botany</li>
          </ul>
        </div>

        <div className="degree-section">
          <h3 className="degree-subtitle">Bachelor of Commerce (BCom)</h3>
          <ul className="curriculum-list">
            <li>Financial Accounting</li>
            <li>Business Economics</li>
            <li>Business Communication</li>
          </ul>
        </div>

        <div className="degree-section">
          <h3 className="degree-subtitle">Bachelor of Arts (BA)</h3>
          <ul className="curriculum-list">
            <li>History</li>
            <li>Economics</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RightCurriculum;
