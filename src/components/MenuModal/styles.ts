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
        background: ${props => props.theme.colors.gray700};
    }

    button {
        height: 3rem;

        & + button {
            margin-top: .5rem;
        }
    }
`