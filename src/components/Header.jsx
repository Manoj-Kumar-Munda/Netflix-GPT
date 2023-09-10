import React, { useEffect } from "react";
import { NETFLIX_LOGO_URL, SUPPORTED_LANGUAGE } from "../utils/links";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import appStore from "../utils/appStore";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((appStore) => appStore.user);
  const showGptSearch = useSelector((appStore) => appStore.gpt.showGptSearch);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //signed In
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/95 to-transparent">
      <div className="mx-auto flex max-h-16 xl:max-h-24 justify-between xl:max-w-screen-xl  3xl:max-w-screen-2xl">
        <div className="">
          <img
            src={NETFLIX_LOGO_URL}
            alt="logo"
            className="h-full"
            loading="lazy"
          />
        </div>

        <div className="flex items-center gap-4 pr-2">
          {showGptSearch && (
            <select
              name="language"
              id="language"
              className="py-2 border-none rounded-lg px-4 bg-gray-600/80 text-white font-semibold  outline-none"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGE.map((lang) => (
                <option
                  id={lang.identifier}
                  value={lang.identifier}
                  className="border-none outline-none p-2"
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="py-2 px-4 border border-purple-600 bg-purple-600 rounded-md transition-all outline-4 outline-red-600 ring-0  hover:ring-8  hover:ring-purple-600/40"
            onClick={handleGptSearch}
          >
            <span className="whitespace-nowrap text-white font-semibold">
              {!showGptSearch ? "Search GPT" : "Home"}
            </span>
          </button>
          {!user ? (
            <button className="bg-red-600 py-2 px-4 rounded-lg">
              <span className="text-white whitespace-nowrap font-semibold">
                Sign In
              </span>
            </button>
          ) : (
            <>
              <button
                className="bg-red-600 py-2 px-4 rounded-lg hover:bg-opacity-90"
                onClick={handleSignOut}
              >
                <span className="text-white whitespace-nowrap font-semibold">
                  Sign out
                </span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
