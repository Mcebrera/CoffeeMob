import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { CloseXIcon } from '../assets/icons';
import { useTheme } from '../context';
import { useNavigation } from '@react-navigation/core';

const CloseButton: React.FunctionComponent = () => {
    const [theme] = useTheme();
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <View
                style={{
                    height: 36,
                    width: 36,
                    borderRadius: 20,
                    backgroundColor: '#e5e5ea',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0.3,
                }}>
                <CloseXIcon
                    width={32}
                    height={32}
                    fill={theme.black}
                    opacity={0.7}
                />
            </View>
        </TouchableOpacity>
    );
};

export default CloseButton;
