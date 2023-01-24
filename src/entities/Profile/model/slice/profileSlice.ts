import { createSlice } from '@reduxjs/toolkit'
import { ProfileSchema } from '../types/profileSchema'

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: false,
  error: undefined,
  data: undefined,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    print: () => console.log('profile загрузился УРААА!!!'),
  },
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
