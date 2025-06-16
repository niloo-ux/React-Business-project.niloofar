import { create } from "zustand";
import { persist } from "zustand/middleware";

const uidStore = create(
  persist(
    (set) => ({
      uid: null,
      mobile: "",
      token: "",

      // setter functions
      setUid: (uid) => set({ uid }),
      setMobile: (mobile) => set({ mobile }),
      setToken: (token) => set({ token }),

      // clear functions
      clearUid: () => set({ uid: null }),
      clearMobile: () => set({ mobile: "" }),
      clearToken: () => set({ token: "" }),

      // clear all
      clearUser: () => set({ uid: null, mobile: "", token: "" }),
    }),
    {
      name: "auth-storage",
      getStorage: () =>
        typeof window !== "undefined" ? localStorage : undefined,
    }
  )
);

export default uidStore;
// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

// const useuidStore = create(persist((set) => ({
//   Uid: "",

//   // Add an item to the basket
//   addUId: (id) => set({Uid:id}),

//   // Clear all items from the basket
//   clearUId: () => set({ Uid:"" }),

//   // Remove the entire storage item from localStorage
//   resetStorage: () => {
//     localStorage.removeItem('jooje-uid-storage');
//         set({ Uid: "" }); // Optionally reset the state too
//    },
// }),
// {
//     name: "jooje-uid-storage", // Name of the storage item in localStorage
//     getStorage: () => localStorage, // Specify the storage to use (localStorage)
//   }
// ));

// export default useuidStore;
