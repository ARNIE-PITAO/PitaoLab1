import { useState } from "react";

// all the buttons, row by row
const buttons = [
  "C", "⌫", "÷", "×",
  "7", "8", "9", "−",
  "4", "5", "6", "+",
  "1", "2", "3", "=",
  "0", ".",
];

const operators = ["+", "−", "×", "÷"];

function Calculator() {
  // what is shown on the screen
  const [input, setInput] = useState("");
  // true right after pressing =, so a new number starts fresh
  const [showingResult, setShowingResult] = useState(false);

  // calculates the answer when = is pressed
  function calculate() {
    if (input === "" || input === "Error") {
      return;
    }

    try {
      // eval only understands + - * / so change the symbols first
      let expression = input
        .split("×").join("*")
        .split("÷").join("/")
        .split("−").join("-");

      let result = eval(expression);

      if (result === Infinity || result === -Infinity || isNaN(result)) {
        setInput("Error"); // divide by zero ends up here
      } else {
        // toFixed so 0.1 + 0.2 doesn't show a long number
        setInput(parseFloat(result.toFixed(8)).toString());
      }
    } catch (error) {
      setInput("Error");
    }
    setShowingResult(true);
  }

  // runs every time a button is clicked
  function handleClick(btn) {
    // clear
    if (btn === "C") {
      setInput("");
      setShowingResult(false);
      return;
    }

    // equals
    if (btn === "=") {
      calculate();
      return;
    }

    // backspace
    if (btn === "⌫") {
      if (input === "Error" || showingResult) {
        setInput("");
        setShowingResult(false);
      } else {
        setInput(input.slice(0, -1));
      }
      return;
    }

    // operators
    if (operators.includes(btn)) {
      if (input === "" || input === "Error") {
        return; // nothing to calculate yet
      }
      let lastChar = input[input.length - 1];
      if (operators.includes(lastChar)) {
        // already ended with an operator, so replace it
        setInput(input.slice(0, -1) + btn);
      } else {
        setInput(input + btn);
      }
      setShowingResult(false);
      return;
    }

    // decimal point
    if (btn === ".") {
      if (input === "Error" || showingResult || input === "") {
        setInput("0.");
        setShowingResult(false);
        return;
      }
      // get the number that is being typed right now
      let parts = input.split(/[+−×÷]/);
      let currentNumber = parts[parts.length - 1];
      if (currentNumber.includes(".")) {
        return; // already has a decimal point
      }
      if (currentNumber === "") {
        setInput(input + "0.");
      } else {
        setInput(input + ".");
      }
      return;
    }

    // numbers 0-9
    if (input === "Error" || showingResult) {
      setInput(btn);
      setShowingResult(false);
    } else {
      setInput(input + btn);
    }
  }

  // picks the color of each button
  function getStyle(btn) {
    if (btn === "C") {
      return "bg-red-500 text-white hover:bg-red-600";
    } else if (btn === "=") {
      return "bg-blue-500 text-white hover:bg-blue-600 row-span-2";
    } else if (btn === "0") {
      return "bg-gray-200 hover:bg-gray-300 col-span-2";
    } else if (operators.includes(btn) || btn === "⌫") {
      return "bg-gray-400 text-white hover:bg-gray-500";
    } else {
      return "bg-gray-200 hover:bg-gray-300";
    }
  }

  return (
    <div className="bg-white rounded-lg shadow p-4 w-full max-w-xs">
      {/* display screen */}
      <div className="bg-gray-100 rounded p-4 mb-4 text-right">
        <p className="text-3xl font-bold break-all min-h-10">
          {input === "" ? "0" : input}
        </p>
      </div>

      {/* buttons */}
      <div className="grid grid-cols-4 gap-2">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            className={
              "p-4 rounded text-xl font-medium transition duration-200 active:scale-95 " +
              getStyle(btn)
            }
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
