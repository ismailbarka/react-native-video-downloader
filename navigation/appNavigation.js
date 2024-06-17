import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DownloadsScreen from '../screens/DownloadsScreen';
import TestScreen from '../screens/TestScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {



        return (
            <NavigationContainer >
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen options={{headerShown: false, presentation: 'modal'}} name="Home" component={HomeScreen} />
                    <Stack.Screen options={{headerShown: false, presentation: 'modal'}} name="Test" component={TestScreen} />
                    <Stack.Screen name="Downloads" component={DownloadsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
  }