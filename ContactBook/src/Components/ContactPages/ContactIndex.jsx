import { useState } from "react";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";

function ContactIndex() {
  const [contactList, setContactList] = useState([
    {
      id: 1,
      name: "Daniel",
      phone: "666-666-6689",
      email: "dani@gmail.com",
      isFavorite: true,
    },
    {
      id: 2,
      name: "William",
      phone: "666-666-6489",
      email: "William@gmail.com",
      isFavorite: true,
    },
    {
      id: 3,
      name: "Ben",
      phone: "666-666-5589",
      email: "Ben@gmail.com",
      isFavorite: false,
    },
  ]);

  function toggleFavorite(contact) {
    setContactList((prev) => {
      return prev.map((obj) => {
        if (obj.id == contact.id) {
          return {
            ...obj,
            isFavorite: !obj.isFavorite,
          };
        }
        return obj;
      });
    });
  }

  return (
    <div className="container" style={{ minHeight: "85vh" }}>
      <div className="row py-3">
        <div className="row py-2">
          <div className="col-6">Add Contact</div>
          <div className="col-6">Remove Contact</div>
        </div>
        <div className="py-2">
          <div className="com-12">Form to add new contact</div>
        </div>
        <div className="py-2">
          <div className="com-12">
            <FavoriteContacts
              favoriteclick={toggleFavorite}
              contacts={contactList.filter((temp) => temp.isFavorite == true)}
            />
            <GeneralContacts
              favoriteclick={toggleFavorite}
              contacts={contactList.filter((temp) => temp.isFavorite == false)}
            />
          </div>
        </div>
        <div className="py-2">
          <div className="com-12">General Contacts</div>
        </div>
      </div>
    </div>
  );
}

export default ContactIndex;
