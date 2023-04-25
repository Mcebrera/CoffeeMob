import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';

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
        </Stack.Navigator>
    );
};

export default RootNavigator;
