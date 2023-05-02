import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LocationDetailScreen } from '../screens/home';
import { MenuScreen } from '../screens';

export type MenuNavigatorProps = {
    menu: undefined;
    locationDetail: undefined;
};

const MenuNavigator: React.FunctionComponent = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="menu"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="menu" component={MenuScreen} />
        </Stack.Navigator>
    );
};

export default MenuNavigator;
