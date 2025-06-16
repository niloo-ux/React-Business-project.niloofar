// src/components/panelcomponents/SideBarMenu.jsx

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SideBarMenu = () => {
  // آرایه آیتم‌های منو
  const menuItems = [
    {
      id: 1,
      title: "مدیریت منو",
      icon: "/panel/sidebar/menu.svg",
      subItems: [],
      route: "menu",
    },
    {
      id: 2,
      title: "مدیریت وبلاگ",
      icon: "/panel/sidebar/weblogs.svg",
      subItems: [],
      route: "menu",
    },
    {
      id: 3,
      title: "مدیریت مقالات",
      icon: "/panel/sidebar/articles.svg",
      subItems: [],
      route: "menu",
    },
    {
      id: 4,
      title: "مدیریت گالری",
      icon: "/panel/sidebar/gallery.svg",
      subItems: [],
      route: "menu",
    },
    {
      id: 5,
      title: "مدیریت نمونه کارها",
      icon: "/panel/sidebar/portfolios.svg",
      subItems: [],
      route: "menu",
    },
    {
      id: 6,
      title: "مدیریت محصولات",
      icon: "/panel/sidebar/products.svg",
      subItems: [],
      route: "menu",
    },
    {
      id: 7,
      title: "مدیریت سرویس",
      icon: "/panel/sidebar/service.svg",
      subItems: [],
      route: "menu",
    },
    {
      id: 8,
      title: "مدیریت اعضای تیم",
      icon: "/panel/sidebar/teamMembers.svg",
      subItems: [],
      route: "menu",
    },
    {
      id: 9,
      title: "مدیریت دوره ها",
      icon: "/panel/sidebar/courses.svg",
      subItems: [],
      route: "menu",
    },
    {
      id: 10,
      title: "مدیریت صفحات",
      icon: "/panel/sidebar/pages.svg",
      subItems: [],
      route: "menu",
    },
    {
      id: 11,
      title: "تخفیفات",
      icon: "/panel/sidebar/discounts.svg",
      subItems: [],
      route: "menu",
    },
    {
      id: 12,
      title: "مدیریت بنرها",
      icon: "/panel/sidebar/banners.svg",
      subItems: [],
      route: "menu",
    },
    {
      id: 13,
      title: "گروه های کاربری",
      icon: "/panel/sidebar/groups.svg",
      subItems: [],
      route: "menu",
    },
    {
      id: 14,
      title: "کاربران",
      icon: "/panel/sidebar/users.svg",
      subItems: [],
      route: "menu",
    },
    {
      id: 15,
      title: "تنظیمات",
      icon: "/panel/sidebar/settings.svg",
      subItems: [],
      route: "menu",
    },
  ];

  // برای ذخیره وضعیت باز بودن هر آیتم
  const [openItems, setOpenItems] = useState({});

  // تغییر وضعیت باز بودن آیتم
  const toggleItem = (id) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-56 bg-[#E6EFFF] flex flex-col ">
      {/* لوگو (همیشه بالا) */}
      <div className="flex justify-center py-4 bg-[#E6EFFF]">
        <h1 className="text-[24px]  text-[#483C8C]">melonest</h1>
      </div>

      {/* داشبورد (زیر لوگو) */}
      <div className="px-1 py-3 mr-1 ml-0 bg-[#FBFBFB] rounded-tr-[30px] rounded-br-[30px] cursor-pointer flex items-center justify-end">
        <span className="text-[#483C8C] font-medium text-right text-[18px] pr-2 ">
          داشبورد
        </span>
      </div>

      {/* لیست منو (اسکرول‌شونده) */}
      <ul className="mt-4 flex-1 overflow-y-auto">
        {menuItems.map((item) => (
          <li key={item.id} className="mb-2 text-[14px] text-[#483C8C]">
            {/* اگر آیتم ساب‌منو نداره → لینک‌دار باشه */}
            {item.subItems.length === 0 ? (
              <Link href={`/panel/${item.route}`}>
                <div className="flex flex-row-reverse items-center justify-between py-2 px-3 hover:bg-blue-100 rounded">
                  <div className="flex flex-row-reverse items-center">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={20}
                      height={20}
                      className="ml-4"
                    />
                    <span className="text-gray-700">{item.title}</span>
                  </div>
                  <Image
                    src="/panel/sidebar/toLeftArrow.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                  />
                </div>
              </Link>
            ) : (
              // آیتمی که ساب‌منو داره → toggle بشه
              <div
                className="flex flex-row-reverse items-center justify-between py-2 px-3 cursor-pointer hover:bg-blue-100 rounded"
                onClick={() => toggleItem(item.id)}
              >
                <div className="flex flex-row-reverse items-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={20}
                    height={20}
                    className="ml-4"
                  />
                  <span className="text-gray-700">{item.title}</span>
                </div>
                <Image
                  src={
                    openItems[item.id]
                      ? "/panel/sidebar/toDownArrow.svg"
                      : "/panel/sidebar/toLeftArrow.svg"
                  }
                  alt="arrow"
                  width={16}
                  height={16}
                />
              </div>
            )}

            {/* ساب‌منو (فقط وقتی آیتم باز شده و ساب‌منو داره) */}
            {openItems[item.id] && item.subItems.length > 0 && (
              <ul className="pr-8 mt-1">
                {item.subItems.map((sub) => (
                  <li
                    key={sub.id}
                    className="py-2 text-sm text-gray-600 hover:text-blue-800 cursor-pointer"
                  >
                    {sub.title}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      {/* <ul className="mt-4 flex-1 overflow-y-auto">
        {menuItems.map((item) => (
          <li key={item.id} className="mb-2 text-[14px] text-[#483C8C]">
            <div
              className="flex flex-row-reverse items-center justify-between py-2 px-3 cursor-pointer hover:bg-blue-100 rounded"
              onClick={() => toggleItem(item.id)}
            >
              <div className="flex flex-row-reverse items-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={20}
                  height={20}
                  className="ml-4"
                />
                <span className="text-gray-700">{item.title}</span>
              </div>
              <Image
                src={
                  openItems[item.id]
                    ? "/panel/sidebar/toDownArrow.svg"
                    : "/panel/sidebar/toLeftArrow.svg"
                }
                alt="arrow"
                width={16}
                height={16}
              />
            </div>
            {openItems[item.id] && item.subItems.length > 0 && (
              <ul className="pr-8 mt-1">
                {item.subItems.map((sub) => (
                  <li
                    key={sub.id}
                    className="py-2 text-sm text-gray-600 hover:text-blue-800 cursor-pointer"
                  >
                    {sub.title}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default SideBarMenu;
