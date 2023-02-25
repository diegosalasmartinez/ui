import { StateCreator } from 'zustand'

export interface ThemeState {
  theme: string
  setTheme: (theme: string) => void
}

export const createThemeSlice: StateCreator<ThemeState, [], []> = (set) => ({
  theme: 'light',
  setTheme: (theme: string) => set(() => ({ theme })),
})
