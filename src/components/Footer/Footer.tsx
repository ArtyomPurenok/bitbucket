import React from "react"
import './Footer.scss'

import { ReactComponent as LogoIcon } from '../../components/Icons/LogoIcon.svg'
import { Button } from "../Button"

export const Footer = () => {
    return <div className="footer">

        <div className="footer_data">
            <div className="footer_logo-information">
                <LogoIcon/>
                <p className="footer_logo-information--information">Открытое акционерное общество <br/>«Реестр ПО» начало практическую <br/>деятельность с 1 марта 2014 г</p>

                <div className="footer_developer">
                    <h1>Разработчик</h1>
                    <p className="footer_developer--name">ОАО «Агентство сервисизации и реинжиниринга»</p>
                    <p className="footer_developer--address">Минск, улица Клары Цеткин, 24</p>
                </div>
            </div>

            <div className="footer_information">
                <h1>Информация</h1>
                <Button text="Реестры"/>
                <Button text="Новости"/>
                <Button text="Документы"/>
                <Button text="Вопросы"/>
            </div>

            <div className="footer_support">
                <h1>Техническая поддержка</h1>
                <div>
                    <p className="footer_support--work-time">Ежедневно с 8.00 до 19.00, за исключением выходных (суббота, воскресенье) и праздничных дней.</p>
                    <p>+375 25 111 22 33 </p>
                    <p>+375 29 222 44 55</p>
                    <p>ReestrPOsupport@mail.ru</p>
                </div>
            </div>

            <div className="footer_contacts">
                <h1>Контакты</h1>
                <div>
                    <p>+375 33 112 22 45</p>
                    <p>+375 29 222 44 88</p>
                    <p>ReesrtPO@mail.ru</p>
                    <p>220004 г. Минск, ул. Карла Маркса, 38</p>
                    <a href="">Связаться с поддержкой</a>
                </div>
            </div>
        </div>

        <div className="footer_rights">
            <p>© Copyright 2022 — ОАО «РеестрПО». Все права защищены.</p>
        </div>
    </div>
}