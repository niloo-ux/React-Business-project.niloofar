"use client";

import { useState } from "react";
import Link from "next/link";

export default function Page() {
  // ساخت آرایه اطلاعات نمونه برای جدول
  const [items, setItems] = useState([
    { id: 1, title: "محتوای اول" },
    { id: 2, title: "محتوای دوم" },
    { id: 3, title: "محتوای سوم" },
    { id: 4, title: "محتوای چهارم" },
    { id: 5, title: "محتوای پنجم" },
    { id: 6, title: "محتوای ششم" },
    { id: 7, title: "محتوای هفتم" },
    { id: 8, title: "محتوای هشتم" },
  ]);

  // تابع حذف آیتم
  const handleDelete = (id) => {
    console.log(`حذف آیتم با شناسه ${id}`);
    // در اینجا می‌توانید منطق حذف واقعی را پیاده‌سازی کنید
  };

  // تابع ویرایش آیتم
  const handleEdit = (id) => {
    console.log(`ویرایش آیتم با شناسه ${id}`);
    // در اینجا می‌توانید منطق ویرایش واقعی را پیاده‌سازی کنید
  };

  return (
    <div className="p-14 bg-[#FBFBFB] mt-2 ml-2 rounded-[10px] " dir="rtl">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-[#483C8C]">لیست منوی بالا</h2>
        <Link href="/panel/menu/create">
          <div className="cursor-pointer">
            <span className="text-[#483C8C] bg-[#E8F9FF] text-[16px] rounded-[10px] px-14 py-1 hover:bg-[#d6f2ff] transition">
              + اضافه کردن منوی جدید
            </span>
          </div>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden border border-[#D2D2D2]">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#DFD9FF] text-[#483C8C] border border-[#D2D2D2]">
              <th className="py-3 px-1 text-center text-sm font-medium border border-[#D2D2D2]">
                #
              </th>
              <th className="py-3 px-4 text-right text-sm font-medium border border-[#D2D2D2]">
                منوی مادر
              </th>
              <th className="py-3 px-4 text-right text-sm font-medium border border-[#D2D2D2]">
                عنوان منو
              </th>
              <th className="py-3 px-4 text-right text-sm font-medium border border-[#D2D2D2]">
                ویرایش
              </th>
              <th className="py-3 px-4 text-right text-sm font-medium border border-[#D2D2D2]">
                حذف
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr
                key={item.id}
                className={`border border-[#D2D2D2] ${
                  index % 2 === 0 ? "bg-[#E8F9FF]" : "bg-[#FBFBFB]"
                }`}
              >
                <td className="py-3 px-1 text-sm border text-center border-[#D2D2D2]">
                  {index + 1}
                </td>
                <td className="py-3 px-4 text-sm border border-[#D2D2D2]">
                  {item.title}
                </td>
                <td className="py-3 px-4 text-sm border border-[#D2D2D2]">
                  {item.title}
                </td>
                <td className="py-3 px-4 border border-[#D2D2D2]">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="bg-[#DFD9FF] p-2 rounded-md text-purple-600"
                  >
                    <img
                      src="/panel/menu/editIcon.svg"
                      alt="ویرایش"
                      className="h-5 w-5"
                    />
                  </button>
                </td>
                <td className="py-3 px-4 border border-[#D2D2D2]">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-[#DFD9FF] p-2 rounded-md text-purple-600"
                  >
                    <img
                      src="/panel/menu/deleteIcon.svg"
                      alt="حذف"
                      className="h-5 w-5"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <button className="bg-[#DFD9FF] text-[#483C8C] px-4 py-2 rounded-md text-[20px] justify-start">
          ذخیره
        </button>
      </div>
    </div>
  );
}
