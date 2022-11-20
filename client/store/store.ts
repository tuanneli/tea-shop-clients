import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/UserReducer/UserSlice";

const rootReducer = combineReducers({
    userReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type AppStoreType = ReturnType<typeof setupStore>;
export type RootStateType = ReturnType<typeof rootReducer>;
export type RootDispatchType = AppStoreType['dispatch'];