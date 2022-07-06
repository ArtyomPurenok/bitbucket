import React, { useEffect } from "react"
import './MyData.scss'

import { useDispatch, useSelector } from "react-redux"

import { TabsInput } from "../../components/TabsInput"
import { Button } from "../../../../components/Button"
import { userDataFetch } from "../../../../thunkAction/userDataFetch"


export const MyData = () => {
    const user = useSelector((state: any) => state.user.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userDataFetch())
    }, [])




    return <div className="my-data">

        <div className="my-data_title">
            <img src={user?.photo}/>
            <p>{`Здравствуй, ${user?.name}!`}</p>
        </div>

        <div className="my-data_inputs">

            <h1>Основные данные</h1>

            <form className="my-data_inputs--form">
            <TabsInput name="name" title="Имя" value={user?.name}/>
            <TabsInput name="surname" title="Фамилия" value={user?.surname}/>
            <TabsInput name="patronymic" title="Отчество" value={user?.patronymic}/>
            <TabsInput name="country" title="Страна" value={user?.country}/>
            <TabsInput name="city" title="Город" value={user?.city}/>
            <TabsInput name="mobileNumber" title="Мобильный телефон" value={user?.mobileNumber}/>
            </form>
        </div>

        <div className="my-data_password">

            <h1>Пароль</h1>
            
            <div className="my-data_password--inputs">
                <TabsInput name="newPassword" title="Новый пароль"/>
                <TabsInput name="confirmPassword" title="Подтверждение пароля"/>
            </div>
        </div>

        <Button className="my-data_save" text="Сохранить"/>
    </div>
}