import { useState } from "react";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import AddContact from "./AddContact";

function ContactIndex() {
  const [contactList, SetContactList] = useState([
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

  const [selectedContact, SetSelectedContact] = useState(null);
  const [isUpdating, SetIsUpdating] = useState(false);

  function handleUpdateClick(contact) {
    console.log(contact);
    SetSelectedContact(contact);
    SetIsUpdating(true);
  }

  function handleCancelClick() {
    SetIsUpdating(false);
  }

  function toggleFavoriteHandler(contact) {
    SetContactList((prev) => {
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

  function handleAddContact(newContact) {
    if (
      newContact.name == "" ||
      newContact.email == "" ||
      newContact.phone == ""
    ) {
      return { status: "error", msg: "inputs can't be blank!" };
    }
    if (
      contactList.some(
        (element) =>
          element.name == newContact.name &&
          element.email == newContact.email &&
          element.phone == newContact.phone,
      )
    ) {
      return { status: "error", msg: "Contact is duplicate!" };
    }

    const newFinalContact = {
      ...newContact,
      id: Date.now(),
      isFavorite: false,
    };

    SetContactList((prev) => {
      return prev.concat([newFinalContact]);
    });

    return { status: "success", msg: "Contact was added successfully!" };
  }

  function deleteContactHandler(contact) {
    SetContactList((prev) => {
      return prev.filter((temp) => temp.id != contact.id);
    });
  }

  function handleRemoveAll() {
    SetContactList([]);
  }

  function handleUpdateContact(contact) {
    const existingContact = contactList.find((obj) => obj.id === contact.id);

    // Check if anything actually changed
    if (
      existingContact.name === contact.name &&
      existingContact.email === contact.email &&
      existingContact.phone === contact.phone
    ) {
      return {
        status: "error",
        msg: "There were no changes. The contact is the same as before!",
      };
    }

    SetContactList((prev) => {
      return prev.map((obj) => {
        if (obj.id == contact.id) {
          return {
            ...obj,
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
          };

          return {
            ...obj,
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
          };
        }
        return obj;
      });
    });

    SetSelectedContact(null);
    SetIsUpdating(true);

    return { status: "success", msg: "Contact was updated successfully!" };
  }

  return (
    <div className="container" style={{ minHeight: "85vh" }}>
      <div className="row py-3">
        <div className="row py-2">
          <div className="col-6">Add Contact</div>
          <div className="col-6">
            <button
              onClick={handleRemoveAll}
              className="btn btn-danger form-control"
            >
              Remove All
            </button>
          </div>
        </div>
        <div className="py-2">
          <div className="com-12">
            <AddContact
              handleAddContact={handleAddContact}
              handleCancelClick={handleCancelClick}
              selectedContact={selectedContact}
              isUpdating={isUpdating}
              handleUpdateContact={handleUpdateContact}
            />
          </div>
        </div>
        <div className="py-2">
          <div className="com-12">
            <FavoriteContacts
              deleteClick={deleteContactHandler}
              favoriteClick={toggleFavoriteHandler}
              updateClick={handleUpdateClick}
              contacts={contactList.filter((temp) => temp.isFavorite == true)}
            />
            <GeneralContacts
              deleteClick={deleteContactHandler}
              favoriteClick={toggleFavoriteHandler}
              updateClick={handleUpdateClick}
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
