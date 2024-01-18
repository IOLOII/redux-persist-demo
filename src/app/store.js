/**
 * react + redux + redux-persist
 * 本文来源：码农网
 * 本文链接：https://www.codercto.com/a/50062.html
 */

/**
 * react + redux-toolkit + redux-persist
 * 本文来源：CSDN
 * 本文链接：https://blog.csdn.net/zhenshu_guo/article/details/135187759
 */

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

// persist store
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// })
// 持久化配置
const persistConfig = {
  key: "root",
  storage,
}

const rootReducer = combineReducers({
  counter: counterReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)

// const myReducer = persistReducer({ key: 'root', storage }, rootReducer)
// export let store = createStore(myReducer)
// export let persistor = persistStore(store)
// export default () => {
//   return { store, persistor }
// }


