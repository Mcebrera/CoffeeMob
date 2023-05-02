import { createContext, useContext, useState } from 'react';
import { ColorTheme, LightTheme } from '../styles';
import { ColorSchemeName, useColorScheme } from 'react-native';

type ThemeContextValue = {
    theme: ColorTheme;
    setTheme: (name: ColorSchemeName) => void;
};

const ThemeContext = createContext<ThemeContextValue>({
    theme: LightTheme,
    setTheme: () => {
        throw new Error('Theme not available');
    },
});

// function to be called to get styles and change them
export const useTheme = () => {
    const value = useContext<ThemeContextValue>(ThemeContext);
    return [value.theme, value.setTheme] as const;
};

export const ThemeProvider: React.FunctionComponent<{
    children: React.ReactNode;
}> = ({ children }) => {
    // get the systems color theme
    const systemColorScheme = useColorScheme();

    // check for the system color scheme
    const currentTheme =
        systemColorScheme === 'light' ? LightTheme : LightTheme;

    // state for color theme
    const [theme, setTheme] = useState(currentTheme);

    // returns theme context for all children
    return (
        <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
