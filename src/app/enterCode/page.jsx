"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import uidStore from "@/store/uidStore";

const Page = () => {
  const [code, setCode] = useState(Array(6).fill(""));
  const { uid, mobile, token, setToken } = uidStore();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const router = useRouter();

  const isCodeComplete = code.every((digit) => digit !== "");

  const handleInputChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;
    const updatedCode = [...code];
    updatedCode[index] = value;
    setCode(updatedCode);

    // فوکوس خودکار
    if (value && index < 5) {
      const nextInput = document.getElementById(`input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const sendCodeFunc = async (fullCode) => {
    try {
      const response = await fetch(
        "https://api.melonest.ir/api/fa/checkpassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mobile,
            uid,
            password: fullCode,
          }),
        }
      );

      const result = await response.json();

      if (!result.error) {
        setToken(result.data.token);
        router.push("/pages/userProfilePage");
        return true;
      } else {
        alert("کد اشتباه است.");
        return false;
      }
    } catch (error) {
      alert("خطا در ارتباط با سرور.");
      return false;
    }
  };

  const clickSendCodeButton = async () => {
    const fullCode = code.join("");
    if (fullCode.length === 6) {
      // برای تست، اطلاعات کاربر رو نشون بده
      setModalMessage(
        `اطلاعات شما:\nuid: ${uid}\nmobile: ${mobile}\ntoken: ${
          token || "ندارد"
        }`
      );
      setModalOpen(true);
    } else {
      setModalMessage("لطفاً کد کامل را وارد کنید.");
      setModalOpen(true);
    }
  };

  // const clickSendCodeButton = async () => {
  //   const fullCode = code.join("");
  //   if (fullCode.length === 6) {
  //     await sendCodeFunc(fullCode);
  //   } else {
  //     alert("لطفاً کد کامل را وارد کنید.");
  //   }
  // };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen lg:h-screen bg-white">
      {/* Purple sidebar */}
      <div className="w-full lg:w-1/3 bg-[#C5BAFF] flex flex-col items-center p-4 md:p-6 lg:p-10 relative mb-8 md:mb-12 lg:mb-0">
        <div className="mt-8 mb-6 lg:mb-10 text-center w-full">
          <h2 className="text-lg md:text-xl font-bold text-gray-800">
            ورود به سیستم
          </h2>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mt-4">
            خوش آمدید
          </h1>
        </div>

        <div className="hidden lg:block relative w-full h-96">
          <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-8">
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

      {/* Login form */}
      <div className="w-full lg:w-2/3 flex items-center justify-center p-6 md:p-8 lg:p-10">
        <div className="w-full max-w-md">
          <div className="text-right mb-8">
            <p className="text-gray-800 text-lg mb-6">کد تایید را وارد کنید</p>

            <div className="flex flex-row justify-between mb-4">
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  id={`input-${index}`}
                  type="text"
                  maxLength="1"
                  value={code[index]}
                  onChange={(e) => handleInputChange(e.target.value, index)}
                  className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg"
                />
              ))}
            </div>

            <div className="flex justify-between items-center mb-10 text-sm">
              <button className="text-gray-500 hover:text-gray-700">
                ارسال مجدد
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                عوض کردن شماره
              </button>
            </div>

            <button
              onClick={clickSendCodeButton}
              disabled={!isCodeComplete}
              className={`w-full py-4 rounded-md font-medium transition duration-200 text-lg ${
                isCodeComplete
                  ? "bg-[#1e5bc5] text-white hover:bg-[#1b6bfa]"
                  : "bg-[#C4D9FF] text-white cursor-not-allowed"
              }`}
            >
              ورود
            </button>
          </div>
        </div>
      </div>
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-sm text-center">
            <p className="text-gray-800 whitespace-pre-wrap">{modalMessage}</p>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-6 bg-[#7248D0] hover:bg-[#5e37be] text-white py-2 px-4 rounded"
            >
              بستن
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
