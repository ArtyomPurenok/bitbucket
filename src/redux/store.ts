import {configureStore, combineReducers} from "@reduxjs/toolkit"

import registries from "./reducer/registriesReducer"


export const store = configureStore({
    reducer: {
        registries: registries,
    },
})
