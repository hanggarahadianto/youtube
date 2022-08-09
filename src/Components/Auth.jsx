import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginStart, loginFailure, loginSuccess } from "../Helpers/UserSlice";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/signin", { name, password });
      dispatch(loginSuccess(res.data));
      console.log(res.data);
    } catch (error) {
      dispatch(loginFailure());
    }
  };

  return (
    <div className="bg-dark w-96 px-8 py-2">
      <div>
        <h3 class="text-2xl font-bold">Sign In</h3>
        <div className="justify-center">
          <form className="text-center">
            <div className="mt-8">
              <input
                onChange={(event) => {
                  setName(event.target.value);
                }}
                name="name"
                autoComplete="off"
                type="text"
                placeholder="Name"
                className="text-gray-800 placeholder:text-gray-700 font-semibold px-4 py-2 rounded-lg bg-gray-400 border-2 border-blue-800 w-80"
              ></input>

              <input
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                className="px-4 py-2 text-gray-800 placeholder:text-gray-700 font-semibold rounded-lg bg-gray-400 border-2 border-blue-800 mt-5 w-80"
                placeholder="Password"
                type="password"
                name="password"
                autoComplete="off"
              ></input>

              <div className="flex justify-center mt-2">
                <button
                  onClick={handleLogin}
                  className="background px-8 py-2 rounded-md w-96"
                >
                  <p className="text-xl text-gray-200 font-bold">Sign In</p>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <h3 class="text-2xl font-bold mt-8">Or</h3>
        <div className="justify-center">
          <form className="text-center">
            <div className="mt-5">
              <input
                onChange={(event) => {
                  setName(event.target.value);
                }}
                name="name"
                autoComplete="off"
                type="text"
                placeholder="Name"
                className="text-gray-800 placeholder:text-gray-700 font-semibold px-4 py-2 rounded-lg bg-gray-400 border-2 border-blue-800 w-80"
              ></input>

              <input
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                name="email"
                autoComplete="off"
                type="text"
                placeholder="Email"
                className="text-gray-800 mt-5 placeholder:text-gray-700 font-semibold px-4 py-2 rounded-lg bg-gray-400 border-2 border-blue-800 w-80"
              ></input>

              <input
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                className="px-4 py-2 text-gray-800 placeholder:text-gray-700 font-semibold rounded-lg bg-gray-400 border-2 border-blue-800 mt-5 w-80"
                placeholder="Password"
                type="password"
                name="password"
                autoComplete="off"
              ></input>

              <div className="flex justify-center mt-3">
                <button className="background px-8 py-2 rounded-md w-96">
                  <p className="text-xl text-gray-200 font-bold">Sign Up</p>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth;
