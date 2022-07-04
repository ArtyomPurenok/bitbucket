import React, { useEffect } from "react"
import './Registries.scss'

import { ReactComponent as FilterIcon } from '../../../components/Icons/UserInterface/FilterIcon.svg'
import { ReactComponent as ThreeDotsIcon } from '../../../components/Icons/UserInterface/ThreeDotsIcon.svg'

import { useDispatch, useSelector } from "react-redux"
import { registryFetch } from "../../../thunkAction/registriesFetch"
import { Button } from "../../../components/Button"
import { CreatingTable } from "./CreatingTable/CreatingTable"




export const Registries = () => {
    const registriesData = useSelector((state: any) => state.registries);  //убрать
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(registryFetch())
    }, [])



    return <div className="registries">

        <div className="registries_title">
            <h1>Реестры</h1>
            <div className="registries_title--filter">
                <Button Icon={FilterIcon}/>
                <Button Icon={ThreeDotsIcon}/>
            </div>
        </div>

        <div>
            <CreatingTable data={registriesData.data}/>
        </div>

        <div className="registries_pagination">
            Пагинация
        </div>
    </div>
}