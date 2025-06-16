//src/components/panelcomponents/Header.jsx

import React from "react";
import Image from "next/image";
import ToggleSwitch from "./ToggleSwitch";

const Header = () => {
  return (
    <header className="w-full bg-white ">
      <div className="w-full  mx-auto px-4 py-3 flex items-center justify-between ">
        <div className="flex flex-row ">
          {/* قسمت چپ */}
          <div className="flex items-center  ">
            <div className="cursor-pointer bg-[#E6EFFF] rounded-full p-2 mr-[2vw]">
              <Image
                src="/panel/header/profile.svg"
                alt="پروفایل"
                width={20}
                height={20}
              />
            </div>
            <div className="flex mr-[3vw]">
              <ToggleSwitch />
            </div>
          </div>
          {/* قسمت وسط */}
          <div className="flex-1 flex justify-center items-center ">
            <div className="bg-[#E6EFFF] rounded-full px-3 py-2 flex items-center w-60 max-w-full">
              <input
                type="text"
                placeholder="جستجو"
                className="bg-transparent border-none outline-none text-right w-full text-sm pr-2"
              />
              <Image
                src="/panel/header/search.svg"
                alt="جستجو"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>
        {/* قسمت راست */}
        <ul className="flex items-center justify-end space-x-7 ">
          <li className="text-[#483C8C] font-medium text-sm">
            جامعه ی مشتریان
          </li>
          <li className="text-[#483C8C] font-medium text-sm">قیمت گذاری</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
