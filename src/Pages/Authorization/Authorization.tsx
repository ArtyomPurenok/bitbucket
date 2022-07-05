import React from "react"
import { Button } from "../../components/Button"
import './Authorization.scss'

import { AuthorizationInputs } from "./components/AuthorizationInputs"



export const Authorization = () => {
    return <div className="authorization">

        <div>
            <Button/>
            <h1>Авторизация</h1>
        </div>

        <div>
            <AuthorizationInputs name='имя' placeholder="Введите имя"/>
        </div>

    </div>
}