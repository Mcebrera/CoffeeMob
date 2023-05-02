import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MenuScreen, RewardsScreen, MoreScreen } from '../screens';
import {
    AccountCircleIcon,
    CoffeeCupIcon,
    MenuIcon,
    StarIcon,
} from '../assets/icons';
import { Text } from 'react-native';
import { useTheme } from '../context';
import HomeNavigator from './HomeNavigator';
import { MenuNavigator } from '.';

const TabNavigator: React.FunctionComponent = () => {
    const Tab = createBottomTabNavigator();
    const [theme] = useTheme();

    const iconIsFocused = (focused: boolean) =>
        focused ? theme.brown.secondary : theme.black;

    return (
        <Tab.Navigator
            initialRouteName="home"
            screenOptions={({ route }) => ({
                lazy: false,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: theme.brown.primary,
                    height: 90,
                    paddingTop: 10,
                },
                tabBarIcon: ({ focused }) => {
                    const iconProps = {
                        width: 24,
                        height: 24,
                    };

                    switch (route.name) {
                        case 'homeNav':
                            return (
                                <CoffeeCupIcon
                                    {...iconProps}
                                    fill={iconIsFocused(focused)}
                                />
                            );
                        case 'menuNav':
                            return (
                                <MenuIcon
                                    {...iconProps}
                                    fill={iconIsFocused(focused)}
                                />
                            );
                        case 'rewardsNav':
                            return (
                                <StarIcon
                                    {...iconProps}
                                    fill={iconIsFocused(focused)}
                                />
                            );

                        case 'moreNav':
                            return (
                                <AccountCircleIcon
                                    {...iconProps}
                                    fill={iconIsFocused(focused)}
                                />
                            );
                        default:
                            break;
                    }
                },
            })}>
            <Tab.Screen
                name="homeNav"
                component={HomeNavigator}
                options={{
                    title: 'Home',
                    tabBarLabel: ({ focused, color }) => (
                        <Text style={{ color: iconIsFocused(focused) }}>
                            Home
                        </Text>
                    ),
                }}
            />
            <Tab.Screen
                name="menuNav"
                component={MenuNavigator}
                options={{
                    title: 'Menu',
                    tabBarLabel: ({ focused, color }) => (
                        <Text style={{ color: iconIsFocused(focused) }}>
                            Menu
                        </Text>
                    ),
                }}
            />
            <Tab.Screen
                name="rewardsNav"
                component={RewardsScreen}
                options={{
                    title: 'Rewards',
                    tabBarLabel: ({ focused, color }) => (
                        <Text style={{ color: iconIsFocused(focused) }}>
                            Rewards
                        </Text>
                    ),
                }}
            />

            <Tab.Screen
                name="moreNav"
                component={MoreScreen}
                options={{
                    title: 'More',
                    tabBarLabel: ({ focused, color }) => (
                        <Text style={{ color: iconIsFocused(focused) }}>
                            More
                        </Text>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;
