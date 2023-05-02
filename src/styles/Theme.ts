import { ColorValue } from 'react-native/types';

export type ColorTheme = {
    black: ColorValue;
    white: ColorValue;
    grey: {
        primary: ColorValue;
    };
    brown: {
        light: ColorValue;
        dark: ColorValue;
        primary: ColorValue;
        secondary: ColorValue;
    };
    blueGreen: ColorValue;
    cornFlower: ColorValue;
};
