import React from 'react';
import Orientation from 'react-native-orientation-locker';
import LaunchScreen from './src/screens/LaunchScreen';
import { RootContainerProvider } from './src/context/ContextContainer';
import { ThemeProvider } from './src/context/ThemeContext';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

Orientation.lockToPortrait();

export default function App() {
    return (
        <RootContainerProvider>
            <ThemeProvider>
                <ActionSheetProvider>
                    <LaunchScreen />
                </ActionSheetProvider>
            </ThemeProvider>
        </RootContainerProvider>
    );
}
