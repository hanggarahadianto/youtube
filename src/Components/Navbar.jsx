import React from "react";
import {
  Book,
  ClockHistory,
  Compass,
  Controller,
  House,
  MusicNote,
  MusicPlayer,
  Newspaper,
  PlusSquareDotted,
} from "react-bootstrap-icons";

import { useSelector } from "react-redux";
import Login from "./Login";

function Navbar() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="text-gray-200">
      <div className=" flex">
        <House className="h-6 w-6 mt-3 ml-5 mr-5 " />
        <p className="mt-3">Home</p>
      </div>
      <div className="mt-2 flex">
        <Compass className="h-6 w-6 mt-3 ml-5 mr-5 " />
        <p className="mt-3">Explore</p>
      </div>
      <div className="mt-2 flex">
        <PlusSquareDotted className="h-6 w-6 mt-3 ml-5 mr-5 " />
        <p className="mt-4">Subscription</p>
      </div>
      <div className="mt-8 flex">
        <Book className="h-6 w-6 mt-3 ml-5 mr-5 " />
        <p className="mt-3">Library</p>
      </div>
      <div className="mt-2 flex">
        <ClockHistory className="h-6 w-6 mt-3 ml-5 mr-5 " />
        <p className="mt-3">History</p>
      </div>

      {!currentUser && (
        <>
          <div className="mt-7 mr-5 ml-3">
            <p>Sign in to like videos, comment, and subscribe</p>
            <Login />
          </div>
        </>
      )}

      <div className="mt-8 flex">
        <MusicNote className="h-6 w-6 mt-3 ml-5 mr-5 " />
        <p className="mt-3">Music</p>
      </div>

      <div className="mt-8 flex">
        <Controller className="h-6 w-6 mt-3 ml-5 mr-5 " />
        <p className="mt-4">Gaming</p>
      </div>
      <div className="mt-2 flex">
        <Newspaper className="h-6 w-6 mt-3 ml-5 mr-5 " />
        <p className="mt-4">News</p>
      </div>
    </div>
  );
}

export default Navbar;
