import React, { useEffect, useState } from "react"
import './Information.scss'

import { Input } from "../../../components/Input"
import { Button } from "../../../components/Button"

import { ReactComponent as SearchIcon } from '../../../components/Icons/UserInterface/SearchIcon.svg'
import { ReactComponent as FoldersIcon } from '../../../components/Icons/FoldersIcon.svg'


export const Information = () => {
    const [allData, setAllData] = useState({allPO: '', copyright: ''})
    fetch('https://omdbapi.com/?apikey=ed02d785&s=star')  //url взят для примера с дипломной работы 
      .then(response => response.json())
      .then((data) => setAllData({
        allPO: '13 438',
        copyright: '4 272'
      }))




    return <div className="information">


        <div className="information_description">
            <h1 className="information_description--title">РЕЕСТР ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ</h1>
            <p>Единый реестр программ для электронных вычислительных машин и баз данных</p>

            <div className="information_description--register">
                <p>Включено ПО в реестр: <span>{allData.allPO}</span></p>
                <p>Правообладателей: <span>{allData.copyright}</span></p>
            </div>

            <div className="information_search">
                <SearchIcon/>
                <Input placeholder="Искать реестр...~"/>
                <Button className="information_search--button" text="Искать"/>
            </div>
        </div>

        <div className="information_folders-icon">
            <FoldersIcon/>
        </div>
    </div>
}