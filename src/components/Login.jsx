import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="relative xl:min-h-screen bg-hero-bg bg-cover">
      <Header />

      <div className="absolute inset-0 bg-layer z-0"></div>

      <div className="relative py-10 left-0 right-0 top-1/4 flex justify-center">
        <div className="mx-2 py-6 px-8 bg-slate-900/70 rounded-md">
          <form className="space-y-6">
            <h1 className="text-xl text-white ">Sign In</h1>
            <div className="space-y-2">
              <input
                type="text"
                name="userId"
                id="userId"
                placeholder="Email or phone number"
                className="w-full py-2 px-3 outline-none bg-stone-700/75 caret-slate-400 text-white"
              />
              <input
                type="text"
                placeholder="Password"
                className="w-full py-2 px-3 outline-none bg-stone-700/75 caret-slate-400 text-white"
              />
            </div>

            <div className="space-y-2">
              <button className="w-full py-2 text-center bg-red-600 text-white">
                <span>Sign In</span>
              </button>
              <div className="flex justify-between items-center">
                <div>
                  <input
                    type="checkbox"
                    name="rememberMe"
                    id="rememberMe"
                    className="accent-gray-600 w-3 h-3 mr-2"
                  />
                  <label
                    htmlFor="rememeberMe"
                    className="text-gray-500 text-sm"
                  >
                    Remember me
                  </label>
                </div>

                <span className="text-gray-500 text-sm">Need help?</span>
              </div>
            </div>
          </form>

          <p className="my-8 text-gray-500"> New to Netflix ? 
          <Link to="" className="text-white font-semibold"> Sign up now</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
