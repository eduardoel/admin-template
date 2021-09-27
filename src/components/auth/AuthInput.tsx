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
        <div className={`flex flex-col mt-4`}>
            <label>{props.labelAuthInput}</label>
            <input 
                type={props.typeAuthInputProps ?? 'text'}
                value={props.valueAuthInput}
                onChange={e => props.valueChengeAuthInput?.(e.target.value)}
                required={props.requiredAuthInput}
                className={`
                    px-4 py-3 rounded-lg bg-gray-200 mt-2
                    border focus:border-blue-500 focus:bg-white
                    focus:outline-none`}
            />
        </div>
    )
}