import { StateCreator } from 'zustand'

export interface SidebarSlice {
  shiftLeft: boolean
  setShiftLeft: (payload: boolean) => void
}

export const createSidebarSlice: StateCreator<SidebarSlice, [], [], SidebarSlice> = (set) => ({
  shiftLeft: false,
  setShiftLeft: (payload: boolean) =>
    set(() => ({
      shiftLeft: payload,
    })),
})
