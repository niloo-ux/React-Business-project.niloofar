import React from "react";
const Business = () => {
  return (
    <div className="bg-[#FBFBFB]">
      <div className="max-w-6xl mx-auto flex lg:flex-row flex-col max-sm:flex items-center justify-between mt-20 px-4 ">
        <div className="relative w-[400px] h-[460px] rounded-[10px] bg-[#C4D9FF] mb-12 bottom-7 max-sm:w-[250px] max-sm:h-[288px] max-sm:mb-6">
          <img
            src="/creating voice.png"
            alt="creating voice"
            className="w-[340px] h-[420px] ml-7 mt-5 max-sm:w-[227px] max-sm:h-[260px] max-sm:ml-3 max-sm:mt-4"
          />
        </div>
        <div className="relative flex-1 w-full">
          <h2 className="lg:text-right text-center lg:mb-[20px] text-xl font-bold text-[#4c489d] mr-12 pr-1 max-sm:mr-0 max-sm:whitespace-nowrap max-sm:text-[12px] max-sm:font-semibold max-sm:mb-7">
            تجارت الکترونیک خود را از یک پنل واحد کنترل کنید
          </h2>
          <div
            dir="rtl"
            className="grid grid-cols-1 sm:grid-cols-2 max-sm:grid-cols-2 gap-5 max-sm:gap-14 max-sm:w-full text-right justify-items-center"
          >
            <div
              dir="ltr"
              className="bg-[#eaf6ff] p-2 w-[280px] h-[230px] rounded-tl-[50px] rounded-br-[50px] mr-14 max-sm:mr-13 max-sm:w-[140px] max-sm:h-[180px]"
            >
              <img
                src="/registry-editor.png"
                alt="registry-editor"
                className="w-[40px] h-[40px] ml-5 max-sm:float-right max-sm:w-[30px] max-sm:h-[30px]"
              />
              <div className="font-semibold text-center mt-8 text-[#483C8C] max-sm:relative top-4 max-sm:pb-2 max-sm:ml-13">
                ویرایشگر
              </div>
              <div className="text-sm text-[#483C8C] mb-10 pl-8 pt-7 p-10 max-sm:mt-6 max-sm:relative bottom-8 max-sm:whitespace-nowrap max-sm:text-[9px] right-6">
                وب‌سایت خود را با عناصر آماده
                <span className="block">و بدون نیاز به دانش کدنویسی</span>
                <span className="block ml-10">سفارشی‌سازی کنید</span>
              </div>
            </div>
            <div
              dir="ltr"
              className="relative bg-[#eaf6ff] w-[280px] h-[230px] rounded-tl-[50px] rounded-br-[50px] mt-20 top-10 max-sm:mt-1 max-sm:top-0 max-sm:w-[140px] max-sm:h-[180px] mx-sm:relative left-5"
            >
              <img
                src="/transportation.png"
                alt="transportation"
                className="w-[40px] h-[40px] ml-5 mt-4 max-sm:float-right max-sm:mr-3 max-sm:w-[30px] max-sm:h-[30px]"
              />
              <div className="font-semibold lg:pl-6 text-[#483C8C] text-center p-20 whitespace-nowrap pt-5 mr-18 pr-8 max-sm:p-14 max-sm:relative top-2 right-9 max-sm:text-[12px]">
                فرآیندهای حمل و نقل
              </div>
              <div className="relative text-sm text-[#483C8C] mr-16 pb-40 p-1 mb-5 bottom-11 max-sm:bottom-10 max-sm:mr-1 max-sm:relative max-sm:text-center max-sm:whitespace-nowrap max-sm:text-[12px]">
                هر مرحله از تایید سفارش
                <span className="block ml-2">تا تحویل را پیگیری کنید</span>
              </div>
            </div>

            <div
              dir="ltr"
              className="relative bg-[#eaf6ff] p-4 w-[280px] h-[230px] rounded-tl-[50px] rounded-br-[50px] bottom-20 mb-9 mr-12 max-sm:mr-13 max-sm:top-4 max-sm:w-[140px] max-sm:h-[180px]"
            >
              <img
                src="/payment.png"
                alt="payment"
                className="w-[50px] h-[50px] ml-3 max-sm:float-right max-sm:w-[30px] max-sm:h-[30px]"
              />
              <div className="font-semibold text-[#483C8C] text-center mt-2 pt-18 ml-1 max-sm:p-14 max-sm:relative right-16 bottom-3 max-sm:whitespace-nowrap">
                دریافت پرداخت
              </div>
              <div className="text-sm text-[#483C8C] text-center mb-2 pt-10 pr-10 ml-10 max-sm:ml-0 max-sm:pr-0 max-sm:pt-1 max-sm:mt-30 max-sm:relative bottom-12 max-sm:whitespace-nowrap max-sm:text-[12px]">
                با خیال راحت و سریع
                <span className="block max-sm:relative right-3">
                  پرداخت‌ها را دریافت کنید
                </span>
              </div>
            </div>

            <div
              dir="ltr"
              className="relative bg-[#eaf6ff] p-4 w-[280px] h-[230px] rounded-tl-[50px] rounded-br-[50px] text-center top-8 mb-12 left-4 max-sm:top-6 max-sm:left-5 max-sm:w-[140px] max-sm:h-[180px]"
            >
              <img
                src="/note.png"
                alt="note"
                className="w-[40px] h-[40px] ml-3 mt-4 max-sm:float-right max-sm:w-[30px] max-sm:h-[30px] max-sm:mt-1"
              />
              <div className="font-semibold text-[#483C8C] p-5 max-sm:relative top-9 max-sm:mr-9 max-sm:whitespace-nowrap">
                ایجاد فاکتور
              </div>
              <div className="relative text-sm text-[#483C8C] p-11 pr-15 whitespace-nowrap bottom-16 mt-9 max-sm:bottom-3 max-sm:p-2 max-sm:text-[10px] right-5">
                فاکتورها را برای مشتریان خود به
                <span className="block ml-3">سرعت و به راحتی ایجاد کنید</span>
              </div>
            </div>

            <div
              dir="ltr"
              className="relative bg-[#eaf6ff] p-4 w-[280px] h-[230px] rounded-tl-[50px] rounded-br-[50px] bottom-40 mt-8 mr-10 right-4 shadow-sm max-sm:mr-41 max-sm:bottom-12 max-sm:relative left-8 ml-4 max-sm:w-[140px] max-sm:h-[180px]"
            >
              <img
                src="/account-management.png"
                alt="account managment"
                className="w-[40px] h-[40px] ml-6 mt-4 max-sm:float-right max-sm:w-[30px] max-sm:h-[30px]"
              />
              <div className="font-semibold text-[#483C8C] text-center p-3 ml-1 max-sm:relative top-12 right-3 max-sm:mr-8 max-sm:whitespace-nowrap ">
                مدیریت محصول
              </div>
              <div className="text-sm text-[#483C8C] mt-4 mr-14 max-sm:mr-9 max-sm:text-center max-sm:relative top-6 left-5 max-sm:whitespace-nowrap max-sm:text-[10px]">
                ترکیبات، ویژگی‌ها و
                <span className="block"> انواع محصول را برای</span>
                <span className="block  max-sm:relative right-6">
                  سهولت خرید در نظر بگیرید
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Business;
