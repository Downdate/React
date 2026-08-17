import { useState, useEffect, useRef } from "react";
import LifeCycleDemo from "./LifeCycleDemo";

function SampleDemo() {
  const [counter, setCounter] = useState(0);
  const [showComponent, setShowComponent] = useState(true);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    console.log(" Main counter updated - main Counter: ", counter);
  }, [counter]);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>React Hooks</h2>

      <p>Counter : {counter}</p>

      <button
        onClick={() => {
          setShowComponent((prev) => !prev);
        }}
      >
        {showComponent ? "Unmount component" : "Mount Component"}
      </button>

      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        Increament Counter
      </button>

      {showComponent && <LifeCycleDemo />}
    </div>
  );
}

export default SampleDemo;
