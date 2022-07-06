import React from "react"
import './TabsInput.scss'

import { Input } from "../../../../components/Input"

type InputProps = {
    title?: string
    placeholder?: string
    type?: string
    value?: string
    name?: string
}

export const TabsInput = ({title, placeholder, type, value, name}: InputProps) => {
    return <div className="tabs-input">
        <p>{title}</p>
        <Input name={name} value={value} type={type} placeholder={placeholder}/>
    </div>
}