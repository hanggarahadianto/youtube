import React from "react";
import { Youtube } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import CurrentUser from "./CurrentUser";
import Login from "./Login";
import Search from "./Search";

function Topbar() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <div className="grid grid-rows-2 grid-cols-12">
        <div className="col-span-3">
          <Youtube className="h-12 w-12" />
        </div>

        <div className="col-span-5">
          <Search />
        </div>

        <div className="flex col-span-4">
          <CurrentUser />

          <div></div>
        </div>
      </div>
    </>
  );
}

export default Topbar;
