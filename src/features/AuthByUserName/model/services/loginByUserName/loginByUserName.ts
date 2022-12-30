import axios from 'axios'
import { User, userActions } from 'entities/User'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

interface LoginByUserNameProps {
  username: string
  password: string
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, { rejectValue: string }>(
  'login/loginByUserName',
  async ({ password, username }, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', { password, username })

      if (!response.data) {
        throw new Error()
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
      thunkAPI.dispatch(userActions.setAuthData(response.data))

      return response.data
    } catch (err) {
      return thunkAPI.rejectWithValue('error')
    }
  },
)
