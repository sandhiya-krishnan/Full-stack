import React from 'react';

const Contact = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "0 auto", maxWidth: "800px", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px", color: "#333" }}>
        Get in Touch
      </h1>
      <h3 style={{ marginBottom: "20px", color: "#555" }}>
        For queries contact: <a href="mailto:sandhiyak.22it@kongu.edu" style={{ color: "#007bff" }}>sandhiyak.22it@kongu.edu</a>
      </h3>
      <p style={{ fontSize: "18px", color: "#555" }}>
        You can also reach us at: <b>+91 9876054324</b>
      </p>
      <p style={{ fontSize: "18px", color: "#555", marginBottom: "30px" }}>
        Office Address: <br />
        Kongu Engineering College, <br />
        Perundurai, Tamil Nadu, 638060
      </p>

      <label style={{ fontSize: "20px", display: "block", marginBottom: "10px" }}>Feedback</label>
      <textarea
        name="textarea_name"
        rows="5"
        cols="70"
        placeholder="Enter your feedback"
        style={{
          width: "100%",
          marginBottom: "20px",
          padding: "15px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          resize: "vertical",
          fontSize: "16px",
        }}
      ></textarea>
      <button
        type="submit"
        style={{
          margin: "20px 0",
          backgroundColor: "#007bff",
          fontSize: "18px",
          color: "white",
          padding: "10px 25px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        Submit
      </button>

      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <h4>Connect with us on Social Media:</h4>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px", color: "#4267B2", fontSize: "24px" }}>Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px", color: "#1DA1F2", fontSize: "24px" }}>Twitter</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px", color: "#0A66C2", fontSize: "24px" }}>LinkedIn</a>
      </div>

      <footer style={{ marginTop: "50px", textAlign: "center", padding: "20px", borderTop: "1px solid #ddd" }}>
        <p style={{ fontSize: "14px", color: "#777" }}>
          &copy; 2024 Your Website Name. All rights reserved.
        </p>
        <div>
          <a href="/" style={{ margin: "0 10px", color: "#007bff" }}>Home</a> |
          <a href="/about" style={{ margin: "0 10px", color: "#007bff" }}>About</a> |
          <a href="/contact" style={{ margin: "0 10px", color: "#007bff" }}>Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
