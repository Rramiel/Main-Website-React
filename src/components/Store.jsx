import { create } from "zustand";

export const useStore = create((set) => ({
  jakiObrazLook: null,
  tekst: "start",

  setJakiObrazLook: (v) => set({ jakiObrazLook: v }),
  setTekst: (t) => set({ tekst: t }),
}));