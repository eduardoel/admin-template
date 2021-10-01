import { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import route from 'next/router'
import firebase from '../../firebase/config'
import UserModel from '../../models/UserModel';

interface AuthContextProps {
    user?: UserModel
    loading?: boolean
    login?: (email: string, password: string) => Promise<void>
    signUp?: (email: string, password: string) => Promise<void>
    loginGoogle?: () => Promise<void>
    logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function normalizedUser(userFirebase: firebase.User): Promise<UserModel> {
    const token = await userFirebase.getIdToken()
    return {
        uid: userFirebase.uid,
        name: userFirebase.displayName,
        email: userFirebase.email,
        token,
        provider: userFirebase.providerData[0].providerId,
        imageUrl: userFirebase.photoURL
    }
}

function manageCookie(logged: boolean){
    if(logged) { Cookies.set('admin-template-auth', logged, {
        expires: 7
    }) 
    } else {
        Cookies.remove('admin-template-auth')
        }
    }

export function AuthProvider(props) {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<UserModel>(null)

    async function configureSession(userFirebase) {
        if(userFirebase?.email) {
                const user = await normalizedUser(userFirebase)
                setUser(user)
                manageCookie(true)
                setLoading(false)
                return user.email
            } else {
                const user = await normalizedUser(userFirebase)
                setUser(user)
                manageCookie(false)
                setLoading(false)
                return false
            }
        }

    async function signUp(email, password) {
        try {
            setLoading(true)
            const resp = await firebase.auth().createUserWithEmailAndPassword(email, password)
            await configureSession(resp.user) route.push('/') 
        } finally { 
            setLoading(false) 
        } 
    }

    async function login(email, password) {
        try {
            setLoading(true)
            const resp = await firebase.auth().signInWithEmailAndPassword(email, password)
            await configureSession(resp.user) route.push('/') 
        } finally { 
            setLoading(false) 
        } 
    }

    async function loginGoogle() {
        try {
            setLoading(true)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth().GoogleAuthProvider())
            configureSession(resp.user)
            route.push('/') 
        } finally {
            setLoading(false)
        }
    }
    
    async function logout() {
        try {
            setLoading(true) 
            await firebase.auth().singOut() 
            await configureSession(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if(Cookies.get('admin-template-auth')) {
            const cancel = firebase.auth().onIfTokenChanged(configureSession)
            return () => cancel() 
        } 
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            signUp,
            login,
            loginGoogle,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext