import create from 'zustand'
import { createSidebarSlice, SidebarSlice } from './sidebar'
import { createThemeSlice, ThemeSlice } from './theme'

type StoreSlice = SidebarSlice & ThemeSlice

export const useBoundStore = create<StoreSlice>()((...a) => ({
  ...createSidebarSlice(...a),
  ...createThemeSlice(...a),
}))
