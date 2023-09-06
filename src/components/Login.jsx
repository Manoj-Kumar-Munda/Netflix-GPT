import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative xl:min-h-screen bg-hero-bg bg-cover">
      <Header />

      <div className="absolute inset-0 bg-layer z-0"></div>

      <div className="relative py-10 left-0 right-0 top-1/4 flex justify-center">
        <div className="mx-2 py-6 px-8 bg-black/70 rounded-md">
          <form className="space-y-6 max-w-sm">
            <h1 className="text-xl text-white ">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            <div className="space-y-2">
              {!isSignInForm ? (
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full py-2 px-3 outline-none bg-stone-700/75 caret-slate-400 text-white"
                />
              ) : null}
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
                <span>{isSignInForm ? "Sign In" : "Sign Up"}</span>
              </button>
            </div>
          </form>

          <p className="my-8 text-gray-500">
            {isSignInForm ? "New to Netflix ? ": "Already have an account ?" }

            <span
              className="text-white font-semibold cursor-pointer px-1"
              onClick={() => toggleSignInForm()}
            >
              {isSignInForm ? "Sign up now": "Sign in"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
