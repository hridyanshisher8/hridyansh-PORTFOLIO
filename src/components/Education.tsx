import "./styles/Career.css";

const Education = () => {
  return (
    <div className="career-section section-container" id="education">
      <div className="career-container">
        <h2>
          My <span>Education</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology</h4>
                <h5>Lovely Professional University, Punjab, India</h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
            <p>
              Computer Science and Engineering<br />
              CGPA: 7.9
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate</h4>
                <h5>KC International School, Paloura, Jammu</h5>
              </div>
              <h3>Mar 2022</h3>
            </div>
            <p>
              Percentage: 96.4
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Matriculation</h4>
                <h5>KC International School, Paloura, Jammu</h5>
              </div>
              <h3>Mar 2020</h3>
            </div>
            <p>
              Percentage: 93.4
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
