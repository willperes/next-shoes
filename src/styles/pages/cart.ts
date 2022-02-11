import styled from "styled-components";

export const Container = styled.main`
    max-width: 1120px;
    margin: 0 auto 1.5rem auto;
    padding: 6.5rem 2rem;

    color: ${props => props.theme.colors.text};

    h1.empty-cart {
        text-align: center;
    }

    @media (max-width: 598px) {
        padding: 6rem 3.5vw;
    }
`

export const Product = styled.div`
    display: flex;

    img {
        height: auto;
        width: 175px;
    }

    &:first-child {
        padding-bottom: 1.5rem;
    }

    & + div {
        padding: 1.5rem 0;
        border-top: 1px solid ${props => props.theme.colors.textLighter};
    }

    @media (max-width: 598px) {
        img {
            width: 150px;
        }
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 2rem;

    gap: .25rem;

    h1 {
        font-size: 1.75rem;
        line-height: 1.75rem;
    }

    h2 {
        font-size: 1.25rem;
        color: ${props => props.theme.colors.textLighter};

        span {
            font-weight: normal;
        }
    }

    h3 {
        margin-top: .25rem;
    }

    @media (max-width: 598px) {
        margin-left: 1rem;
        
        h1 {
            font-size: 1.5rem;
        }

        h2 {
            font-size: 1.25rem;
        }
    }
`

export const RemoveItem = styled.div`
    display: flex;
    align-items: center;

    margin-left: auto;

    svg {
        height: 25px;
        width: 25px;
        color: ${props => props.theme.colors.text};
    }
`