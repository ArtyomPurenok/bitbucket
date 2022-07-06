import './Input.scss'

type InputProps = {
    className?: string
    onChange?: any
    placeholder?: string
    Icon?: any
    type?: string
    value?: string
    name?: string
}

export const Input = ({className, onChange, placeholder, Icon, type, value, name}: InputProps) => {
    return <input name={name} value={value} type={type} className={className} onChange={onChange} placeholder={placeholder}>
        {Icon && <Icon height='100%'/>}
    </input>
}