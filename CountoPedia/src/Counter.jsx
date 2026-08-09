function Counter() {
  let count = 0;
  return (
    <div className="row text-white container">
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button className="btn btn-success m-2">Increment (+1)</button>
      <button className="btn btn-danger m-2">Decrement (-1)</button>
    </div>
  );
}

export default Counter;
