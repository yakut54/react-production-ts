import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import { User, UserSchema } from '../types/userSchema'

const initialState: UserSchema = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(action.payload))
      state.authData = action.payload
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
      if (user) {
        state.authData = JSON.parse(user)
      }
    },
    logout: (state) => {
      state.authData = undefined
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)
    },
  },
})

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
