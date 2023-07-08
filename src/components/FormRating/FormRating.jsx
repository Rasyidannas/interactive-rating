import RadioBtn from "../UI/RadioBtn";
import Button from "../UI/Button";
import "./FormRating.css";
import { useState } from "react";

const FormRating = (props) => {
  const [numberRating, setNumberRating] = useState(0);

  //inout handler
  const numberRatingHandler = (event) => {
    setNumberRating(event.target.value);
  };

  //this is for submit form
  const submitRatingHandler = (event) => {
    event.preventDefault();

    if (numberRating !== 0) {
      return props.onRatingData(numberRating);
    }
  };

  return (
    <form className="rating-form" onSubmit={submitRatingHandler}>
      <div className="rating-numbers">
        <RadioBtn
          id="1"
          name="number"
          value="1"
          label="1"
          onChange={numberRatingHandler}
        />
        <RadioBtn
          id="2"
          name="number"
          value="2"
          label="2"
          onChange={numberRatingHandler}
        />
        <RadioBtn
          id="3"
          name="number"
          value="3"
          label="3"
          onChange={numberRatingHandler}
        />
        <RadioBtn
          id="4"
          name="number"
          value="4"
          label="4"
          onChange={numberRatingHandler}
        />
        <RadioBtn
          id="5"
          name="number"
          value="5"
          label="5"
          onChange={numberRatingHandler}
        />
      </div>
      <Button type="submit" text="SUBMIT" className="btn-primary"></Button>
    </form>
  );
};

export default FormRating;
