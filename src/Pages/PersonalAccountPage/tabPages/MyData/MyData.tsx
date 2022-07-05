import React from "react"
import './MyData.scss'

import { TabsInput } from "../../components/TabsInput"
import { Button } from "../../../../components/Button"

export const MyData = () => {
    return <div className="my-data">

        <div>
            <img src=""/>
            <p>Здравствуй, Захар!</p>
        </div>

        <div className="my-data_inputs">
            <TabsInput name="Имя"/>
            <TabsInput name="Фамилия"/>
            <TabsInput name="Отчество"/>
            <TabsInput name="Страна"/>
            <TabsInput name="Город"/>
            <TabsInput name="Мобильный телефон"/>
        </div>

        <div className="my-data_password">
            <h1>Пароль</h1>
            <div className="my-data_password--inputs">
                <TabsInput name="Новый пароль"/>
                <TabsInput name="Подтверждение пароля"/>
            </div>
        </div>

        <Button className="my-data_save"/>
    </div>
}