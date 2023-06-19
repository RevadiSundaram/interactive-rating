import "./App.css";
import icon from "./images/icon-star.svg";
import { useState } from "react";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import Card from "./Card";

function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <div className="rating-container">
        <img src={icon} alt="icon"></img>
        <h3>How did we do?</h3>
        <p>
          Please let us know how we did with your support <br></br>request. All
          feedback is appreciated to help us<br></br> improve our offering!
        </p>
        <div className="star-number">
          <button onClick={() => setValue(1)}>1</button>
          <button onClick={() => setValue(2)}>2</button>
          <button onClick={() => setValue(3)}>3</button>
          <button onClick={() => setValue(4)}>4</button>
          <button onClick={() => setValue(5)}>5</button>
        </div>
        {console.log(value)}
        <BrowserRouter>
          <Routes>
            <Route path="/Card" exact component={<Card />} />
          </Routes>
        </BrowserRouter>

        <Link to="/Card" state={{ from: { value } }}>
          <button type="button">Submit</button>
        </Link>
      </div>
      {/* <!-- Rating state end -->

  <!-- Thank you state start --> */}
      {/* You selected <!-- Add rating here --> out of 5 */}
      {/* Thank you! We appreciate you taking the time to give a rating. If you ever
      need more support, don’t hesitate to get in touch! */}
      {/* <!-- Thank you state end --> */}
    </div>
  );
}

export default App;
