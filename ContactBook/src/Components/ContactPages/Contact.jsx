function Contact(props) {
  console.log(props);

  return (
    <div
      className="row p-2 mb-2"
      style={{ borderRadius: "20px", border: "1px solid #666666" }}
    >
      <div className="col-2 pt-3">
        <img
          src={`https://api.dicebear.com/10.x/initials/svg?seed=${props.contact.name}`}
          alt="avatar"
          style={{ width: "80%", marginBottom: "10px" }}
        />
      </div>
      <div className="col-6 text-white pt-0">
        <span className="h4">{props.contact.name}</span>
        <br />
        <div className="text-white-50">
          {props.contact.email}
          <br />
          {props.contact.phone}
        </div>
      </div>
      <div className="col-2 pt-2">
        <button
          onClick={() => props.favoriteclick(props.contact)}
          className={`btn btn-sm m-1 ${props.contact.isFavorite ? "btn-warning" : "btn-outline-warning"}`}
        >
          {props.contact.isFavorite ? (
            <i className="bi bi-star-fill"></i>
          ) : (
            <i className="bi bi-star"></i>
          )}
        </button>
        <button className="btn btn-info btn-sm m-1">
          <i className="bi bi-pencil-square"></i>
        </button>
        <button className="btn btn-danger btn-sm m-1">
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Contact;
