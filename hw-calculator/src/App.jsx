import { useState } from 'react';
import Digit from './components/Digit';
import Modifier from './components/Modifier';
import Operation from './components/Operation';

export default function App() {
  const [firstNumber, setfirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  return (
    <div className="App">
      <div className="calculator">
        <h1 id="total">{inputValue}</h1>
        <Digit maxDigit="9" />
        <Modifier role="AC" />
        <Operation />
      </div>
    </div>
  );
}
