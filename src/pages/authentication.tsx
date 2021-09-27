import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

export default function Authentication() {

    const [mode, setMode] = useState<'signIn'| 'signUp'>('signIn') // signIn = login | signUp = registration
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function submit() {
        if(mode === 'signIn') {
            console.log('login')
        } else {
            console.log('register')
        }
    }

    return (
        <div className={`flex flex-col h-screen items-center justify-center`}>
            <div className={`w-1/2`}>

                <h1 className={`
                    text-xl font-bold mb-5
                `}>
                    {mode === 'signIn' ? 'Login with your Account' : 'Register on the Platform'}
                </h1>
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

                <button onClick={submit} className={`
                    w-full bg-indigo-500 hover:bg-indigo-400
                    text-white rounded-lg px-4 py-3 mt-6
                `}>
                    {mode === 'signIn' ? 'SignIn' : 'SignUp'}
                </button>

                <hr className="my-6 border-gray-400 w-full" />

                <button onClick={submit} className={`
                    w-full bg-red-500 hover:bg-red-400
                    text-white rounded-lg px-4 py-3
                `}>
                    Google
                </button>
            </div>
        </div>
    )
}