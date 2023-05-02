import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../context';
import { OrderContainer } from '../components';

const MenuScreen: React.FunctionComponent = () => {
    const [theme] = useTheme();

    return (
        <OrderContainer>
            <Text>Menu</Text>
        </OrderContainer>
    );
};

export default MenuScreen;
