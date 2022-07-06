import React from "react"
import './AuthorizationInputs.scss'
import { Input } from "../../../../components/Input"

type InputsProps = {
    className?: string
    name?: string
    placeholder?: string
    type?: string
    onChange?: any
    Icon?: any
    error?: string
}


export const AuthorizationInputs = ({name, placeholder, type, onChange, className, Icon, error}: InputsProps) => {
    return <div>

        <label className={`authorization-inputs authorization-inputs_${error && 'error'}`}>
            <p>{name}</p>
            <div className={`authorization-inputs_input-icon ${className}`}>
                <Input type={type} placeholder={placeholder} onChange={onChange}/>
                {Icon && <Icon/>}
            </div>
        </label>
        
    </div>
}