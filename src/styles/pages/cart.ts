import styled from "styled-components";

export const Container = styled.main`
    padding: 6.5rem 2rem 3rem 2rem;

    color: ${props => props.theme.colors.text};

    .cart-empty {
        text-align: center;
        height: 30rem;
    }

    @media (max-width: 598px) {
        padding: 6rem 3.5vw 3rem 3.5vw;
    }
`

export const Wrapper = styled.section`
    position: relative;
    
    .cart-checkout-section {
        position: sticky;
        background: ${props => props.theme.colors.background};
        bottom: 0;
        padding: 2rem 0;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        border: none;

        h1 {
            font-size: 2rem;
        }

        button {
            width: 24.5rem;
            height: 3.5rem;
            margin-top: .5rem;
        }

        .cart-payment-methods {
            display: flex;
            gap: .25rem;

            img {
                margin-top: 1rem;
                height: auto;
                width: 3.25rem;
            }
        }
    }

    @media (max-width: 887px) {
        .cart-checkout-section {
            padding: 1rem 0;

            h1 {
                font-size: 1.75rem;
            }

            button {
                height: 3rem;
                width: 22.75rem;
            }

            .cart-payment-methods {
                img {
                    margin-top: .75rem;
                    width: 3rem;
                }
            }
        }
    }

    @media (max-width: 598px) {
        .cart-checkout-section {
            padding: .5rem 0;

            h1 {
                font-size: 1.5rem;
            }

            button {
                height: 2.5rem;
                width: 19.9rem
            }

            .cart-payment-methods {
                img {
                    margin-top: .75rem;
                    width: 2.6rem;
                }
            }
        }
    }
`

export const Product = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;

    img {
        height: auto;
        width: 175px;
        cursor: pointer;
    }

    &:first-child {
        padding-bottom: 1.5rem;
    }


    & + div {
        padding: 1.5rem 0;
        border-top: 1px solid ${props => props.theme.colors.lightBorder};
    }

    @media (max-width: 598px) {
        &:first-child {
            padding-bottom: 1rem;
        }

        & + div {
            padding: 1rem 0;
        }

        img {
            width: 150px;
        }
    }
    
    @media (max-width: 450px) {
        img {
            width: 100px;
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

    @media (max-width: 450px) {
        margin-left: .5rem;

        h1 {
            font-size: 1.25rem;
        }

        h2 {
            font-size: 1rem;
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