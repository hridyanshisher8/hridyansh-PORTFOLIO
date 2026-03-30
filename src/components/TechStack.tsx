const TechStack = () => {
  return (
    <div className="techstack" id="skills">
      <div style={{ textAlign: "center", position: "relative", zIndex: 10, marginTop: "100px", marginBottom: "20px", display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ background: "rgba(255,255,255,0.05)", padding: "20px", borderRadius: "10px", maxWidth: "800px", margin: "0 auto", width: "100%" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "10px", color: "#fff" }}>Skills</h3>
          <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "1.1rem", lineHeight: "1.8", fontWeight: "300" }}>
            <strong>Languages:</strong> C++, Python, C, Java <br />
            <strong>Libraries:</strong> Numpy, Pandas, Matplotlib, Scikit-Learn, Seaborn <br />
            <strong>Tools/Platforms:</strong> MySQL, MongoDB, Excel, Power BI, Jupyter Notebook <br />
            <strong>Soft Skills:</strong> Adaptability, Emotional Intelligence, Time Management, Perfectionism
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
