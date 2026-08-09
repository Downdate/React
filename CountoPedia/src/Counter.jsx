import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  function increment() {
    setCount(function (prev) {
      return prev + 1;
    });
  }

  function decrement() {
    setCount(function (prev) {
      return prev - 1;
    });
  }

  return (
    <div className="row text-white container">
      <h1>Counter</h1>
      <h5>Count: {count}</h5>
      <button className="btn btn-success m-2" onClick={increment}>
        Increment (+1)
      </button>
      <button className="btn btn-danger m-2" onClick={decrement}>
        Decrement (-1)
      </button>
    </div>
  );
}

export default Counter;
