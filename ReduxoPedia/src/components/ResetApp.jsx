import { useDispatch } from "react-redux";
import { resetReduxOPedia } from "../redux/action/actions";

function ResetApp() {
  const dispatch = useDispatch();

  function handleResetClick() {
    dispatch(resetReduxOPedia());
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
