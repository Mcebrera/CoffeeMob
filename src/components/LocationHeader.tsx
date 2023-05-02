import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TextStyles } from '../styles';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { HomeNavigatorProps } from '../navigators/HomeNavigator';
import { ChevronDownIcon } from '../assets/icons';

const LocationHeader: React.FunctionComponent = () => {
    const [theme] = useTheme();

    const insets = useSafeAreaInsets();
    const navigation = useNavigation<NavigationProp<HomeNavigatorProps>>();

    return (
        <View
            style={{
                height: 60,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: insets.top,
                marginHorizontal: 20,
                backgroundColor: theme.white,
            }}>
            <TouchableOpacity
                onPress={() => navigation.navigate('locationDetail')}
                style={{
                    left: 0,
                    zIndex: 1,
                    position: 'absolute',
                }}>
                <Image source={require('../assets/images/Map.png')} />
            </TouchableOpacity>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text>Location: </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('locationMap')}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text
                            style={[TextStyles.bold15, { color: theme.black }]}>
                            La Jolla
                        </Text>
                        <ChevronDownIcon
                            height={20}
                            width={20}
                            fill={theme.black}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LocationHeader;
