import celtics from "../images/celtics_secondary.svg";

function Header() {
  return (
    <header>
      <img src={celtics} alt="celtics-logo" className="header-logo"></img>
      <h1 className="header-text">Head Coach Application</h1>
    </header>
  );
}

export default Header;
