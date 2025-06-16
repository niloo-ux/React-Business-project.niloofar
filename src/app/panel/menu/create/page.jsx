//panel/menu/create/page.jsx

"use client";

import { useState } from "react";

export default function Page() {
  const posts = [
    {
      id: 1,
      title: "مقاله اول درباره React",
      slug: "first-post-about-react",
      category: "توسعه وب",
    },
    {
      id: 2,
      title: "آموزش جامع JavaScript",
      slug: "complete-javascript-guide",
      category: "برنامه نویسی",
    },
    {
      id: 3,
      title: "نکات پیشرفته CSS",
      slug: "advanced-css-tips",
      category: "طراحی وب",
    },
    {
      id: 4,
      title: "بهینه سازی عملکرد سایت",
      slug: "website-performance-optimization",
      category: "سئو",
    },
    {
      id: 5,
      title: "معرفی فریمورک Vue.js",
      slug: "introduction-to-vuejs",
      category: "توسعه فرانت اند",
    },
  ];
  const [menuItems, setMenuItems] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    value: "",
    post: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    const payload = {
      business_id: 1,
      type: "home",
      language: "fa",
      parent_id: null,
      title: formData.title,
      linktype: 0,
      category: "main",
      post: formData.post,
      value: formData.value,
    };

    try {
      const res = await fetch("https://menu.melonest.ir/api/en/menus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!data.error) {
        // اضافه کردن آیتم جدید به جدول
        setMenuItems((prev) => [
          ...prev,
          {
            name: formData.title,
            parentMenu: "—",
            referenceTitle: formData.post,
            linkType: "داخلی",
            description: "—",
            status: "فعال",
            actions: "—",
          },
        ]);

        // پاک‌سازی فرم
        setFormData({ title: "", value: "", post: "" });
        alert("منو با موفقیت اضافه شد.");
      } else {
        alert(data.message || "خطا در ثبت منو.");
      }
    } catch (err) {
      console.error(err);
      alert("خطا در اتصال به سرور.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#FBFBFB] h-screen p-6 mt-2 ml-2 mb-2 " dir="rtl">
      <h1 className="text-xl mb-6 font-medium text-[#483C8C]">
        ایجاد منوی جدید
      </h1>

      {/* جدول نمایش آیتم‌های اضافه‌شده */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#DFD9FF] text-[14px]">
              <th className="border p-2 text-center text-[#483C8C]">زبان</th>
              <th className="border py-2 px-2 text-center text-[#483C8C]">
                منوی مادر
              </th>
              <th className="border p-2 text-center text-[#483C8C]">
                عنوان منو
              </th>
              <th className="border p-2 text-center text-[#483C8C]">
                نوع لینک
              </th>
              <th className="border p-2 text-center text-[#483C8C]">
                بخش بندی
              </th>
              <th className="border p-2 text-center text-[#483C8C]">پست</th>
              <th className="border p-2 text-center text-[#483C8C]">لینک</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-[#D2D2D2] bg-[#E8F9FF] text-[14px]">
              <td className="py-5 px-1 tborder text-center border-[#D2D2D2]">
                <select className="w-full h-full border-0 bg-transparent focus:outline-none">
                  <option value="fa">fa</option>
                  <option value="en">en</option>
                </select>
              </td>

              <td className="py-5 px-1 border border-[#D2D2D2]">
                <select className="w-full h-full border-0 bg-transparent text-[14px] focus:outline-none">
                  <option value={null}>منوی مادر</option>
                </select>
              </td>

              <td className="py-5 px-1 text-sm border border-[#D2D2D2]">
                <input
                  type="text"
                  className="w-full h-full border-0 bg-transparent focus:outline-none"
                />
              </td>

              <td className="py-5 px-1 border border-[#D2D2D2]">
                <select className="w-full h-full border-0 bg-transparent focus:outline-none">
                  <option value="internal">لینک داخلی</option>
                  <option value="external">لینک خارجی</option>
                </select>
              </td>

              <td className="py-5 px-1 border border-[#D2D2D2]">
                <select className="w-full h-full border-0 bg-transparent focus:outline-none">
                  <option value="no-category">بدون بخش بندی</option>
                </select>
              </td>

              <td className="py-5 px-1 border border-[#D2D2D2]">
                <select className="w-full h-full border-0 bg-transparent focus:outline-none">
                  <option value="no-post">بدون پست</option>
                  {posts.map((post) => (
                    <option key={post.id} value={post.id}>
                      {post.title}
                    </option>
                  ))}
                </select>
              </td>

              <td className="py-5 px-1 border border-[#D2D2D2]">
                <input
                  type="text"
                  readOnly
                  className="w-full h-full border-0 bg-transparent focus:outline-none"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="px-6 py-2 rounded-[10px] font-bold text-[#483C8C] bg-[#DFD9FF] hover:bg-[#3d3377] transition"
        >
          {isSubmitting ? "در حال ذخیره..." : "ذخیره"}
        </button>
      </div>
    </div>
  );
}

// import { useState } from "react";

// export default function Page() {
//   const [menuItems, setMenuItems] = useState([]);

//   return (
//     <div className="bg-[#FBFBFB] p-6 font-sans" dir="rtl">
//       <h1 className="text-xl mb-6 font-medium text-[#483C8C]">
//         ایجاد منوی جدید
//       </h1>

//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-[#DFD9FF]">
//               <th className="border border-[#D2D2D2] p-2 text-right text-[#483C8C]">
//                 نام
//               </th>
//               <th className="border border-[#D2D2D2]  p-2 text-right text-[#483C8C]">
//                 منوی مادر
//               </th>
//               <th className="border border-[#D2D2D2] p-2 text-right text-[#483C8C]">
//                 عنوان مرجع
//               </th>
//               <th className="border border-[#D2D2D2] p-2 text-right text-[#483C8C]">
//                 نوع لینک
//               </th>
//               <th className="border border-[#D2D2D2] p-2 text-right text-[#483C8C]">
//                 توضیحات مختصر
//               </th>
//               <th className="border border-[#D2D2D2] p-2 text-right text-[#483C8C]">
//                 وضعیت
//               </th>
//               <th className="border border-[#D2D2D2] p-2 text-right text-[#483C8C]">
//                 عملیات
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {menuItems.length > 0 ? (
//               menuItems.map((item, index) => (
//                 <tr
//                   key={index}
//                   className={index % 2 === 0 ? "bg-[#E8F9FF]" : "bg-[#FBFBFB]"}
//                 >
//                   <td className="border border-[#D2D2D2] p-2">{item.name}</td>
//                   <td className="border border-[#D2D2D2] p-2">
//                     {item.parentMenu}
//                   </td>
//                   <td className="border border-[#D2D2D2] p-2">
//                     {item.referenceTitle}
//                   </td>
//                   <td className="border border-[#D2D2D2] p-2">
//                     {item.linkType}
//                   </td>
//                   <td className="border border-[#D2D2D2] p-2">
//                     {item.description}
//                   </td>
//                   <td className="border border-[#D2D2D2] p-2">{item.status}</td>
//                   <td className="border border-[#D2D2D2] p-2">
//                     {item.actions}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr className="bg-[#E8F9FF]">
//                 <td className="border border-[#D2D2D2] p-2"></td>
//                 <td className="border border-[#D2D2D2] p-2"></td>
//                 <td className="border border-[#D2D2D2] p-2"></td>
//                 <td className="border border-[#D2D2D2] p-2"></td>
//                 <td className="border border-[#D2D2D2] p-2"></td>
//                 <td className="border border-[#D2D2D2] p-2"></td>
//                 <td className="border border-[#D2D2D2] p-2"></td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       <div className="mt-4">
//         <button className="px-4 py-2 rounded text-white bg-[#483C8C]">
//           ذخیره
//         </button>
//       </div>
//     </div>
//   );
// }
