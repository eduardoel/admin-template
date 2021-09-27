interface AuthInputProps {
    labelAuthInput: string
    valueAuthInput: any
    requiredAuthInput?: boolean
    notRenderAuthInput?: boolean //confirm password
    typeAuthInputProps?: 'text' | 'email' | 'password'
    valueChengeAuthInput: (newValue: any) => void
}

export default function AuthInput(props: AuthInputProps) {
    return (
        <div className={`flex flex-col`}>
            <label>{props.labelAuthInput}</label>
            <input 
                type={props.typeAuthInputProps ?? 'text'}
                value={props.valueAuthInput}
                onChange={e => props.valueChengeAuthInput?.(e.target.value)}
                required={props.requiredAuthInput}
            />
        </div>
    )
}