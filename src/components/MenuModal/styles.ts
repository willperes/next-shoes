import styled from 'styled-components';

export const Content = styled.div`
    margin: 3.5rem 1rem 0 1rem;
    display: flex;
    flex-direction: column;

    nav {
        display: flex;
        flex-direction: column;
        margin-bottom: .5rem;

        button {
            height: 3rem;
            width: 25rem;
            margin-top: .5rem;
        }
    }

    .divider {
        margin: .25rem 0;
        background: ${props => props.theme.colors.lightBorder};
    }

    button {
        height: 3rem;
        width: 25rem;
        margin-top: .5rem;
    }

    .theme-switch {
        margin: 1rem auto;
    }

    @media (max-width: 598px) {
        nav {
            button {
                height: 3.5rem;
                font-size: 1.25rem;
            }
        }

        button {
            height: 3.5rem;
            font-size: 1.25rem;
        }
    }

    @media (max-width: 500px) {
        nav {
            button {
                width: 100%;
            }
        }

        button {
            width: 100%;
        }
    }
`