import React, { useEffect, useState } from "react"
import './Header.scss'
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { NavigationButton } from "../Button/NavigationButton"
import { Button } from "../Button"
import { Input } from "../Input"

import { ReactComponent as LogoIcon } from '../Icons/LogoIcon.svg'
import { ReactComponent as SearchIcon } from '../Icons/UserInterface/SearchIcon.svg'
import { ReactComponent as CalendarIcon } from '../Icons/UserInterface/CalendarIcon.svg'
import { ReactComponent as BellIcon } from '../Icons/UserInterface/BellIcon.svg'
import { ReactComponent as UpperArrowIcon } from '../Icons/UserInterface/UpperArrowIcon.svg'
import { ReactComponent as UserIcon } from '../Icons/UserIcon.svg'



export const Header = () => {
    const registriesData = useSelector((state: any) => state.user.data);
    const navigate = useNavigate();

    const [massage, setMassage] = useState('')
    const [userData, setUserData] = useState({
        photo: '',
        name: '',
        surname: '',
        massage: '',
    })

    const userClick = () => {
        if (!registriesData) {                   
            navigate('/authorization');
        }else {
            navigate('/personalAccount'); 
        }
    }

    useEffect(() => {
        if (registriesData) {
            setUserData(registriesData);
            if (+(registriesData.massage) >= 1) {
                setMassage('massage')
            }
        }    
    }, [registriesData])


    return <div className="header">

        <div className="header_logo-seach">
            <NavigationButton route="/main" className="header_logo" Icon={LogoIcon}/>
            <div className="header_seach">
                <SearchIcon/>
                <Input placeholder="Поиск"/>
            </div>
        </div>


        <div className="header_notification--user-calendar">
            <div className="header_calendar">
                <CalendarIcon/>
            </div>

            <div className={`header_notification ${massage && 'header_notification--massage'}`}>
                <BellIcon/>
                {+(userData.massage) >= 1 ? <div className="header_notification--number">{userData.massage}</div> : ''}
            </div>

            <button key={0} className="header_user" onClick={userClick}>
                {userData.photo ? <img className="header_user--img" src={userData.photo}/> : <div className="header_user--svg"><UserIcon/></div>}
                <p className="header_user--name">{userData.name ? `${userData.name} ${userData.surname}` : 'Вход в аккаунт'}</p>
                <UpperArrowIcon/>
            </button>
        </div>
        
    </div>
}