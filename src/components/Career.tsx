import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>From Data to Insights</h4>
                <h5>Lovely Professional University</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Implemented SQL, Excel and Python to clean, transform and structure datasets ensuring high quality inputs for analysis and modelling. Built and evaluated a regression based Bengaluru house price prediction model, performing feature engineering and validating accuracy through data driven metrics. Crafted interactive Power BI dashboard to convert analytical outputs into clear, insight focused visual stories supporting data driven decision making.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bengaluru House Price Prediction</h4>
                <h5>Machine Learning Project</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built a predictive system that estimates residential property prices in Bengaluru based on location, area, number of bedrooms and other housing features. Utilized data cleaning pipelines, feature engineering (BHK normalization, location clustering), and machine learning algorithms such as Linear Regression / Random Forest. Achieved reliable price predictions with an interpretable model showing strong generalization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Coffee Shop Sales Analysis</h4>
                <h5>Data Analysis Project</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Analyzed daily, weekly, and monthly sales patterns to understand revenue trends, customer behaviour and product performance across different store locations. Processed and transformed transactional data using Excel/Python, applied pivot tables, aggregations, visualizations to uncover insights like peak hours, top selling items and category wise contribution. Delivered actionable insights supporting decisions on staffing, inventory planning and promotional strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
