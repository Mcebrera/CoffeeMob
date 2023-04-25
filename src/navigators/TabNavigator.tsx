import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, MenuScreen, OrderScreen, MoreScreen } from '../screens';
import { CoffeeCupIcon, GearIcon, HomeIcon, MenuIcon } from '../assets/icons';
import { Text } from 'react-native';

const TabNavigator: React.FunctionComponent = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName="home"
            screenOptions={({ route }) => ({
                lazy: false,
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    const iconProps = {
                        width: 24,
                        height: 24,
                    };

                    const iconIsFocused = focused ? '#AB6B51' : '#000000';
                    switch (route.name) {
                        case 'home':
                            return (
                                <HomeIcon {...iconProps} fill={iconIsFocused} />
                            );
                        case 'order':
                            return (
                                <CoffeeCupIcon
                                    {...iconProps}
                                    fill={iconIsFocused}
                                />
                            );
                        case 'menu':
                            return (
                                <MenuIcon {...iconProps} fill={iconIsFocused} />
                            );

                        case 'more':
                            return (
                                <GearIcon {...iconProps} fill={iconIsFocused} />
                            );
                        default:
                            break;
                    }
                },
            })}>
            <Tab.Screen
                name="home"
                component={HomeScreen}
                options={{
                    title: 'Home',
                    tabBarLabel: ({ focused, color, size }) => (
                        <Text
                            style={{ color: focused ? '#AB6B51' : '#000000' }}>
                            Home
                        </Text>
                    ),
                }}
            />
            <Tab.Screen
                name="order"
                component={OrderScreen}
                options={{
                    title: 'Order',
                    tabBarLabel: ({ focused, color, size }) => (
                        <Text
                            style={{ color: focused ? '#AB6B51' : '#000000' }}>
                            Order
                        </Text>
                    ),
                }}
            />
            <Tab.Screen
                name="menu"
                component={MenuScreen}
                options={{
                    title: 'Menu',
                    tabBarLabel: ({ focused, color, size }) => (
                        <Text
                            style={{ color: focused ? '#AB6B51' : '#000000' }}>
                            Menu
                        </Text>
                    ),
                }}
            />
            <Tab.Screen
                name="more"
                component={MoreScreen}
                options={{
                    title: 'More',
                    tabBarLabel: ({ focused, color, size }) => (
                        <Text
                            style={{ color: focused ? '#AB6B51' : '#000000' }}>
                            More
                        </Text>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;
