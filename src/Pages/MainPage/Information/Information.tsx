import React from "react"
import './Information.scss'

import { Input } from "../../../components/Input"
import { Button } from "../../../components/Button"

import { ReactComponent as SearchIcon } from '../../../components/Icons/UserInterface/SearchIcon.svg'
import { ReactComponent as FoldersIcon } from '../../../components/Icons/FoldersIcon.svg'


export const Information = () => {
    return <div className="information">


        <div className="information_description">
            <h1>РЕЕСТР ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ</h1>
            <p>Единый реестр программ для электронных вычислительных машин и баз данных</p>

            <div className="information_description--data-register">
                <p>Включено ПО в реестр: 13 438</p>
                <p>Правообладателей: 4 272</p>
            </div>

            <div className="information_search">
                <SearchIcon/>
                <Input/>
                <Button className="information_search--button" text="Искать"/>
            </div>
        </div>

        <div>
            <FoldersIcon/>
        </div>
    </div>
}