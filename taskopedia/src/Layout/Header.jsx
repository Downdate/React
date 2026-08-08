import logo from "../images/vault_tec_corporation_by_tieger131_dfoab76-fullview.png";

function Header() {
  return (
    <div className="pt-1 text-center">
      <img src={logo} alt="Logo" style={{ width: "70px" }} />
      <span className="customHeading">React Application Header</span>
    </div>
  );
}

export default Header;
