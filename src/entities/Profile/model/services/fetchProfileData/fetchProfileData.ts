import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Profile } from '../../types/profileSchema'

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>('profile/fetchProfileData', async (_, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI

  console.log('test 1 >> ', 1)

  try {
    const response = await extra.api.get<Profile>('/profile')

    console.log('test 2 >> ', 2)

    return response.data
  } catch (err) {
    console.log('test 3 >> ', 3)

    return rejectWithValue('error')
  }
})
