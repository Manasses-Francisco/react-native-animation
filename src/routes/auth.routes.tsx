import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {SignIn} from "../screens/signin";
import { Welcome } from "../screens/welcome";

const {Screen,Navigator} = createNativeStackNavigator();

const AuthRoutes = () => {

    return (
        <Navigator
            initialRouteName="Welcome"
            screenOptions={{
                headerShown:false
            }}
        >
            <Screen name="Welcome" component={Welcome}/>
            <Screen name="Signin" component={SignIn}/>
        </Navigator>
    )
}

export {AuthRoutes}