import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { registryNewsFetch } from "../../thunkAction/registryNewsFetch";

const initialState: any = {
    data: null,
    error: null,
    isLoading: false,
}

const registryNews: any = createSlice({
    name: 'Registry news',
    initialState,
    extraReducers: {
        [registryNewsFetch.pending]: (state: any) => {
            state.isLoading = true;
        },
        [registryNewsFetch.fulfilled]: (state: any, action: PayloadAction<any>) => {          
            state.data = action.payload;
            state.error = null;
            state.isLoading = false;
        },
        [registryNewsFetch.rejected]: (state: any, action: any) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
    },
    reducers: {},
})

export const {} = registryNews.actions
export default registryNews.reducer