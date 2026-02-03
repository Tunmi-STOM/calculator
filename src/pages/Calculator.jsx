import { useEffect, useState } from "react";
import Display from "../components/Display";
import Keypad from "../components/Keypad";
import History from "../components/History";
import { calculateExpression, factorial } from "../utils/calculatorEngine";

function Calculator({ goHome }) {
  const [input, setInput] = useState("");
  const [tokens, setTokens] = useState([]);
  const [history, setHistory] = useState([]);

  const add = (val) => {
    setInput((p) => p + val);
    setTokens((p) => [...p, val]);
  };

  const clear = () => {
    setInput("");
    setTokens([]);
  };

  const backspace = () => {
    setInput((p) => p.slice(0, -1));
    setTokens((p) => p.slice(0, -1));
  };

  const equals = () => {
    try {
      const result = calculateExpression(tokens);
      setHistory([{ exp: input, res: result }, ...history]);
      setInput(result.toString());
      setTokens([result.toString()]);
    } catch {
      setInput("Error");
    }
  };

  const doFactorial = () => {
    const n = Number(input);
    const res = factorial(n);
    if (isNaN(res)) setInput("Error");
    else setInput(res.toString());
  };

  // Keyboard support
  useEffect(() => {
    const handler = (e) => {
      if ("0123456789+-*/.^".includes(e.key)) add(e.key);
      if (e.key === "Enter") equals();
      if (e.key === "Backspace") backspace();
      if (e.key === "Escape") clear();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const applyFactorialToLastNumber = () => {
  // match the LAST number in the expression
  const match = input.match(/(\d+)(?!.*\d)/);

  if (!match) {
    setInput("Error");
    return;
  }

  const number = Number(match[0]);
  const fact = factorial(number);

  if (isNaN(fact)) {
    setInput("Error");
    return;
  }

  // replace only the last number with its factorial
  const newInput =
    input.slice(0, match.index) + fact.toString();

  setInput(newInput);

  // also update tokens correctly
  setTokens((prev) => {
    const copy = [...prev];
    copy.splice(match.index, match[0].length, ...fact.toString());
    return copy;
  });
};


  return (
    <div className="calculator-shell">
  <header className="calc-header">
    <button className="back-btn" onClick={goHome}>←</button>
    <h2>Calculator</h2>
  </header>

  <Display value={input} />
  <Keypad
    add={add}
    clear={clear}
    backspace={backspace}
    equals={equals}
    factorial={applyFactorialToLastNumber}
  />
  <History history={history} />
</div>

  );
}

export default Calculator;
