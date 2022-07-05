import React from "react"
import { Button } from "../../components/Button"
import './Authorization.scss'

import { AuthorizationInputs } from "./components/AuthorizationInputs"
import { ReactComponent as OkIcon } from '../../components/Icons/UserInterface/OkIcon.svg'



export const Authorization = () => {
    return <div className="authorization">

        <div className="authorization_title">
            <Button/>
            <h1>Авторизация</h1>
        </div>

        <div className="authorization_main">
            <AuthorizationInputs name='имя' placeholder="Введите имя" type='text'/>
            <AuthorizationInputs name='Пароль' placeholder="Введите пароль" type='password'/>

            <div className="authorization_memory">
                <Button Icon={OkIcon}/>
                <p>Запомнить меня на этом компьютере</p>
            </div>

            <Button className="authorization_main--button" text='Вход'/>

            <a href=""><p className="authorization_main--password-reset">Забыли свой пароль?</p></a>
        </div>

        <div className="authorization_additional-authorization">
            <a href=""><p className="authorization_additional-authorization--ec">Авторизация с использованием ЕС ИФЮЛ</p></a>
            <a href=""><p className="authorization_additional-authorization--msi">Авторизация с использованием МСИ</p></a>
        </div>

        <div className="authorization_create">
            <p>У вас нет аккаунта?</p>
            <a href=""><p>Нажмите сюда чтобы создать</p></a>
        </div>


    </div>
}