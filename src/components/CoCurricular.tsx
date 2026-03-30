import "./styles/Career.css";

const CoCurricular = () => {
  return (
    <div className="career-section section-container" id="cocurricular">
      <div className="career-container">
        <h2>
          Co-curricular <span>Activities</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>
                  <a href="https://docs.google.com/document/d/1MPp19t0wv-XA51t6JVqBHgQdrN5W9KH3/edit" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
                    Community Development Project — Jal Jeevan Mission 🔗
                  </a>
                </h4>
                <h5>August 2024</h5>
              </div>
            </div>
            <p>
              Community Development Project (CDP) on rural water supply development. Involved in surveys, awareness campaigns, infrastructure support, and sustainability activities to enhance safe water access. 
              <br />
              Registration No: 12316175, Lovely Professional University.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoCurricular;
