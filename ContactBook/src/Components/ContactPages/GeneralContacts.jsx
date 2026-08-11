import Contact from "./Contact";

function GeneralContacts(props) {
  return (
    <div
      className="col-12 p-2"
      style={{
        borderRadius: "20px",
        backgroundColor: "#323637",
        marginTop: "10px",
        marginBottom: "10px",
      }}
    >
      <div className="text-center text-white-50">General</div>
      <div className="p-2">
        {props.contacts.map((contact, index) => (
          <Contact
            deleteClick={props.deleteClick}
            favoriteClick={props.favoriteClick}
            contact={contact}
            key={index}
          ></Contact>
        ))}
      </div>
    </div>
  );
}

export default GeneralContacts;
