import rootReducer from 'store/reducers'

export type RootState = ReturnType<typeof rootReducer>

export type ImageType = {
  [key: string]: string
}