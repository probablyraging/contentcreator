import { createTheme } from "@nextui-org/react";

export const darkTheme = createTheme({
    type: 'dark',
    theme: {
        colors: {
            navText: '#ffffff',
            black: '#0a0a0a',
            gradient: 'linear-gradient(112deg, #3694ff -63.59%, #adc8e7 -20.3%, var(--nextui-colors-blue600) 70.46%);',
            primary: '#3694ff',
            primaryLight: '#1d68bd',
            primaryLightHover: '#3694ff',
            primaryLightContrast: '$white',
        },
        styles: {
        }
    }
});

export const lightTheme = createTheme({
    type: 'light',
    theme: {
        colors: {
            navText: '#000000',
            gradient: 'linear-gradient(112deg, #3694ff -63.59%, #adc8e7 -20.3%, var(--nextui-colors-blue600) 70.46%);',
            primary: '#3694ff',
            primaryLight: '#1d68bd',
            primaryLightHover: '#3694ff',
            primaryLightContrast: '$white',
        },
        styles: {
        }
    }
});