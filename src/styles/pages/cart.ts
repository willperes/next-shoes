import styled from "styled-components";

export const Container = styled.main`
    padding-top: 6.5rem;

    color: ${props => props.theme.colors.text};

    h1.empty-cart {
        text-align: center;
    }

    @media (max-width: 598px) {
        padding: 6rem 3.5vw 0 3.5vw;
    }
`

export const Wrapper = styled.section`
    position: relative;

    .cart-checkout-section {
        position: sticky;
        background: ${props => props.theme.colors.background};
        bottom: 0;
        padding: 2rem 0 4rem 0;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        border: none;

        h1 {
            font-size: 2rem;
        }

        button {
            width: 20rem;
            height: 3.5rem;
            margin-top: .5rem;
        }

        .cart-payment-methods {
            display: flex;
            gap: .25rem;
        }
    }
`

export const Product = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    padding: 0 2rem;

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