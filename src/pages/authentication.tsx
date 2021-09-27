import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

export default function Authentication() {

    const [mode, setMode] = useState<'signIn'| 'signUp'>('signIn') // signIn = login | signUp = registration
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <AuthInput
                labelAuthInput="Email"
                valueAuthInput={email}
                typeAuthInputProps="email"
                valueChengeAuthInput={setEmail}
                requiredAuthInput
            />

            <AuthInput
                labelAuthInput="Password"
                valueAuthInput={password}
                typeAuthInputProps="password"
                valueChengeAuthInput={setPassword}
                requiredAuthInput
            />
        </div>
    )
}