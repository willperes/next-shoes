import styled from 'styled-components';

export const Content = styled.div`
    margin: 4rem 1rem 0 1rem;
    display: flex;
    flex-direction: column;

    nav {
        display: flex;
        flex-direction: column;

        button {
            height: 3rem;

            & + button {
                margin-top: .5rem;
            }
        }
    }

    .divider {
        margin: .75rem 0;
        background: ${props => props.theme.colors.textLighter};
    }

    button {
        height: 3rem;

        & + button {
            margin-top: .5rem;
        }
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
`