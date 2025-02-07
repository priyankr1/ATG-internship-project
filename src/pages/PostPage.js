import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import data from "../data/data.json";
import Card from "../components/Card";
import Location from "../components/Location";
import Users from "../components/Users";
import { usePageState } from "../Context/StateProvider";

const PostPage = () => {
  const [joined, setJoined] = useState(false);
  const { showUsers, setShowUsers } = usePageState();
  const openOption = (e) => {
    const option = e.target.parentElement.parentElement.nextElementSibling;

    if (option) {
      option.classList.toggle("showOption");
    }
  };
  return (
    <div className="post-section">
      <div className="post-header w-100  d-flex justify-content-between align-items-center">
        <ul className="head-items d-flex gap-4 w-100 ">
          <li className="head-item">
            <p>All Posts(32)</p>
          </li>
          <li className="head-item">
            <NavLink className={"post-link"} to={"/"}>
              Article
            </NavLink>
          </li>
          <li className="head-item">
            <NavLink className={"post-link"} to={"/"}>
              Event
            </NavLink>
          </li>
          <li className="head-item">
            <NavLink className={"post-link"} to={"/"}>
              Education
            </NavLink>
          </li>
          <li className="head-item">
            <NavLink className={"post-link"} to={"/"}>
              Job
            </NavLink>
          </li>
        </ul>

        <div className="d-flex gap-3 align-items-center justify-content-center pb-2 ">
          <select className="options">
            <option>Write a post</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>

          {!joined ? (
            <button
              className="btn btn-primary joinBtn"
              onClick={() => {
                setJoined(true);
                setShowUsers(!showUsers);
              }}
            >
              <i className="bi bi-people-fill"></i> Join Group
            </button>
          ) : (
            <button
              className="btn btn-secondary joinBtn"
              onClick={() => {
                setJoined(false);
                setShowUsers(!showUsers);
              }}
            >
              <i className="bi bi-box-arrow-right"></i> Leave Group
            </button>
          )}
        </div>
      </div>

      <div className="postRes w-100  d-flex justify-content-between align-items-center">
        <ul className="head-itemsRes d-flex gap-4 ">
          <li className="head-itemRes">
            <p>Posts(368)</p>
          </li>
        </ul>

        <div className="d-flex gap-4 align-items-center justify-content-center pb-2 ">
          <select className="options">
            <option>Filter:All</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
      </div>

      <div className="line"></div>
      <div className="post-content d-flex gap-5 justify-content-center pt-5 w-100">
        <div className="posts">
          {data.map((card) => {
            return (
              <Card
                post={card}
                handleFunction={(e) => {
                  openOption(e);
                }}
                key={card.cardNum}
              />
            );
          })}
        </div>
        <div>
          <Location />
          {showUsers && <Users />}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
