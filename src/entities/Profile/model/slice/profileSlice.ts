import { createSlice } from '@reduxjs/toolkit'
import { ProfileSchema } from '../types/profileSchema'

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: false,
  error: undefined,
  data: undefined,
  testText: 'test text',
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    print: (state) => {
      state.testText = 'profile загрузился ʕʘ‿ಠʔ'
    },
  },
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
