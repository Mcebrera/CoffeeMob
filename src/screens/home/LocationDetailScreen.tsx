import React from 'react';
import {
    ImageBackground,
    Text,
    TouchableOpacity,
    View,
    Linking,
} from 'react-native';
import { useTheme } from '../../context';
import { CloseXIcon } from '../../assets/icons';
import { useNavigation } from '@react-navigation/core';
import { TextStyles } from '../../styles';
import { CloseButton, Divider } from '../../components';
import { useActionSheet } from '@expo/react-native-action-sheet';

const LocationDetailScreen: React.FunctionComponent = () => {
    const [theme] = useTheme();

    const navigation = useNavigation();
    const { showActionSheetWithOptions } = useActionSheet();

    const openPhone = (phoneNumber: string) => {
        openLink(`tel://${phoneNumber}`);
    };

    const openLink = (link: string) => {
        Linking.canOpenURL(link)
            .then((canOpen) => {
                if (canOpen) {
                    Linking.openURL(link).catch((error) => {
                        console.log('could not open url');
                    });
                }
            })
            .catch((error) => {
                console.log('there was an error linking: ', error);
            });
    };

    const storeHours = [
        { day: 'Monday', storeHours: '5:00am - 9:00pm' },
        { day: 'Tuesday', storeHours: '5:00am - 9:00pm' },
        { day: 'Wednesday', storeHours: '5:00am - 9:00pm' },
        { day: 'Thursday', storeHours: '5:00am - 9:00pm' },
        { day: 'Friday', storeHours: '5:00am - 11:00pm' },
        { day: 'Saturday', storeHours: '5:00am - 11:00pm' },
        { day: 'Sunday', storeHours: '5:00am - 11:00pm' },
    ];

    const onContact = () => {
        const options = [`Call: (951) 285-9186`, 'Cancel'];
        const cancelButtonIndex = 1;

        showActionSheetWithOptions(
            {
                options,
                cancelButtonIndex,
            },
            (selectedIndex: number) => {
                switch (selectedIndex) {
                    case 1:
                        openPhone('9512859186');
                        break;
                    case cancelButtonIndex:
                    // Canceled
                }
            }
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: theme.white }}>
            <ImageBackground
                style={{ height: 260 }}
                source={require('../../assets/images/SanDiegoCityNight.jpg')}
            />
            <View
                style={{
                    top: 80,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    position: 'absolute',
                    alignItems: 'center',
                }}>
                <Text
                    style={[
                        TextStyles.calloutTitle,
                        {
                            color: theme.white,
                            opacity: 0.5,
                        },
                    ]}>
                    La Jolla
                </Text>
            </View>
            <View
                style={{
                    position: 'absolute',
                    right: 20,
                    top: 20,
                }}>
                <CloseButton />
            </View>
            <View
                style={{
                    flex: 1,
                    padding: 20,
                }}>
                <Text style={[TextStyles.largeTitle, { marginBottom: 20 }]}>
                    Store Hours:
                </Text>
                {storeHours.map((item, index) => (
                    <View
                        key={index.toString()}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingVertical: 5,
                        }}>
                        <Text
                            style={[
                                TextStyles.bold16,
                                { color: theme.brown.dark },
                            ]}>
                            {item.day}
                        </Text>
                        <Text
                            style={[
                                TextStyles.regular16,
                                { color: theme.brown.dark },
                            ]}>
                            {item.storeHours}
                        </Text>
                    </View>
                ))}
                <Divider />
                <View
                    style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: 200,
                        }}>
                        <TouchableOpacity>
                            <Text style={TextStyles.regular16}>Directions</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onContact}>
                            <Text style={TextStyles.regular16}>
                                Contact Store
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default LocationDetailScreen;
