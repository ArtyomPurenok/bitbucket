import React from "react"
import './AuthorizationInputs.scss'
import { Input } from "../../../../components/Input"

type InputsProps = {
    name?: string
    placeholder?: string
    type?: string
}


export const AuthorizationInputs = ({name, placeholder, type}: InputsProps) => {
    return <div className="authorization-inputs">
        <p>{name}</p>
        <Input type={type} placeholder={placeholder}/>
    </div>
}