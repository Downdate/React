function Dweller(props) {
  const dwellerName = props.dwellerName || "John Wick";
  const role = props.role || "Overseer";

  return (
    <div className="container p-4 bg-success my-4 text-white">
      <div className="row border p-2">
        <div className="col-2 " style={{ marginRight: "30px" }}>
          <img
            src={`https://ui-avatars.com/api/?name=${dwellerName}`}
            alt=""
            style={{ borderRadius: "50%", width: "70px" }}
          />
        </div>
        <div
          className="col-8"
          style={{ marginLeft: "20px", textAlign: "center" }}
        >
          {dwellerName}
          <br />
          Role: {role}
        </div>
      </div>
    </div>
  );
}

export default Dweller;
