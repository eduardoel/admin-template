import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconError } from "../components/icons";
import useAuth from "../data/hook/useAuth";

export default function Authentication() {

    const { user, loginGoogle } = useAuth()

    const [error, setError] = useState(null)
    const [mode, setMode] = useState<'signIn'| 'signUp'>('signIn') // signIn = login | signUp = registration
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function showError(msg, time = 5) {
        setError(msg)
        setTimeout(() => setError(null), time * 1000)
    }

    function submit() {
        if(mode === 'signIn') {
            console.log('login')
            showError('Login error')
        } else {
            console.log('register')
            showError('Error to register')
        }
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="hidden md:block md:w-1/2 lg:w-2/3">
                <img 
                    src="https://source.unsplash.com/random"
                    alt="Image of authentication page"
                    className="h-screen w-full object-cover" />
            </div>
            <div className="m-10 w-full md:w-1/2 lg:w-1/3">
                <h1 className={`text-3xl font-bold mb-5`}>
                    {mode === 'signIn' ? 'Login with your Account' : 'Register on the Platform'}
                </h1>

                {error ? (
                    <div className={`
                        flex items-center
                        bg-red-400 text-white py-3 px-5 my-2
                        border border-red-700 rounded-lg
                    `}>
                        {IconError()}
                        <span className="ml-3">{error}</span>
                    </div>
                ): false}

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

                <hr className="my-6 border-gray-300 w-full" />

                <button onClick={loginGoogle} className={`
                    w-full bg-red-500 hover:bg-red-400
                    text-white rounded-lg px-4 py-3
                `}>
                    Google
                </button>

                {mode === 'signIn' ? (
                    <p className="mt-8">
                        New visitant ?
                        <a onClick={() => setMode('signUp')} className={`
                            text-blue-500 hover:text-blue-700 font-semibold
                            cursor-pointer
                        `}> Create a free account</a>
                    </p>
                ): (
                    <p className="mt-8">
                        Have an account ?
                        <a onClick={() => setMode('signIn')} className={`
                            text-blue-500 hover:text-blue-700 font-semibold
                            cursor-pointer
                        `}> Login</a>
                    </p>
                )}
            </div>
        </div>
    )
}