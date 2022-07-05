import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { documentsFetch } from "../../thunkAction/documentsFetch";

const initialState: any = {
    data: null,
    error: null,
    isLoading: false,
}

const documentsDataServer: any = createSlice({
    name: 'Documents data',
    initialState,
    extraReducers: {
        [documentsFetch.pending]: (state: any) => {
            state.isLoading = true;
        },
        [documentsFetch.fulfilled]: (state: any, action: PayloadAction<any>) => {            
            state.data = action.payload;
            state.error = null;
            state.isLoading = false;
        },
        [documentsFetch.rejected]: (state: any, action: any) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
    },
    reducers: {},
})

export const {} = documentsDataServer.actions
export default documentsDataServer.reducer