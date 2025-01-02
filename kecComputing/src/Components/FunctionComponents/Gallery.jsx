import { useState } from "react";

const Gallery = () => {
  const [counter, setCount] = useState(0);

  return (
    <section
      style={{
        padding: "20px",
        fontFamily: "'Arial', sans-serif",
        background: "linear-gradient(to right, #ffecd2, #fcb69f)",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        maxWidth: "400px",
        margin: "40px auto",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#333", marginBottom: "10px" }}>
        This is my Gallery Page
      </h1>
      <h2 style={{ color: "#555", marginBottom: "20px" }}>
        Learning State Concept
      </h2>
      <h3
        style={{
          fontSize: "20px",
          color: "#444",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        The state of my variable counter is{" "}
        <span style={{ color: "#ff6b6b" }}>{counter}</span>
      </h3>
      <button
        onMouseOver={() => {
          setCount(counter + 1);
        }}
        style={{
          margin: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          color: "#fff",
          background: "#4CAF50",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "0.3s",
        }}
      >
        Increment
      </button>
      <button
        onDoubleClick={() => {
          setCount(counter - 1);
        }}
        style={{
          margin: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          color: "#fff",
          background: "#f44336",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "0.3s",
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
        style={{
          margin: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          color: "#fff",
          background: "#2196F3",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "0.3s",
        }}
      >
        Reset
      </button>
    </section>
  );
};

export default Gallery;
