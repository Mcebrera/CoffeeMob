import React from 'react';
import { View } from 'react-native';
import LocationHeader from './LocationHeader';
import { useTheme } from '../context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const OrderContainer: React.FunctionComponent<{
    children: React.ReactNode;
}> = ({ children }) => {
    const insets = useSafeAreaInsets();
    const [theme] = useTheme();

    return (
        <View style={{ flex: 1, backgroundColor: theme.white }}>
            <LocationHeader />
            {/* Main container */}
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: theme.brown.light,
                }}>
                {children}
            </View>
        </View>
    );
};

export default OrderContainer;
