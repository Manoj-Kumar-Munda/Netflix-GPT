import React from "react";
import { NETFLIX_LOGO_URL } from "../utils/links";

const Header = () => {
  return (
    <div className="relative z-50">
    
        <div className="mx-auto flex max-h-16 xl:max-h-24 justify-between xl:max-w-screen-xl  3xl:max-w-screen-2xl">
          <div className="">
            <img src={NETFLIX_LOGO_URL} alt="logo" className="h-full" loading="lazy" />
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-red-600 py-2 px-4 rounded-lg">
              <span className="text-white whitespace-nowrap font-semibold">
                Sign In
              </span>
            </button>
          </div>
        </div>
      
    </div>
  );
};

export default Header;
