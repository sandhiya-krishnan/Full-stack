import { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [text, setText] = useState("");
  const [state, setState] = useState(0);

  const prevState = useRef();
  const prevText = useRef();

  useEffect(() => {
    prevText.current = text;
  }, [text]);

  useEffect(() => {
    prevState.current = state;
  }, [state]);

  const increment = () => setState(state + 1);
  const decrement = () => setState(state - 1);

  return (
    <section
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1
        style={{
          fontSize: "24px",
          marginBottom: "20px",
          color: "#333",
          textDecoration: "underline",
        }}
      >
        This is an example of useRef
      </h1>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "20px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
      <h2 style={{ fontSize: "20px", color: "#555", marginBottom: "10px" }}>
        My current render is: <span style={{ color: "#007bff" }}>{text}</span>
      </h2>
      <h3 style={{ fontSize: "18px", color: "#777", marginBottom: "30px" }}>
        My previous text is:{" "}
        <span style={{ color: "#ff5722" }}>{prevText.current}</span>
      </h3>

      <h2 style={{ fontSize: "20px", color: "#333", marginBottom: "10px" }}>
        Task
      </h2>
      <button
        onClick={increment}
        style={{
          backgroundColor: "#28a745",
          color: "white",
          padding: "10px 20px",
          marginRight: "10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#218838")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
      >
        Increment
      </button>
      <button
        onClick={decrement}
        style={{
          backgroundColor: "#dc3545",
          color: "white",
          padding: "10px 20px",
          marginLeft: "10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#c82333")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#dc3545")}
      >
        Decrement
      </button>

      <h3 style={{ fontSize: "18px", color: "#555", marginTop: "20px" }}>
        My current task is:{" "}
        <span style={{ color: "#007bff" }}>{state}</span>
      </h3>
      <h3 style={{ fontSize: "18px", color: "#777", marginBottom: "10px" }}>
        My previous task is:{" "}
        <span style={{ color: "#ff5722" }}>{prevState.current}</span>
      </h3>
    </section>
  );
};

export default UseRef;
