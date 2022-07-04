import React from "react"
import './MainPage.scss'

import { Information } from "./Information"
import { Registries } from "./Registries"

export const MainPage = () => {
    return <div className="main">
        {/* <Information/> */}
        <Registries/>
    </div>
}