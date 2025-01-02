const About = (props) => {
  return (
    <section
      style={{
        padding: "20px",
        fontFamily: "'Arial', sans-serif",
        background: "linear-gradient(to right, #e3ffe7, #d9e7ff)",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        maxWidth: "500px",
        margin: "40px auto",
        textAlign: "center",
        color: "#333",
      }}
    >
      <h1 style={{ color: "#2a9d8f", marginBottom: "10px" }}>
        This is my About Page
      </h1>
      <h2 style={{ color: "#264653", marginBottom: "20px" }}>
        Learning Props
      </h2>
      {/* eslint-disable-next-line react/prop-types */}
      <h2
        style={{
          fontSize: "20px",
          color: "#e76f51",
          marginBottom: "15px",
          fontWeight: "bold",
        }}
      >
        I am studying in {props.college} College
      </h2>
      <h3
        style={{
          fontSize: "18px",
          color: "#6d6875",
          marginBottom: "10px",
        }}
      >
        Other Colleges: {props.clg1}, {props.clg2}
      </h3>
    </section>
  );
};

export default About;
