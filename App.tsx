import React from 'react';
import Orientation from 'react-native-orientation-locker';
import { NavigationContainer } from '@react-navigation/native';
import LaunchScreen from './src/screens/LaunchScreen';
import { RootContainerProvider } from './src/context/ContextContainer';

Orientation.lockToPortrait();

export default function App() {
    return (
        <RootContainerProvider>
            <LaunchScreen />
        </RootContainerProvider>
    );
}
