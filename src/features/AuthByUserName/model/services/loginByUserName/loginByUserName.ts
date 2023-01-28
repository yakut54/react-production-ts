import { User, userActions } from 'entities/User'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'

interface LoginByUserNameProps {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<
  User,
  LoginByUserNameProps,
  ThunkConfig<string>
>('login/loginByUserName', async (authData, thunkAPI) => {
  const { extra, dispatch, rejectWithValue } = thunkAPI

  try {
    const response = await extra.api.post<User>('/login', authData)

    if (!response.data) {
      throw new Error()
    }

    dispatch(userActions.setAuthData(response.data))

    return response.data
  } catch (err) {
    return rejectWithValue('error')
  }
})
