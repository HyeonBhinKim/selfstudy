import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, storage } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
    user: userReducer,
})

const persistConfig = {
    key: 'root',
    storage,
}

persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] // 이런 행동에 무시한다
        }
    }),
    //
})

export const persistor = persistStore(store);
// 리덕스 persist 사용하려면 src/index.js에 PersistGate 사용