import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TextStyles } from '../styles';

const RewardsScreen: React.FunctionComponent = () => {
    const [theme] = useTheme();
    const insets = useSafeAreaInsets();

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor: theme.brown.secondary,
                paddingTop: insets.top + 20,
                paddingHorizontal: 20,
            }}>
            <Text style={TextStyles.largeTitle}>Rewards</Text>
        </View>
    );
};

export default RewardsScreen;
