import React from "react";
import users from "../data/user.json";
import People from "./People";
import { NavLink } from "react-router-dom";

const Users = () => {
  return (
    <div className="mt-4 recUsers">
      <h6
        style={{ fontSize: "14px", marginBottom: "15px", letterSpacing: "2px" }}
      >
        <i class="bi bi-hand-thumbs-up"></i> RECOMMENDED GROUPS
      </h6>
      <div className="users">
        {users.map((u) => {
          return <People user={u} />;
        })}
      </div>
      <NavLink
        style={{
          textDecoration: "none",
          fontSize: "12px",
          position: "absolute",
          right: "50px",
        }}
      >
        See More...
      </NavLink>
    </div>
  );
};

export default Users;
