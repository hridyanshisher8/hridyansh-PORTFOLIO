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
            <div className="career-info-in" style={{ width: "100%" }}>
              <div className="career-role">
                <h4>Community Development Project — Jal Jeevan Mission 🔗</h4>
                <h5>August 2024</h5>
              </div>
            </div>
            <p style={{ width: "100%", marginTop: "20px" }}>
              Participated in a rural water supply development initiative involving surveys, awareness campaigns, infrastructure support, local training and sustainability activities to enhance safe water access and community well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoCurricular;
