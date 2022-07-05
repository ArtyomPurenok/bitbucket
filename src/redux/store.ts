import {configureStore, combineReducers} from "@reduxjs/toolkit"

import registries from "./reducer/registriesReducer"
import RegistryNews from "./reducer/registryNewsReducer"
import documentsDataServer from "./reducer/documentsReducer"


export const store = configureStore({
    reducer: {
        registries: registries,
        news: RegistryNews,
        documents: documentsDataServer,
    },
})
