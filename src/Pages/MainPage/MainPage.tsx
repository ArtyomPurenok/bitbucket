import React from "react"
import './MainPage.scss'

import { Information } from "./Information"
import { Registries } from "./Registries"
import { RegistryNews } from "./RegistryNews"
import { Documents } from "./Documents"
import { Questions } from "./Questions"

export const MainPage = () => {
    return <div className="main">
        {/* <Information/> */}
        <Registries/>
        {/* <RegistryNews/> */}
        {/* <Documents/> */}
        {/* <Questions/> */}
    </div>
}