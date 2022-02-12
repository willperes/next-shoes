import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    html {
        font-size: 93.75%;
    }

    body {
        position: relative;
        background: ${props => props.theme.colors.background};
    }

    body, input, textarea, select, button {
        font: 400 1rem "Roboto", sans-serif;
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1500;

        display: flex;
        justify-content: flex-end;

        right: -30rem;
        opacity: 0;
        transition: all 500ms ease-in-out;
    }
    
    .react-modal-content {
        position: relative;
        width: 100%;
        max-width: 400px;
        background: ${props => props.theme.colors.background};
        overflow: auto;

        .react-modal-close {
            position: absolute;
            left: 0;
            margin: 1rem;
            border: none;
            background: ${props => props.theme.colors.background};

            svg {
                color: ${props => props.theme.colors.text};
                height: 25px;
                width: 25px;
            }
        }
    }

    .ReactModal__Overlay--after-open{
        opacity: 1;
        right: 0;
    }

    .ReactModal__Overlay--before-close{
        opacity: 0;
        right: -30rem;
    }

    @media (max-width: 500px) {
        .react-modal-content {
            max-width: 100vw;
        }
    }
`