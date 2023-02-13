import Button from './common/Button';

export default function Digit(props) {
  const digitArr = [];
  for (let digit = 0; digit <= props.maxDigit; digit++) digitArr.unshift(digit);
  return (
    <div className="digits flex">
      {digitArr.map((digit) => (
        <Button key={digit} style="digit" value={digit} />
      ))}
    </div>
  );
}
