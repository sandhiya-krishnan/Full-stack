import { useState, useMemo } from "react";

const slowFunction = (number) => {
  console.log("Running slow function...");
  for (let i = 0; i < 1000000000; i++) {} // Simulate slow computation
  return number * 2;
};

const UseMemo = () => {
  const [num, setNum] = useState(0);
  const [theme, setTheme] = useState(true);

  const darklight = useMemo(
    () => ({
      backgroundColor: theme ? "black" : "white",
      color: theme ? "white" : "black",
    }),
    [theme]
  );

  const doublingNumber = useMemo(() => slowFunction(num), [num]);

  return (
    <section>
      <h1>This is Memo</h1>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value) || 0)}
      />
      <button onClick={() => setTheme((prevTheme) => !prevTheme)}>
        Toggle Theme
      </button>
      <h2 style={darklight}>Result: {doublingNumber}</h2>
    </section>
  );
};

export default UseMemo;
