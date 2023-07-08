import "./RadioBtn.css"

const CheckboxBtn = (props) => {
  return (
    <div>
      <input
        type="radio"
        id={props.id}
        name={props.name}
        value={props.value}
        className="radio-btn--input"
        onChange={props.onChange}
      ></input>
      <label htmlFor={props.id} className="radio-btn--label btn btn--icon btn-trenary">
        <span> {props.label} </span>
      </label>
    </div>
  );
};

export default CheckboxBtn;
