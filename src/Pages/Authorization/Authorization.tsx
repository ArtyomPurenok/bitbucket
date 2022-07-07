import React, { useEffect, useState } from "react"
import './Authorization.scss'

import { useDispatch, useSelector } from "react-redux"
import { userDataFetch } from "../../thunkAction/userDataFetch"
import { useNavigate } from "react-router-dom"

import { Button } from "../../components/Button"
import { NavigationButton } from "../../components/Button/NavigationButton"
import { AuthorizationInputs } from "./components/AuthorizationInputs"
import { ReactComponent as OkIcon } from '../../components/Icons/UserInterface/OkIcon.svg'
import { ReactComponent as LeftArrowIcon } from '../../components/Icons/UserInterface/LeftArrowIcon.svg'
import { ReactComponent as RoundTick } from '../../components/Icons/UserInterface/RoundTick.svg'



export const Authorization = () => {
    const registriesData = useSelector((state: any) => state.user.data);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    ////////////////////////
    const [active, setActive] = useState('')

    const save = () => {
        if (active === '') {
            setActive('active')
            console.log(active);
        }else {setActive('')}
    }

    /////////////////////////
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [error, serError] = useState('')

    const [nameOk, setNameOk] = useState('')
    const [passwordOk, setPasswordOk] = useState('')

    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === 'Захар'){
            setNameOk('nameOk')
        }else {setNameOk('')}
        setName(event.target.value)
    } 
    const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === '12345678'){
            setPasswordOk('passwordOk')
        }else {setPasswordOk('')}
    setPassword(event.target.value)
    } 

    const sumbutForm = (event: any) => {
        event.preventDefault();
        const formData = {name, password};
   
        if (formData.name === 'Захар' && formData.password === '12345678') {
            serError('')
            dispatch(userDataFetch())
            navigate('/main')
        }else {serError('error')}
      }


    


    return <div className="authorization">

        <div className="authorization_title">
            <div className="authorization_title--home">
                <NavigationButton route='/main' Icon={LeftArrowIcon} text='Главная'/>
            </div>

            <h1>Авторизация</h1>
        </div>



        <div className="authorization_main">
            <form>
                <div className="authorization_input-name">
                    <AuthorizationInputs className={nameOk && 'setOk'} error={error && 'error'} Icon={nameOk && RoundTick} name='Имя' placeholder="Введите имя  (Захар)" type='text' onChange={onNameChange} />
                </div>
                
                <div className="authorization_input-name">
                <AuthorizationInputs className={passwordOk && 'setOk'} error={error && 'error'} Icon={passwordOk && RoundTick} name='Пароль' placeholder="Введите пароль  (12345678)" type='password' onChange={onPasswordChange}/>
                </div>
                {error && <p>Неверный логин или пароль</p>}
            </form>

            <div className="authorization_memory">
                <Button className={`authorization_memory--${active}`} Icon={OkIcon} onClick={save}/>
                <p>Запомнить меня на этом компьютере</p>
            </div>

            <Button className="authorization_main--button" text='Вход' onClick={sumbutForm}/>

            <a href=""><p className="authorization_main--password-reset">Забыли свой пароль?</p></a>
        </div>



        <div className="authorization_additional-authorization">
            <a href=""><p className="authorization_additional-authorization--ec">Авторизация с использованием ЕС ИФЮЛ</p></a>
            <a href=""><p className="authorization_additional-authorization--msi">Авторизация с использованием МСИ</p></a>
        </div>



        <div className="authorization_create">
            <p>У вас нет аккаунта?</p>
            <a href=""><p><span>Нажмите сюда чтобы создать</span></p></a>
        </div>


    </div>
}