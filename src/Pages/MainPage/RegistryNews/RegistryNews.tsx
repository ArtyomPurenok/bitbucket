import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import './RegistryNews.scss'

import { registryNewsFetch } from "../../../thunkAction/registryNewsFetch"
import { Card } from "./components/Card";
import { Button } from "../../../components/Button";


export const RegistryNews = () => {
    const registriesData = useSelector((state: any) => state.news);  //убрать
    const dispatch = useDispatch();

    const [cards, setCards] = useState('No Content')

    useEffect(() => {
        dispatch(registryNewsFetch())
    }, [])

    useEffect(() => {
        if(registriesData.data != null) {
            setCards(registriesData.data.map((el: any, index: number) => {
                if (index >= 6) {
                    return
                }
                return <Card dataForCard={el}/>
            }))
        }

    }, [registriesData])


    return <div className="registry-news">
        <div>
            <h1 className="registry-news_title">Новости реестра</h1>
        </div>

        <div className="registry-news_cards">
            {cards}
        </div>

        <div className="registry-news_pagination">
            <Button text="Показать всё"/>           
        </div>

    </div>
}