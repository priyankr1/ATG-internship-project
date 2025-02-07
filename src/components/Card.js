import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ post, handleFunction }) => {
  return (
    <div>
      <div className="card mb-5 ">
        {post.postImg && (
          <img src={post.postImg} className="card-img-top" alt="..." />
        )}
        <div className="card-body">
          <h5 className="post-type">{post.postType}</h5>
          <div className="d-flex">
            <p className="post-desc">{post.postDesc}</p>
            <button className="btn postOption" onClick={handleFunction}>
              <i className={post.postIcon}></i>
            </button>
          </div>
          <ul className="optionOpen shadow">
            <li style={{ cursor: "pointer" }}>Edit</li>
            <li style={{ cursor: "pointer" }}>Report</li>
            <li style={{ cursor: "pointer" }}>Option 3</li>
          </ul>

          <p className="sub-desc">{post.subDesc}</p>
          {post.extra && (
            <div className="info d-flex justify-content-between align-items-center">
              <p className="extraBtn">
                <i className={post.exIcon1}></i> {post.day}
              </p>
              <p className="extraBtn">
                <i className={post.exIcon2}></i> {post.loc}
              </p>
            </div>
          )}
          {post.btnContent && (
            <button className={`btn border w-100 mb-2 ${post.style}`}>
              {post.btnContent}
            </button>
          )}
          <div className="last-part d-flex">
            <div className="profile d-flex gap-2 justify-content-center align-items-center w-100">
              <img src={post.userProfile} alt="" className="profile-img" />
              <p className="user-name w-100">{post.userName}</p>
            </div>

            <div className="d-flex w-100 align-items-center justify-content-center shareInfo">
              <p className="views">
                <i className="bi bi-eye"></i> {post.postViews}
              </p>
              <NavLink to="/" className="btn shareBtn">
                <i className="bi bi-share-fill"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
