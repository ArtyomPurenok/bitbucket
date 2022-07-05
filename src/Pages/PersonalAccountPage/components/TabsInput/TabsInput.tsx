import React from "react"
import './TabsInput.scss'

import { Input } from "../../../../components/Input"

type InputProps = {
    name?: string
    placeholder?: string
    type?: string
}

export const TabsInput = ({name, placeholder, type}: InputProps) => {
    return <div className="tabs-input">
        <p>{name}</p>
        <Input type={type} placeholder={placeholder}/>
    </div>
}