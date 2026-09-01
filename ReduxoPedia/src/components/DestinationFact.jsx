import { useSelector } from "react-redux";

function DestinationFact() {
  const selectedDestination = useSelector(
    (store) => store.destinationStore.destinationSelected,
  );

  if (selectedDestination == undefined) {
    return (
      <div className="text-center p-4 text-warning">
        Please select a destination
      </div>
    );
  } else {
    return (
      <div className="text-center border p-4 m-4">
        <h4 className="text-success">
          <strong>{selectedDestination.name}</strong>
        </h4>
        <p>{selectedDestination.fact}</p>
        <br />
        <span className="text-warning">
          <strong>Days: </strong>
          {selectedDestination.days}
        </span>
      </div>
    );
  }
}

export default DestinationFact;
