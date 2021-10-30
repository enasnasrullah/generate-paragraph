import { useState } from "react";
import data from "./Data";
const App = () => {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);

    if (count <= 0) {
      amount = 1;
    }
    if (count < 15) {
      amount = 14;
    }

    setText(data.slice(0, amount));
  };
  return (
    <div className="container">
      <h1 className="text-center m-5">Generte Your Text</h1>
      <form className=" m-auto" onSubmit={handleSubmit}>
        <div className="form-group d-flex justify-content-center align-items-center ">
          <label className="me-3" htmlFor="Count">
            Paragraph:
          </label>
          <input
            className="form-control"
            id="count"
            type="number"
            value={count}
            onChange={(e) => {
              setCount(e.target.value);
            }}
          />
          <button className="btn">generate</button>
        </div>
      </form>
      <div className="parag m-auto">
        {text.map((parag, index) => {
          return <p key={index}>*{parag}</p>;
        })}
      </div>
    </div>
  );
};

export default App;
