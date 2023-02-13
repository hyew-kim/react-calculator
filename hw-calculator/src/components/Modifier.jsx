import Button from './common/Button';

export default function Modifier(props) {
  return (
    <div className="modifiers subgrid">
      <Button style="modifier" value={props.role} />
    </div>
  );
}
