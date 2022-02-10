import styled from 'styled-components';

export const Product = styled.div`
    width: 250px;
    height: 350px;
    margin-bottom: .5rem;

    background: ${props => props.theme.colors.background};

    cursor: pointer;

    header {
        img {
            height: 250px;
            width: 250px;
            object-fit: cover;
            transition: border-radius .2s;
        }
    }

    .body {
        margin-top: .75rem;
        margin-left: .75rem;

        color: ${props => props.theme.colors.text};

        p {
            color: ${props => props.theme.colors.gray300};
            margin-bottom: .5rem;
        }

        span {
            font-size: 1.15rem;
            font-weight: bold;
        }
    }

    transition: all .2s;

    &:hover {
        transform: scale(1.05);
        border-radius: .5rem;
        box-shadow: 0 0 30px ${props => props.theme.colors.primary}80;

        header {
          img {
            border-radius: .5rem .5rem 0 0;
          }  
        }
    }

    @media (max-width: 598px) {
        width: 85vw;
        height: auto;

        padding-bottom: 1rem;

        header {
            img {
                width: 85vw;
                height: auto;
            }
        }

        .body {
            margin-top: .5rem;
            margin-left: 1rem;

            h1, span {
                font-size: 1.75rem;
            }

            p {
                font-size: 1.25rem;
            }
        }
    }

    @media (max-width: 400px) {
        .body {
            h1, span {
                font-size: 1.5rem;
            }

            p {
                font-size: 1rem;
            }
        }
    }
`