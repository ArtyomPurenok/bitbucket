import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { userDataFetch } from "../../thunkAction/userDataFetch";

const initialState: any = {
    data: null,
    error: null,
    isLoading: false,
}

const userData: any = createSlice({
    name: 'user data',
    initialState,
    extraReducers: {
        [userDataFetch.pending]: (state: any) => {
            state.isLoading = true;
        },
        [userDataFetch.fulfilled]: (state: any, action: PayloadAction<any>) => {         
            state.data = action.payload;
            state.error = null;
            state.isLoading = false;
        },
        [userDataFetch.rejected]: (state: any, action: any) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
    },
    reducers: {},
})

export const {} = userData.actions
export default userData.reducer