import React, { useEffect, useState } from "react"
import './Registries.scss'

import { ReactComponent as FilterIcon } from '../../../components/Icons/UserInterface/FilterIcon.svg'
import { ReactComponent as ThreeDotsIcon } from '../../../components/Icons/UserInterface/ThreeDotsIcon.svg'

import { useDispatch, useSelector } from "react-redux"
import { registryFetch } from "../../../thunkAction/registriesFetch"
import { Button } from "../../../components/Button"
import { CreatingTable } from "./CreatingTable/CreatingTable"




export const Registries = () => {
    const registriesData = useSelector((state: any) => state.registries);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(registryFetch(1))
    }, [])

    ///////////////////////
    const numberPages = [1,2,3,4,5];
    const [active, setActive] = useState(0);

    const openPage = (el: any) => {
        setActive(el.target.dataset.index);
        dispatch(registryFetch((el.target.dataset.index) + 1));
        console.log(active);    
    };


    const btnsPages = numberPages.map((el,index) => {
        return <button
        key={el} 
        className={`registries_pagination--button ${index == active ? 'registries_pagination--button-active' : ''}`}
        onClick={openPage}
        data-index={index}
        >{el}</button>
    })



    return <div className="registries">

        <div className="registries_title">
            <h1>Реестры</h1>
            <div className="registries_filter">
                <Button className="registries_filter-button" Icon={FilterIcon}/>
                <Button className="registries_filter-button" Icon={ThreeDotsIcon}/>
            </div>
        </div>

        <div>
            <CreatingTable data={registriesData.data}/>
        </div>

        <div className="registries_pagination">
            <Button className="registries_pagination--button" text="<<"/>
            <Button className="registries_pagination--button" text="<"/>
            {btnsPages}
            <Button className="registries_pagination--button" text=">"/>
            <Button className="registries_pagination--button" text=">>"/>
        </div>
    </div>
}