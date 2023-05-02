import { StyleSheet } from 'react-native';

export enum FontWeight {
    Thin = '100',
    UltraLight = '200',
    Light = '300',
    Regular = '400',
    Medium = '500',
    Semibold = '600',
    Bold = '700',
    Heavy = '800',
    Black = '900',
}

export const TextStyles = StyleSheet.create({
    regular12: {
        fontSize: 12,
        fontWeight: FontWeight.Regular,
    },
    regular13: {
        fontSize: 13,
        fontWeight: FontWeight.Regular,
    },
    regular15: {
        fontSize: 15,
        fontWeight: FontWeight.Regular,
    },
    regular16: {
        fontSize: 16,
        fontWeight: FontWeight.Regular,
    },
    medium15: {
        fontSize: 15,
        fontWeight: FontWeight.Medium,
    },
    medium16: {
        fontSize: 16,
        fontWeight: FontWeight.Medium,
    },
    medium18: {
        fontSize: 18,
        fontWeight: FontWeight.Medium,
    },
    bold15: {
        fontSize: 15,
        fontWeight: FontWeight.Bold,
    },
    bold16: {
        fontSize: 16,
        fontWeight: FontWeight.Bold,
    },
    largeTitle: {
        fontSize: 24,
        fontWeight: FontWeight.Regular,
        letterSpacing: 1.2,
    },
    calloutTitle: {
        fontSize: 72,
        fontWeight: FontWeight.Regular,
        letterSpacing: 1.6,
    },
});
