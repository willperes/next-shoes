import styled from 'styled-components';

export const Button = styled.button`
    background: ${props => props.theme.colors.primary};
    border: none;

    color: ${props => props.theme.colors.text};
    font-weight: bold;

    padding: .75rem 1.5rem;
    border-radius: .3rem;

    transition: box-shadow .2s;

    &:hover {
        box-shadow: 0 0 10px ${props => props.theme.colors.primary};
    }
`