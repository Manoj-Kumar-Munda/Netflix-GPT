import React, { useEffect } from "react";
import { NETFLIX_LOGO_URL } from "../utils/links";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((appStore) => appStore.user);

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
          {!user ? (
            <button className="bg-red-600 py-2 px-4 rounded-lg">
              <span className="text-white whitespace-nowrap font-semibold">
                Sign In
              </span>
            </button>
          ) : (
            <>
              <span className="text-red-600 font-semibold">
                Welcome, {user.displayName}
              </span>
              <button
                className="bg-red-600 py-2 px-4 rounded-lg"
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
