import { create } from 'zustand'

export const usePlayStore = create((set) => ({
  songId: '',
  changeSongId: (songId) => set({ songId })
}))
