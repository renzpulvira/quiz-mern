import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Quizly.png";
import cog from "../assets/icon-cog.png";
import bell from "../assets/icon-bell.png";
import UserImage from "./UserImage";

function MainHeader() {
  const [userProfile, setUserProfile] = useState("");

  return (
    <header className="mainHeader">
      <div className="mainHeader__container">
        <div className="mainHeader__left">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          <input
            className="mainHeader__search"
            type="text"
            placeholder="Search..."
          />
        </div>
        <div className="mainHeader__right">
          <Link className="createQuiz" type="button" to="/create">
            Create a Quiz
          </Link>
          <img src={cog} alt="" />
          <img src={bell} alt="" />
          <UserImage />
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
