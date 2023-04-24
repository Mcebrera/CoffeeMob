import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    BoardScreen,
    HomeScreen,
    InstructionsScreen,
    LaunchScreen,
    SettingsScreen,
} from '../screens';

const RootNavigator: React.FunctionComponent = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRoute={HomeScreen}
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="launch" component={LaunchScreen} />
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="board" component={BoardScreen} />
            <Stack.Screen name="instructions" component={InstructionsScreen} />
            <Stack.Screen name="settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
};

export default RootNavigator;
