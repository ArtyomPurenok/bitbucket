import './Input.scss'

type InputProps = {
    className?: string
    onChange?: any
    placeholder?: string
    Icon?: any
    type?: string
}

export const Input = ({className, onChange, placeholder, Icon, type}: InputProps) => {
    return <input type={type} className={className} onChange={onChange} placeholder={placeholder}>
        {Icon && <Icon height='100%'/>}
    </input>
}