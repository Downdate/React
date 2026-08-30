import { useSelector } from "react-redux";

function DestinationList() {
  const destinationList = useSelector(
    (store) => store.destinationStore.destinations,
  );

  return destinationList.map((destination, index) => {
    return (
      <div className="text-center row border-bottom" key={index}>
        <div className="col-8 pt-2">{destination.name}</div>

        <div className="col-4">
          <button className="btn btn-success form-control">Details</button>
        </div>
      </div>
    );
  });
}

export default DestinationList;
