function AddContact() {
  return (
    <div className="border col-12 text-white p-2">
      <form action="">
        <div className="row p-2">
          <div className="col-12 text-white-50">Add Contact</div>
          <div className="col-12 col-md-4 p-1">
            <input placeholder="Name..." type="text" />
          </div>
          <div className="col-12 col-md-4 p-1">
            <input placeholder="Email..." type="email" />
          </div>
          <div className="col-12 col-md-4 p-1">
            <input placeholder="phone..." type="phoneNumber" />
          </div>
          <div className="col-12 text-center text-success">Success Message</div>
          <div className="col-12 text-center text-danger">Error Message</div>
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
