import { create } from 'zustand'

interface GenerationState {
  darkThemeColor: boolean
  showVersesRange: boolean
  fontSize: number
  setdarkThemeColor: (darkThemeColor: boolean) => void
  setshowVersesRange: (showVersesRange: boolean) => void
  setFontSize: (fontSize: number) => void
}

export const useGenerationStore = create<GenerationState>()((set) => ({
  darkThemeColor: false,
  showVersesRange: false,
  fontSize: 17,
  setdarkThemeColor: (darkThemeColor: boolean) => set({ darkThemeColor }),
  setshowVersesRange: (showVersesRange: boolean) => set({ showVersesRange }),
  setFontSize: (fontSize: number) => set({ fontSize }),
}))
