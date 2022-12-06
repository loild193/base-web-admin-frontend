import { StateCreator } from 'zustand'

export interface ThemeSlice {
  mode: string
  color: string
  setMode: (payload: string) => void
  setColor: (payload: string) => void
}

export const createThemeSlice: StateCreator<ThemeSlice, [], [], ThemeSlice> = (set) => ({
  mode: '',
  color: '',
  setMode: (payload: string) =>
    set(() => ({
      mode: payload,
    })),
  setColor: (payload: string) =>
    set(() => ({
      color: payload,
    })),
})
