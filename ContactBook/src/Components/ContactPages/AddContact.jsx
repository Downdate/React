import { useState, useEffect } from "react";

function AddContact(props) {
  const [messages, setMessages] = useState({
    errorMessage: "",
    successMessage: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (props.isUpdating && props.selectedContact) {
      setFormData({
        name: props.selectedContact.name,
        email: props.selectedContact.email,
        phone: props.selectedContact.phone,
      });
    } else {
      setFormData({
        name: "",
        email: "",
        phone: "",
      });
    }
  }, [props.isUpdating, props.selectedContact]);

  function handleAddContactForm(formData) {
    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    };

    try {
      console.log(contactData);
      const response = props.handleAddContact(contactData);

      if (response.status == "success") {
        setMessages({
          errorMessage: undefined,
          successMessage: response.msg,
        });
      } else {
        setMessages({
          errorMessage: response.msg,
          successMessage: undefined,
        });
      }
    } catch (error) {
      console.error("error during adding contact!", error);
    }
  }

  function handleFormInputChange(input) {
    setFormData({
      ...formData,
      [input.target.name]: input.target.value,
    });
  }
  function handleClearFields() {
    setFormData({
      name: "",
      email: "",
      phone: "",
    });
  }

  return (
    <div className="border col-12 text-white p-2 align-center">
      <form action={handleAddContactForm}>
        <div className="row p-2">
          <div className="col-12 text-white-50">
            {props.isUpdating ? "Update Contact" : "Add Contact"}
          </div>
          <div className="col-12 col-md-4 p-1 ">
            <input
              className="w-100"
              name="name"
              placeholder="Name..."
              type="text"
              value={formData.name}
              onChange={handleFormInputChange}
            />
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
              className="w-100"
              name="email"
              placeholder="Email..."
              type="email"
              value={formData.email}
              onChange={handleFormInputChange}
            />
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
              className="w-100"
              name="phone"
              placeholder="phone..."
              type="tel"
              value={formData.phone}
              onChange={handleFormInputChange}
            />
          </div>
          {messages.successMessage && (
            <div className="col-12 text-center bg-success">
              {messages.successMessage}
            </div>
          )}
          {messages.errorMessage && (
            <div className="col-12 text-center bg-danger ">
              {messages.errorMessage}
            </div>
          )}
          <div className={`${props.isUpdating ? "col-6 mt-2" : "col-12 mt-2"}`}>
            <button className="btn btn-primary btn-sm form-control w-100 ">
              {props.isUpdating ? "Update" : "Create"}
            </button>
          </div>
          {props.isUpdating && (
            <div className="col-6 mt-2">
              <button
                onClick={props.handleCancelClick}
                className="btn btn-danger btn-sm w-100 "
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default AddContact;
