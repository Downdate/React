import logo from "../assets/react.svg";

function Header() {
  return (
    <div
      className="py-2 pl-2"
      style={{
        borderBottom: "1px solid #ccc",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{ height: "35px", verticalAlign: "top", marginRight: "15px" }}
      />
      <span>Contact Book</span>
    </div>
  );
}

export default Header;
