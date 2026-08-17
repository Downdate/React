import { useState, useEffect, useRef } from "react";

function LifeCycleDemo() {
  const [childCounter, setChildCounter] = useState(0);
  const isFirstRender = useRef(true);
  const prevCount = useRef();

  useEffect(() => {
    console.log(" ✅ Component Mount");

    return () => {
      console.log(" ❌ Component Unmount");
    };
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    console.log(" Child counter updated - Child Counter: ", childCounter);

    prevCount.current = childCounter;
  }, [childCounter]);

  return (
    <div>
      <p>
        Counter : {childCounter} -- previous counter: {prevCount.current}
      </p>

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
