// src/app/panel/layout.js

import Header from "@/components/panelcomponents/Header";
import SideBarMenu from "@/components/panelcomponents/SideBarMenu";
import "@/app/globals.css"; //فعلا اینو گذاشتم نمیدونم از استایل سراسری میگیره یا نه.

export const metadata = {
  title: "داشبورد ادمین | Melonest",
  description: "پنل مدیریت محتوای سایت Melonest",
};

export default function PanelLayout({ children }) {
  return (
    <div className="w-full flex flex-col min-h-screen overflow-y-auto bg-[#E6EFFF]">
      {/* Header - ردیف بالا */}
      <div className="w-full">
        <Header />
      </div>

      {/* ردیف دوم: محتوای اصلی و سایدبار */}
      <div className="flex flex-row">
        {/* بخش مرکزی (child) */}
        <main className="flex-1  overflow-y-auto">{children}</main>

        {/* سایدبار سمت راست */}
        <SideBarMenu />
      </div>
    </div>
  );
}
