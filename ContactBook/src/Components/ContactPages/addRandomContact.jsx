import getRandomUser from "../../Utility/api";

function addRandomContact(props) {
  const getRandomContact = async () => {
    const user = await getRandomUser();
    console.log(user);
    return {
      name: user.results[0].name.first,
      email: user.results[0].email,
      phone: user.results[0].cell,
    };
  };

  async function handleAddRandomContact() {
    const randomContact = await getRandomContact();
    props.handleAddContact(randomContact);
  }

  return (
    <button
      onClick={handleAddRandomContact}
      className="btn btn-success form-control"
    >
      Add Random Contact
    </button>
  );
}

export default addRandomContact;
