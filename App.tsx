import React from 'react';
import Orientation from 'react-native-orientation-locker';
import { NavigationContainer } from '@react-navigation/native';
import LaunchScreen from './src/screens/LaunchScreen';

// Orientation.lockToPortrait();

export default function App() {
    return (
        <NavigationContainer>
            <LaunchScreen />
        </NavigationContainer>
    );
}
