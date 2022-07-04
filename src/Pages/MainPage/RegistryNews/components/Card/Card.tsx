import React from "react"
import './Card.scss'

import { ReactComponent as CalendarIcon } from '../../../../../components/Icons/UserInterface/CalendarIcon.svg'

type CardProps = {
    dataForCard?: any
}

export const Card = ({dataForCard}: CardProps) => {
    return <div className="card">

        <img src={dataForCard.img}/>
        <h1 className="card_title">{dataForCard.title}</h1>

        <div className="card_data">
            <CalendarIcon/>
            <p>{dataForCard.date}</p>
        </div>

        <div className="card_description">
            <p>{dataForCard.description}</p>
        </div>
    </div>
}