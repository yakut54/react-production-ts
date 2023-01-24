import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { createReduxStore } from 'app/providers/StoreProvider/config/store'
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'

interface StoreProviderProps {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
  )

  return <Provider store={store}>{children}</Provider>
}