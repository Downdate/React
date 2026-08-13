import { useState } from "react";

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

  return (
    <div className="border col-12 text-white p-2">
      <form action={handleAddContactForm}>
        <div className="row p-2">
          <div className="col-12 text-white-50">Add Contact</div>
          <div className="col-12 col-md-4 p-1">
            <input
              name="name"
              placeholder="Name..."
              type="text"
              value={formData.name}
              onChange={handleFormInputChange}
            />
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
              name="email"
              placeholder="Email..."
              type="email"
              value={formData.email}
              onChange={handleFormInputChange}
            />
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
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
          <div className="col-6">
            <button className="btn btn-primary btn-sm form-control">
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddContact;
