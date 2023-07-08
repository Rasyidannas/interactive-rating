import "./Button.css";

const Button = (props) => {
  return (
    <button type={props.type} className={`btn ${props.className}`}>
      <img src={props.src} alt={props.alt}></img>
      {props.text}
    </button>
  );
};

export default Button;