import React from "react";
import { Search } from "lucide-react";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black">
      {/* Search Bar */}
      <div className="flex items-center gap-8">
        <div className="relative flex h-min w-[200px]">
          <Search className="absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white"></Search>
        </div>
      </div>

      {/* Icons */}
      <div className="flex items-center">
          
      </div>
    </div>
  );
};

export default NavBar;