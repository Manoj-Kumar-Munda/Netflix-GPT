import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { validateSignIn } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formRef = useRef();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  useEffect(() => {
    formRef.current.reset();
    setErrorMessage(null);
  }, [isSignInForm]);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = validateSignIn(email.current.value, password.current.value);
    
    if (!isSignInForm) {
      //SignUp logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          //Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            const {uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({uid: uid, email:email, displayName : displayName, photoURL: photoURL}))
            
          }).catch((error) => {
            setErrorMessage(error.message);
            
          });
        
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorMessage);
        });
    } else {
      //signIn logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          
          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };
  return (
    <div className="relative xl:min-h-screen bg-hero-bg bg-cover">
      <Header />

      <div className="absolute inset-0 bg-layer z-0"></div>

      <div className="relative py-10 left-0 right-0 top-1/4 flex justify-center">
        <div className="mx-2 py-6 px-8 bg-black/70 rounded-md">
          <form
            className="space-y-6 max-w-sm"
            onSubmit={(e) => e.preventDefault()}
            ref={formRef}
          >
            <h1 className="text-xl text-white ">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            <div className="space-y-2">
              {!isSignInForm ? (
                <input
                  ref={name}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full py-2 px-3 outline-none bg-stone-700/75 caret-slate-400 text-white"
                />
              ) : null}
              <input
                ref={email}
                type="text"
                name="email"
                id="email"
                placeholder="Enter email"
                className="w-full py-2 px-3 outline-none bg-stone-700/75 caret-slate-400 text-white"
              />
              <input
                ref={password}
                type="password"
                placeholder="Password"
                className="w-full py-2 px-3 outline-none bg-stone-700/75 caret-slate-400 text-white"
              />
            </div>

            <p className="text-red-600 text-sm font-bold">{errorMessage}</p>

            <div className="space-y-2">
              <button
                className="w-full py-2 text-center bg-red-600 text-white"
                onClick={handleButtonClick}
              >
                <span>{isSignInForm ? "Sign In" : "Sign Up"}</span>
              </button>
            </div>
          </form>

          <p className="my-8 text-gray-500">
            {isSignInForm ? "New to Netflix ? " : "Already have an account ?"}

            <span
              className="text-white font-semibold cursor-pointer px-1"
              onClick={() => toggleSignInForm()}
            >
              {isSignInForm ? "Sign up now" : "Sign in"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
