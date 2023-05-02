import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { CloseButton } from '../components';

const LocationMap: React.FunctionComponent = () => {
    const windowWidth = useWindowDimensions().width;
    const coffeeCupLocation = require('../assets/images/rsz_coffeecup.png');

    const storeLocations = [
        {
            title: 'Coffee Mob - San Francisco',
            latitude: 37.78825,
            longitude: -122.4324,
        },
        {
            title: 'Santa Monica',
            latitude: 34.0195,
            longitude: 118.4912,
        },
        {
            title: 'San Diego',
            latitude: 32.7157,
            longitude: 117.1611,
        },
    ];

    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={{ width: windowWidth, height: '100%' }}
                showsUserLocation={true}
                followsUserLocation={true}>
                {storeLocations.map((location: any, index) => {
                    return (
                        <Marker
                            key={index}
                            tappable={true}
                            coordinate={location}
                            title={location.title}
                            image={coffeeCupLocation}
                            onPress={() => console.log('marker pressed')}
                        />
                    );
                })}
            </MapView>
            <View style={{ position: 'absolute', right: 20, top: 20 }}>
                <CloseButton />
            </View>
        </View>
    );
};

export default LocationMap;
