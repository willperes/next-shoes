import styled from "styled-components";

export const CustomFooter = styled.footer`
    position: absolute;
    bottom: -29.26rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.headerBackground};
    padding: 5rem 0;
    color: ${props => props.theme.colors.text};

    .footer-wrapper {
        display: flex;
        gap: 7.5rem;
        padding-bottom: 5rem;
        margin: 0 2.5rem;

        ul {
            list-style: none;
            padding: 0;

            li {
                h5 {
                    font-size: 1.5rem;
                    font-weight: 500;
                    padding-bottom: 1rem;
                    margin-bottom: 1rem;
                    border-bottom: 1px solid ${props => props.theme.colors.lightBorder};
                }

                p {
                    color: ${props => props.theme.colors.textLighter};
                    cursor: pointer;

                    &:hover {
                        color: ${props => props.theme.colors.text};
                    }
                }
            }
        }
    }

    .footer-payment-methods {
        border-top: 1px solid ${props => props.theme.colors.lightBorder};
        display: flex;
        gap: 1rem;
        margin: 0 2.5rem;
        padding-top: 1rem;
    }

    @media screen and (max-width: 840px) {
        padding: 5rem 0;
        bottom: -52.6rem;

        .footer-wrapper {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            padding-bottom: 5rem;

            ul {
                padding: 0;
                margin: 0;

                li{
                    text-align: center;

                    h5 {
                        font-size: 2rem;
                    }
                }
            }
        }
    }

    @media (max-width: 598px) {
        .footer-wrapper {
            ul {
                li {
                    h5 {
                        font-size: 1.75rem;
                    }
                }
            }
        }

        .footer-payment-methods {
            gap: .25rem;
        }
    }
`