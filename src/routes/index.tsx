import React from "react";
import { NavigationContainer } from '@react-navigation/native'

import { AuthRouter } from './auth.routes'
import { useAuth } from "../hooks/auth";
import { SignIn } from '../screens/SignIn'
//importante para quando precisar fazer um goBack

export function Routes(){
    const { user } = useAuth()

    return(
        <NavigationContainer>
            {user.id ? <AuthRouter /> : <SignIn /> }
        </NavigationContainer>
    )
}