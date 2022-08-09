import React from "react";
import Auth from "./Auth";

function Login() {
  return (
    <div className="mr-20">
      <button className=" border-blue-500 border-2 px-2 py-2 w-28 bg-gray-900">
        <label
          for="my-modal-4"
          className="bg-white hover:bg-gray-100 shadow-lg mt-5 rounded-md "
        >
          <div className="flex justify-center cursor-pointer">
            <p className="text-blue-400 font-bold">Login</p>
          </div>
        </label>
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label for="my-modal-4" className="modal">
          {/* login and register */}
          <Auth />
          {/* login and register */}
        </label>
      </button>
    </div>
  );
}

export default Login;
