import React from 'react';
import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    useWindowDimensions,
} from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { OrderContainer } from '../../components';
import { TextStyles } from '../../styles';

const HomeScreen: React.FunctionComponent<any> = ({ navigation }) => {
    const [theme] = useTheme();

    const { height, width } = useWindowDimensions();

    const cardSelection = [
        {
            title: 'Beverages',
            image: require('../../assets/images/IcedLatte.png'),
        },
        {
            title: 'Food',
            image: require('../../assets/images/Crossaint.png'),
        },
        {
            title: 'Coffee Bags',
            image: require('../../assets/images/Crossaint.png'),
        },
        {
            title: 'Merch',
            image: require('../../assets/images/Merch.png'),
        },
    ];

    return (
        <OrderContainer>
            <ScrollView showsVerticalScrollIndicator={false} horizontal>
                {cardSelection.map((section, i) => (
                    <View
                        key={i}
                        style={{
                            flex: 1,
                            height: (height - 40) / 1.5,
                            padding: 20,
                            width: width - 80,
                            borderRadius: 8,
                            marginTop: 20,
                            marginRight: 20,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            backgroundColor: theme.white,
                        }}>
                        <Text
                            style={[
                                TextStyles.largeTitle,
                                { color: theme.brown.primary },
                            ]}>
                            {section.title}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </OrderContainer>
    );
};

export default HomeScreen;
