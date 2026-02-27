import React from "react";
import DeleteUser from "./DeleteUser";

function UserDetails() {
  return (
    <>
      <div>
        <div>
          <div>List of users</div>
          <button>Add New Users</button>
        </div>
        <ul>
          <li>Hi</li>
          <li>Hiii</li>
        </ul>
        <hr />
        <DeleteUser />
      </div>
    </>
  )
}

export default UserDetails;