import { StateSchema } from 'app/providers/StoreProvider'

export const getTestText = (state: StateSchema) => state.profile?.testText