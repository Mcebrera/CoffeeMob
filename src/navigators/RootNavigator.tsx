import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import { LocationDetailScreen } from '../screens/home';
import { LocationMapScreen } from '../screens';

const RootNavigator: React.FunctionComponent = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen
                name="tabs"
                component={TabNavigator}
                options={{
                    animation: 'fade',
                }}
            />
            <Stack.Screen
                name="locationDetail"
                component={LocationDetailScreen}
                options={{ presentation: 'modal' }}
            />
            <Stack.Screen
                name="locationMap"
                component={LocationMapScreen}
                options={{ presentation: 'modal' }}
            />
        </Stack.Navigator>
    );
};

export default RootNavigator;
