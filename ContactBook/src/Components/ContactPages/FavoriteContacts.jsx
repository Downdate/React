import Contact from "./Contact";

function FavoriteContacts(props) {
  return (
    <div
      className="col-12 p-2"
      style={{
        borderRadius: "20px",
        backgroundColor: "#a200ff2c",
        marginBottom: "10px",
      }}
    >
      <div className="text-center text-white-50">Favorites</div>
      <div className="p-2">
        {props.contacts.map((contact, index) => (
          <Contact
            favoriteclick={props.favoriteclick}
            contact={contact}
            key={index}
          ></Contact>
        ))}
      </div>
    </div>
  );
}

export default FavoriteContacts;
