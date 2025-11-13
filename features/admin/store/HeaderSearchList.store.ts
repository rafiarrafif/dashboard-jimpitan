import { create } from "zustand";

export const HeaderSearchListStore = create((set) => ({
  searchHousehold: "",
  setSearchHousehold: (value: string) => set({ searchHousehold: value }),
}));
