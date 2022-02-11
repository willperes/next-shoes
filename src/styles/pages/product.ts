import styled from 'styled-components';

export const Main = styled.main`
    padding: 5rem 0;

    color: ${props => props.theme.colors.text};

    @media (max-width: 598px) {
        padding: 4rem 0;
    }
`

export const Wrapper = styled.section`
    max-width: 1120px;
    margin: 2rem auto 0 auto;

    display: flex;
    justify-content: center;

    img {
        height: auto;
        width: 60%;
        margin-left: 2rem;
    }

    .content {
        width: 22.5rem;
        margin: 1.5rem 2rem 0 1.5rem;

        h1 {
            font-size: 2rem;
            line-height: 1.75rem;
        }

        h2 {
            margin-bottom: .5rem;

            font-weight: normal;
            color: ${props => props.theme.colors.gray300};
        }
        
        button {
            margin: 1rem 0;
            width: 18rem;
            height: 3.5rem;
        }

        p {
            width: 18rem;
        }
    }

    @media (max-width: 850px) {
        flex-direction: column;
        align-items: center;

        img {
            width: 92.5vw;
            margin: 0;
        }

        .content {
            width: 100%;
            max-width: 92.5vw;
            margin: 0;
            margin-top: 1.5rem;

            p {
                width: 100%;
            }

            button {
                width: 92.5vw;
                height: 4rem;
                font-size: 1.5rem;
            }
        }
    }

    @media (max-width: 598px) {
        .content {
            margin-top: 1.25rem;
            
            h1 {
                font-size: 1.75rem;
            }

            h2, h3 {
                font-size: 1.25rem;
            }

            button {
                font-size: 1.25rem;
                height: 3.5rem;
            }
        }
    }
`