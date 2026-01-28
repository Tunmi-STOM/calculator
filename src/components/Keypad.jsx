function Keypad({ add, clear, backspace, equals, factorial }) {
  const keys = [
    "7","8","9","/",
    "4","5","6","*",
    "1","2","3","-",
    "0",".","^","+"
  ];

  return (
    <div className="keys">
      <button onClick={clear}>C</button>
      <button onClick={backspace}>⌫</button>
      <button onClick={factorial}>!</button>
      <button onClick={equals}>=</button>

      {keys.map((k) => (
        <button key={k} onClick={() => add(k)}>{k}</button>
      ))}
    </div>
  );
}
export default Keypad;
