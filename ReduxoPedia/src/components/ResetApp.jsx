import { useDispatch } from "react-redux";
import { counterReset } from "../redux/slice/counterSlice";
import { destinationReset } from "../redux/slice/DestinationSlice";

function ResetApp() {
  const dispatch = useDispatch();

  function handleResetClick() {
    dispatch(counterReset());
    dispatch(destinationReset());
  }

  return (
    <div className="text-center">
      <button
        onClick={handleResetClick}
        className="m-4 btn btn-outline-warning w-25"
      >
        Reset App
      </button>
    </div>
  );
}

export default ResetApp;
