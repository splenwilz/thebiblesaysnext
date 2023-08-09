import { create } from 'zustand'

interface GenerationState {
  darkThemeColor: boolean
  showVersesRange: boolean
  setdarkThemeColor: (darkThemeColor: boolean) => void
  setshowVersesRange: (showVersesRange: boolean) => void
}

export const useGenerationStore = create<GenerationState>()((set) => ({
  darkThemeColor: false,
  showVersesRange: false,
  setdarkThemeColor: (darkThemeColor: boolean) => set({ darkThemeColor }),
  setshowVersesRange: (showVersesRange: boolean) => set({ showVersesRange }),
}))
