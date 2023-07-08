import { useState } from "react";
import Card from "./components/UI/Card";
import starIcon from "./assets/icon-star.svg";
import illustrationThanks from "./assets/illustration-thank-you.svg";
import FormRating from "./components/FormRating/FormRating";
import "./App.css";

function App() {
  const [isRated, setIsRated] = useState(0);

  return (
    <>
      {/* card rating form */}
      <Card
        className={isRated === 0 ? "card-rating card-rating__form" : "card-rating card-rating__form hidden"}
      >
        <figure>
          <img src={starIcon} className="star-icon" alt="star"></img>
        </figure>

        <div className="card-rating__content">
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>

        <FormRating onRatingData={setIsRated} />
      </Card>

      {/* card rating result */}
      <Card className={isRated > 0 ? "card-rating card-rating__result show" : "card- rating card-rating__result"}>
        <figure>
          <img src={illustrationThanks} alt="thank you"></img>
        </figure>
        <div className="card-rating__info">You selected {isRated} out of 5</div>

        <div className="card-rating__content">
          <h1>Thank you!</h1>
          <p>
            We appreciate you taking the time to give a rating. if you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      </Card>
    </>
  );
}

export default App;
