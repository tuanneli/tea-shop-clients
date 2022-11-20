import {IResponse, IUser} from "../../../types/UserTypes";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IUserState {
    user: IUser,
    isLoading: boolean,
    error: string,
}

const initialState: IUserState = {
    user: {} as IUser,
    isLoading: false,
    error: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        isFetching(state) {
            state.isLoading = true;
        },
        successFetching(state, action: PayloadAction<IResponse>) {
            state.isLoading = false;
            state.error = '';
            state.user = action.payload.user;
            localStorage.setItem('token', action.payload.accessToken)
        },
        errorFetching(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});

export default userSlice.reducer;