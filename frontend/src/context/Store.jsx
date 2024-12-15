import { create } from "zustand";

const Store = create((set) => ({
  userData: null,
  hero: async () => {
    set({ userData: [{ hero: "bro" }] });
  },
}));

export default Store;
