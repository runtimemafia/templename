// store.ts
import { create } from "zustand";

interface StoreState {
  blogs: any;
  setBlog: (blogs: any) => void;
}

export const useStore = create<StoreState>((set) => ({
  blogs: null,
  setBlog: (blogs) => set({ blogs }),
}));

interface FloatingButtonState {
  isFloatingButtonVisible: boolean;
  setFloatingButtonVisible: (visible: boolean) => void;
}

export const useFloatingButtonStore = create<FloatingButtonState>((set) => ({
  isFloatingButtonVisible: true,
  setFloatingButtonVisible: (visible) =>
    set({ isFloatingButtonVisible: visible }),
}));
