import React from "react";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";
const GPTSearchBar = () => {
  const selectedLang = useSelector((appStore) => appStore.config.language);
  return (
    <div className="px-2 relative z-50">
      <form className="flex justify-center">
        <div className="flex border-4 border-purple-600/70 transition focus-within:border-purple-600 rounded-full pl-4 max-w-xl w-full py-1">
          <input
            type="text"
            className="w-full text-white font-semibold bg-transparent pr-2 py-3 outline-none border-none placeholder:font-light placeholder:text-purple-400"
            placeholder={lang[selectedLang].gptSearchPlaceholder}
          />
          <button className="bg-transparent border-l border-purple-600 text-xl text-purple-400 font-bold px-2 rounded-r-3xl flex gap-2 items-center">
            {lang[selectedLang].search}
            <FaWandMagicSparkles />
          </button>
        </div>
      </form>
    </div>
  );
};

export default GPTSearchBar;
