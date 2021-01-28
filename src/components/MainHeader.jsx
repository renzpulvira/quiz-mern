import { Link } from "react-router-dom";
import Logo from "../assets/Quizly.png";

function MainHeader() {
  return (
    <header className="mainHeader">
      <div className="mainHeader__container">
        <div className="mainHeader__left">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="mainHeader__right"></div>
      </div>
    </header>
  );
}

export default MainHeader;
