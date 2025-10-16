import React from 'react'
import LOCALSTORAGE_KEYS from '../constants/localstorage.js'
import { Navigate, Outlet } from 'react-router'

const AuthMiddleware = () => {
    const auth_token = localStorage.getItem(LOCALSTORAGE_KEYS.AUTH_TOKEN)
    if(auth_token){
        return <Outlet/>
    }
    else{
        return <Navigate to={'/login'}/>
    }
    
}

export default AuthMiddleware