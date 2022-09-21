import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import audioPlayerReducer from './slices/audioPlayerSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    audioPlayer: audioPlayerReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch