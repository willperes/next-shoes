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
    position: relative;
    max-width: 1120px;
    margin: 0 auto;
    margin-bottom: 1.5rem;
    padding: 2rem 2rem 1rem 2rem;
    background: ${props => props.theme.colors.headerBackground};
    border-radius: 8px;
    border: 1px solid ${props => props.theme.colors.lightBorder};

    header {
        display: flex;
        width: 100%;
        padding-bottom: 1rem;
        border-bottom: 2px solid ${props => props.theme.colors.lightBorder};

        img {
            height: auto;
            width: 125px;
            margin-right: .75rem;
            cursor: pointer;
        }

        h1 {
            font-size: 1.5rem;
        }

        h2 {
            font-size: 1.25rem;
            font-weight: normal;
            color: ${props => props.theme.colors.textLighter};
        }

        h3 {
            color: ${props => props.theme.colors.textLighter};

            span {
                font-weight: normal;
            }
        }
    }

    footer {
        display: flex;
        width: 100%;
        height: 3rem;
        justify-content: space-between;
        align-items: center;

        .cart-product-quantity {
            display: flex;
            align-items: center;

            h2 {
                font-size: 1.25rem;
                font-weight: bold;
                color: ${props => props.theme.colors.textLighter};
                margin-right: .75rem;
            }

            button {
                height: 25px;
                width: 25px;
                font-weight: bold;
                color: ${props => props.theme.colors.textLighter};
                background: transparent;
                border: 1.5px solid ${props => props.theme.colors.lightBorder};
                border-radius: 5px;
                transition: background 0.2s, color 0.2s;

                &:hover {
                    background: ${props => props.theme.colors.primary};
                    color: ${props => props.theme.colors.white};
                }
            }

            span {
                font-weight: bold;
                margin: 0 .5rem;
            }
        }

        h3 {
            color: ${props => props.theme.colors.textLighter};
        }
    }

    @media (max-width: 598px) {
        padding: 1.25rem 1.25rem .5rem 1.25rem;

        header {
            img {
                width: 100px;
            }

            h1 {
                font-size: 1.25rem;
            }

            h2, h3 {
                font-size: 1rem;
            }
        }

        footer {
            .cart-product-quantity {
                h2 {
                    font-size: 1rem;
                }
            }

            h3 {
                font-size: 1rem;
            }
        }
    }
`

export const RemoveItem = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    right: 1.5rem;
    top: 0;
    bottom: 0;

    margin-left: auto;

    svg {
        height: 25px;
        width: 25px;
        color: ${props => props.theme.colors.text};
    }
`