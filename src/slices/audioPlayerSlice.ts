import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { getAuth, signInWithEmailAndPassword, updateCurrentUser } from 'firebase/auth'
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';




// Define a type for the slice state
interface audioPlayerState {
  trackPosition: number,
  tracksList: string[],
  isPlaying: boolean
}

// Define the initial state using that type
const initialState: audioPlayerState = {
    trackPosition: 0,
    tracksList: [],
    isPlaying: false
}

export const audioPlayerSlice = createSlice({
  name: 'audioPlayer',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTrack: (state, action) => {
      state.trackPosition = action.payload
    },
    setTrackList: (state, action) => {
        state.tracksList = action.payload
      },
  },
})

export const { setTrack, setTrackList } = audioPlayerSlice.actions

// Other code such as selectors can use the imported `RootState` type

export default audioPlayerSlice.reducer