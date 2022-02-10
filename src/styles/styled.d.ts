import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            background: string;

            gray300: string;
            gray700: string;

            text: string;
        },
    }
}