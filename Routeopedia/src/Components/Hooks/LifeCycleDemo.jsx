import { useState } from "react";

function LifeCycleDemo() {
  const [childCounter, setChildCounter] = useState(0);
  return (
    <div>
      <p>Counter : {childCounter}</p>

      <button
        onClick={() => {
          setChildCounter((prev) => prev + 1);
        }}
      >
        Increament Child Counter
      </button>
    </div>
  );
}

export default LifeCycleDemo;
