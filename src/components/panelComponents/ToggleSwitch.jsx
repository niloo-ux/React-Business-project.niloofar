"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div
      className="relative flex items-center bg-[#E6EFFF] rounded-full w-24 h-10 cursor-pointer p-1"
      onClick={handleToggle}
    >
      {/* کادر سفید متحرک */}
      <div
        className={`absolute w-8 h-8 bg-white rounded-full transition-transform duration-300 ease-in-out ${
          isToggled ? "transform translate-x-14" : "transform translate-x-0"
        }`}
      />

      {/* آیکون‌ها */}
      <div className="flex justify-between w-full px-1">
        <div className="relative w-6 h-6 z-10">
          <Image src="/panel/header/sun.svg" alt="Sun" width={24} height={24} />
        </div>
        <div className="relative w-6 h-6 z-10">
          <Image
            src="/panel/header/moon.svg"
            alt="Moon"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
