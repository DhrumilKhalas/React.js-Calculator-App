import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {

    if( (ops.includes(value) && calc === "") || (ops.includes(value) && ops.includes(calc.slice(-1))) ){
      return;
    }

    setCalc(calc + value);

    if(!ops.includes(value)){
      setResult(eval(calc + value).toString())
    }

  };

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          key={i}
          className="digitcolor"
          onClick={() => updateCalc(i.toString())}
        >
          {i}
        </button>
      );
    }
    return digits;
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  }
 
  const deleteLast = () => {
    if(calc === ""){
      return;
    }
    const value = calc.slice(0, -1)
    setCalc(value);
    setResult(value)
    setResult("");
  }

  return (
    <>
      <div className="App">
        <div className="calculator">
          <div className="display">
            {result ? <span className="calcspan1">({result})</span> : ""}
            <span className="calcspan2">{calc || "0"}</span>
          </div>

          <div className="operators">
            <button onClick={() => updateCalc("/")}>/</button>
            <button onClick={() => updateCalc("*")}>*</button>
            <button onClick={() => updateCalc("+")}>+</button>
            <button onClick={() => updateCalc("-")}>-</button>
            <button onClick={deleteLast}>DEL</button>
          </div>

          <div className="digits">
            {createDigits()}
            <button className="digitcolor" onClick={() => updateCalc("0")}>
              0
            </button>
            <button className="digitcolor" onClick={() => updateCalc(".")}>
              .
            </button>
            <button className="equalcolor" onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
