import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/home';

export type HomeNavigatorProps = {
    home: undefined;
    locationDetail: undefined;
    locationMap: undefined;
    selection: undefined;
};

const HomeNavigator: React.FunctionComponent = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="home"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="selection" component={HomeScreen} />
        </Stack.Navigator>
    );
};

export default HomeNavigator;
