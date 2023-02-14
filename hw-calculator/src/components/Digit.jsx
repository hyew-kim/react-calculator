import Button from "./common/Button";

export default function Digit(props) {
  const digitArr = [];
  for (let digit = 0; digit <= props.maxDigit; digit++) digitArr.unshift(digit);

  function updateClickedValue(clickedValue) {
    if (isNaN(clickedValue) || props.flag) return false;
    props.onHandleClick(clickedValue);
  }

  return (
    <div
      className="digits flex"
      onClick={(evt) => updateClickedValue(Number(evt.target.innerText))}
    >
      {digitArr.map((digit) => (
        <Button key={digit} style="digit" value={digit} />
      ))}
    </div>
  );
}
