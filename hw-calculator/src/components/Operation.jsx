import Button from './common/Button';

export default function Operation() {
  const operationArr = ['/', 'X', '-', '+', '='];
  return (
    <div className="operations subgrid">
      {operationArr.map((operation, idx) => (
        <Button key={idx} style="operation" value={operation} />
      ))}
    </div>
  );
}
