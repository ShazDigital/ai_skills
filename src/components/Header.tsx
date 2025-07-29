import React from "react";
import { ArrowDown } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="w-full py-8 flex-col lg:flex-row flex justify-between lg:items-end md:py-12 px-8 lg:px-16">
      <div className="flex flex-col gap-4">
        <h1
          className="text-5xl md:text-7xl font-bold text-gray-800"
          style={
            {
              // fontFamily: "'Special Gothic Expanded One', sans-serif",
              // textTransform: "uppercase",
            }
          }
        >
          AI Skill
          <br />
          Tracker
        </h1>
        <p className="text-gray-600 max-w-lg">
          A simple tool that lets people define and share where their AI skills
          sit. Refining and adding to this daily, stay tuned.
        </p>
      </div>

      {/* <ShareSection /> */}
      <div className="flex items-end justify-between lg:justify-end w-full lg:w-72 mt-8">
        <p className="text-gray-600">
          Complete and share your results at the bottom.
        </p>
        <ArrowDown className="w-10 h-10 text-gray-600 ml-2 shrink-0" />
      </div>
    </header>
  );
};

export default Header;
