import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  increament,
  decreament,
  decreamentMultiplied,
  increamentMultiplied,
} from "../redux/slice/CounterSlice";

function Counter() {
  const count = useSelector((state) => state.counterStore.count);
  const dispatch = useDispatch();
  const [multiplier, setMultiplier] = useState("1");

  return (
    <div className="m-4 rounded border text-center">
      <h1 className="text-warning">Counter App</h1>

      <hr />

      <span className="badge col-4 offset-4 bg-secondary fs-1 p-3 mb-3">
        {count}
      </span>

      <div className="row pb-2 px-2">
        {/* Basic Counter */}
        <div className="col-6 d-flex">
          <div className="border rounded p-2 h-100 w-100">
            <p className="text-success h3">Basic Counter</p>

            <button
              onClick={() => dispatch(decreament())}
              className="btn btn-danger mx-2 m-2"
            >
              Decreament
            </button>

            <button
              onClick={() => dispatch(increament())}
              className="btn btn-success mx-2"
            >
              Increament
            </button>
          </div>
        </div>

        {/* Multiplier Counter */}
        <div className="col-6 d-flex">
          <div className="border rounded p-2 h-100 w-100">
            <p className="text-success h3">Multiplier Counter</p>

            <input
              type="number"
              placeholder="Multiplier"
              className="form-control m-2"
              value={multiplier}
              onChange={(e) => setMultiplier(Number(e.target.value))}
            />

            <button
              onClick={() => dispatch(decreamentMultiplied(Number(multiplier)))}
              className="btn btn-danger mx-2 m-2"
            >
              Decreament
            </button>

            <button
              onClick={() => dispatch(increamentMultiplied(Number(multiplier)))}
              className="btn btn-success mx-2"
            >
              Increament
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
