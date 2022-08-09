import React from "react";
import { useSelector } from "react-redux";

import Login from "./Login";
import Upload from "./Upload";

function CurrentUser() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div>
      {currentUser ? (
        <div className="flex">
          <div>
            <Upload />
          </div>
          <img src={currentUser.img} />
          <p className="text-white">{currentUser.name}</p>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default CurrentUser;
