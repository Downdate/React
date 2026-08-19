function Home() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        <i className="fas fa-house"></i>Home Page
      </h1>
      <div className="card container" style={{ width: "70vw"}}>
        <img
          src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
          className="card-img-top"
          alt="Sunset Over the Sea"
        />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
