import React, { useState } from "react";

const People = ({ user }) => {
  const [follow, setFollow] = useState(false);
  return (
    <div className="d-flex justify-content-between align-items-center mb-3 w-50">
      <div className="d-flex justify-content-center align-items-center gap-1">
        <img src={user.profilePic} alt="profile-pic" className="profile" />
        <p style={{ fontSize: "14px", marginTop: "13px", marginLeft: "5px" }}>
          {user.name}
        </p>
      </div>
      {!follow ? (
        <button
          onClick={() => {
            setFollow(!follow);
          }}
          className="btn btn-light rounded-pill"
          style={{ fontSize: "12px", letterSpacing: "1px" }}
        >
          follow
        </button>
      ) : (
        <button
          onClick={() => {
            setFollow(!follow);
          }}
          className="btn btn-dark rounded-pill"
          style={{ fontSize: "12px", letterSpacing: "1px" }}
        >
          followed
        </button>
      )}
    </div>
  );
};

export default People;
