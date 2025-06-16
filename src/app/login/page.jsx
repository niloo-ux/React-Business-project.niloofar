"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import uidStore from "@/store/uidStore";

const Page = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { setUid, setMobile } = uidStore();
  const router = useRouter();
  const isValidPhone = /^[0-9]{10,}$/.test(phoneNumber);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^[0-9]+$/.test(phoneNumber)) {
      alert("لطفاً فقط عدد وارد کنید.");
      return;
    }

    if (phoneNumber.length < 10) {
      alert("لطفاً شماره معتبر وارد کنید.");
      return;
    }

    try {
      const response = await fetch(
        "https://api.melonest.ir/api/fa/mobilelogin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ mobile: phoneNumber }),
        }
      );

      const result = await response.json();

      if (!result.error) {
        setUid(result.data.uid);
        setMobile(result.data.mobile);
        router.push("/enterCode");
      } else {
        alert("خطا در ارسال کد. لطفا دوباره تلاش کنید.");
      }
    } catch (err) {
      alert("خطای شبکه. لطفاً دوباره تلاش کنید.");
    }
  };

  return (
    <div className="flex flex-col md:flex-col lg:flex-row min-h-screen lg:h-screen bg-white">
      {/* Purple sidebar - full width on mobile, 1/3 on larger screens */}
      <div className="w-full md:w-full lg:w-1/3 bg-[#C5BAFF] flex flex-col items-center p-2 md:p-2 lg:p-10 relative mb-24 md:mb-24 lg:mb-0">
        <div className="mt-4 lg:mt-8 mb-6 lg:mb-12 text-center w-full">
          <h2 className="text-lg md:text-xl font-bold text-gray-800">
            ورود به سیستم
          </h2>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mt-4">
            خوش آمدید
          </h1>
        </div>

        {/* Illustration container with responsive height */}
        <div className="hidden lg:block relative w-full h-48 sm:h-64 md:h-72 lg:h-96">
          {/* Programmer illustration - hidden on sizes below lg */}
          <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-12 hidden lg:block">
            <div className="w-96 h-96 relative">
              <img
                src="/loginPage/login.svg"
                alt="Programmer illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Login form - full width on mobile, 2/3 on larger screens */}
      <div className="w-full md:w-7/12 lg:w-2/3 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md">
          <div className="text-right mb-6 md:mb-8">
            <p className="text-gray-700 mb-4">
              لطفا در باکس زیر شماره تماس خود را وارد کنید:
            </p>

            <div className="mb-6">
              <input
                type="text"
                placeholder="شماره تماس"
                className="w-full border border-gray-300 rounded-md p-3 text-right text-gray-800
"
                dir="rtl"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div className="flex justify-end items-center mb-6 md:mb-8">
              <label className="text-gray-600 text-sm mr-2">
                مرا به خاطر بسپار
              </label>
              <input type="checkbox" className="h-4 w-4" />
            </div>
            <button
              onClick={handleSubmit}
              disabled={!isValidPhone}
              className={`w-full py-3 rounded-md font-medium transition duration-200 ${
                isValidPhone
                  ? "bg-[#1e5bc5] text-white hover:bg-[#1b6bfa]"
                  : "bg-[#C4D9FF] text-white cursor-not-allowed"
              }`}
            >
              ارسال کد
            </button>

            {/* <button
              onClick={handleSubmit}
              className="w-full bg-blue-200 text-gray-800 py-3 rounded-md font-medium hover:bg-blue-300 transition duration-200"
            >
              ارسال کد
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
