import React, { useState } from "react";
import { Link } from "react-router-dom";
import userImage from "../assets/img-dummy-user.png";
import quizFeatured from "../assets/img-quizitem.png";

export default function Posts() {
  const [postData, setPostData] = useState([
    {
      _postId: 412,
      user: "Andre Bonita",
      title: "Starwars Fan",
      descrip:
        "I have created a Quiz for All Starwars fan, Challenge yourself if you are a tru Obi wan kenobi",
      postData: "12.08.16",
      quizItemData: {
        quizTitle: "Are you a true obi wan kenobi",
        quizImage: quizFeatured,
        quizDescrip: "Lots of Hard Starwars Questions about the trilogy movies",
        quizUrl: "812598jfawuiejfan",
      },
      quizMeta: {
        quizTags: ["obiwankenobi", "startrek"],
        quizPublished: "01.25.2021",
      },
    },
    {
      _postId: 412,
      user: "Andre Bonita",
      title: "Starwars Fan",
      descrip:
        "I have created a Quiz for All Starwars fan, Challenge yourself if you are a tru Obi wan kenobi",
      postData: "12.08.16",
      quizItemData: {
        quizTitle: "Are you a true obi wan kenobi",
        quizImage: quizFeatured,
        quizDescrip: "Lots of Hard Starwars Questions about the trilogy movies",
        quizUrl: "812598jfawuiejfan",
      },
      quizMeta: {
        quizTags: ["obiwankenobi", "startrek"],
        quizPublished: "01.25.2021",
      },
    },
  ]);

  return (
    <div className="posts">
      {postData.map((x) => (
        <div className="postItem">
          <img src={userImage} alt="" />
          <div className="postItem__content">
            <h3>{x.user}</h3>
            <span>{x.title}</span>
            <p>{x.descrip}</p>
            <div className="postItem__quiz-info">
              <div
                className="quiz-image"
                style={{
                  backgroundImage: `url(${x.quizItemData.quizImage})`,
                }}
              ></div>
              <div className="quiz-content">
                <h4>{x.quizItemData.quizTitle}</h4>
                <p>{x.quizItemData.quizDescrip}</p>
                <div className="quiz-link">
                  <Link to={x.quizItemData.quizUrl}>Take Quiz</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="postMeta" style={{ flex: "0 100%" }}>
            <ul>
              {x.quizMeta.quizTags.map((y) => (
                <li>#{y}</li>
              ))}
            </ul>
            <span>{x.quizMeta.quizPublished}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
