import './Input.scss'

type InputProps = {
    className?: string
    onChange?: any
    placeholder?: string
    Icon?: any
}

export const Input = ({className, onChange, placeholder, Icon}: InputProps) => {
    return <input className={className} onChange={onChange} placeholder={placeholder}>
        {Icon && <Icon height='100%'/>}
    </input>
}