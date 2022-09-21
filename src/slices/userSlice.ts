import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { getAuth, signInWithEmailAndPassword, updateCurrentUser } from 'firebase/auth'
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';




// Define a type for the slice state
interface UserState {
  isLogged: boolean,
  userData: {} | null
}

// Define the initial state using that type
const initialState: UserState = {
  isLogged: false,
  userData: null
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    LOGIN: (state, action) => {
      state.userData = action.payload
    },
  },
})

export const { LOGIN } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type

export default userSlice.reducer