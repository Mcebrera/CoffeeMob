import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../context';

const Divider: React.FunctionComponent = () => {
    const [theme] = useTheme();
    return (
        <View
            style={{
                width: '100%',
                marginVertical: 24,
                borderTopWidth: 1,
                borderColor: theme.brown.secondary,
            }}
        />
    );
};

export default Divider;
