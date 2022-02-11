import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            headerBackground: string;
            background: string;
            white: string;

            gray300: string;
            gray700: string;

            text: string;
            textLighter: string,
            buttonText: string;
        },
    }

    export interface LightTheme {
        title: string;

        colors: {
            primary: string;
            headerBackground: string;
            background: string;
            white: string;

            gray300: string;
            gray700: string;

            text: string;
            textLighter: string,
            buttonText: string;
        },
    }
}