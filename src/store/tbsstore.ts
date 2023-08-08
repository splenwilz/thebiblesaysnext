import { create } from 'zustand'

interface GenerationState {
  darkThemeColor: boolean
  setdarkThemeColor: (darkThemeColor: boolean) => void
}

export const useGenerationStore = create<GenerationState>()((set) => ({
  darkThemeColor: false,
  setdarkThemeColor: (darkThemeColor: boolean) => set({ darkThemeColor }),
}))
