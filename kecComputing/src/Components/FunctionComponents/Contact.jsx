import React from 'react';

const Contact = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: "0 auto",
        maxWidth: "800px",
        padding: "20px",
        lineHeight: "1.6",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "#2a9d8f",
          fontWeight: "bold",
        }}
      >
        Get in Touch
      </h1>
      <h3
        style={{
          marginBottom: "20px",
          color: "#264653",
        }}
      >
        For queries contact:{" "}
        <a
          href="mailto:sandhiyak.22it@kongu.edu"
          style={{
            color: "#e76f51",
            textDecoration: "none",
            fontWeight: "bold",
          }}
          onMouseOver={(e) => (e.target.style.color = "#d62828")}
          onMouseOut={(e) => (e.target.style.color = "#e76f51")}
        >
          sandhiyak.22it@kongu.edu
        </a>
      </h3>
      <p
        style={{
          fontSize: "18px",
          color: "#555",
          marginBottom: "10px",
        }}
      >
        You can also reach us at:{" "}
        <b style={{ color: "#264653" }}>+91 9876054324</b>
      </p>
      <p
        style={{
          fontSize: "18px",
          color: "#555",
          marginBottom: "30px",
        }}
      >
        Office Address: <br />
        Kongu Engineering College, <br />
        Perundurai, Tamil Nadu, 638060
      </p>

      <label
        style={{
          fontSize: "20px",
          display: "block",
          marginBottom: "10px",
          color: "#2a9d8f",
          fontWeight: "bold",
        }}
      >
        Feedback
      </label>
      <textarea
        name="textarea_name"
        rows="5"
        cols="70"
        placeholder="Enter your feedback"
        style={{
          width: "100%",
          marginBottom: "20px",
          padding: "15px",
          border: "2px solid #2a9d8f",
          borderRadius: "8px",
          resize: "vertical",
          fontSize: "16px",
          backgroundColor: "#f9f9f9",
        }}
      ></textarea>
      <button
        type="submit"
        style={{
          margin: "20px 0",
          backgroundColor: "#264653",
          fontSize: "18px",
          color: "white",
          padding: "12px 30px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#2a9d8f")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#264653")}
      >
        Submit
      </button>

      <div
        style={{
          marginTop: "40px",
          textAlign: "center",
          color: "#264653",
        }}
      >
        <h4>Connect with us on Social Media:</h4>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            margin: "0 10px",
            color: "#4267B2",
            fontSize: "20px",
            textDecoration: "none",
          }}
        >
          Facebook
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            margin: "0 10px",
            color: "#1DA1F2",
            fontSize: "20px",
            textDecoration: "none",
          }}
        >
          Twitter
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            margin: "0 10px",
            color: "#0A66C2",
            fontSize: "20px",
            textDecoration: "none",
          }}
        >
          LinkedIn
        </a>
      </div>

      <footer
        style={{
          marginTop: "50px",
          textAlign: "center",
          padding: "20px",
          borderTop: "1px solid #ddd",
          backgroundColor: "#f4f4f4",
        }}
      >
        <p
          style={{
            fontSize: "14px",
            color: "#777",
          }}
        >
          &copy; 2024 Your Website Name. All rights reserved.
        </p>
        <div>
          <a
            href="/"
            style={{
              margin: "0 10px",
              color: "#007bff",
              textDecoration: "none",
            }}
          >
            Home
          </a>
          |
          <a
            href="/about"
            style={{
              margin: "0 10px",
              color: "#007bff",
              textDecoration: "none",
            }}
          >
            About
          </a>
          |
          <a
            href="/contact"
            style={{
              margin: "0 10px",
              color: "#007bff",
              textDecoration: "none",
            }}
          >
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
