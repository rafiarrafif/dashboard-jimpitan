import { create } from "zustand";

interface HeaderSearchListStore {
  searchHousehold: string;
  setSearchHousehold: (value: string) => void;
}

export const useHeaderSearchListStore = create<HeaderSearchListStore>(
  (set) => ({
    searchHousehold: "",
    setSearchHousehold: (value: string) => set({ searchHousehold: value }),
  })
);
