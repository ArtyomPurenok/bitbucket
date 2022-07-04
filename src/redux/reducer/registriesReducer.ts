import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { registryFetch } from "../../thunkAction/registriesFetch";
// import { postsFetch } from "../../thunkAction/postsFetch"

const initialState: any = {
    data: null,
    error: null,
    isLoading: false,
}

const registries: any = createSlice({
    name: 'Registry data',
    initialState,
    extraReducers: {
        [registryFetch.pending]: (state: any) => {
            state.isLoading = true;
        },
        [registryFetch.fulfilled]: (state: any, action: PayloadAction<any>) => {          
            state.data = action.payload;
            state.error = null;
            state.isLoading = false;
        },
        [registryFetch.rejected]: (state: any, action: any) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
    },
    reducers: {},
})

export const {} = registries.actions
export default registries.reducer