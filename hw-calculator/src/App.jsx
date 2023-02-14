import { useEffect, useState } from "react";
import Digit from "./components/Digit";
import Modifier from "./components/Modifier";
import Operation from "./components/Operation";

export default function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [clickedValue, setClickedValue] = useState(0);
  const [isLimit, setIsLimit] = useState(false);

  useEffect(() => {
    if (isLimit) alert("3자리 수 까지만 입력가능.");
    else {
      setInputValue((inputValue) => inputValue * 10 + clickedValue);
      setIsLimit((islLimit) => inputValue >= 1000);
    }
  }, [clickedValue]);

  return (
    <div className="App">
      <div className="calculator">
        <h1 id="total">{inputValue}</h1>
        <Digit maxDigit="9" onHandleClick={setClickedValue} flag={isLimit} />
        <Modifier role="AC" />
        <Operation />
      </div>
    </div>
  );
}
