import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { SplashScreen } from '../screens/SplashScreen';



const StackNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerTransparent: true, headerShown: false, title: "" }}/>
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerTransparent: true, headerShown: false, title: "" }}/>
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerTransparent: true, headerShown: false, title: "" }}/>
           
          </Stack.Navigator>
        </NavigationContainer>
      );
}

export default StackNavigator;