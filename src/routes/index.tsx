import React from "react";
import { NavigationContainer } from '@react-navigation/native'

import { AuthRouter } from './auth.routes'

//importante para quando precisar fazer um goBack

export function Routes(){
    return(
        <NavigationContainer>
            <AuthRouter />
        </NavigationContainer>
    )
}