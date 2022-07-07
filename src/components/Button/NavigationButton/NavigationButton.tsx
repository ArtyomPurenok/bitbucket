import React from "react"
import { Link } from "react-router-dom"
import './NavigationButton.scss'

type ButtonProps = {
    className?: string
    onClick?: any
    text?: string
    Icon?: any
    route: string
}

export const NavigationButton = ({className, onClick, text, route, Icon}: ButtonProps) => {
    return <Link to={route}>
        <button className={className} onClick={onClick}>
            {Icon && <Icon height='100%'/>}
            {text}
        </button>
    </Link>
}