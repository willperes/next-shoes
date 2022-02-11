import styled from 'styled-components';

export const Container = styled.header`
    position: fixed;
    width: 100%;
    padding: 0 2rem 0 2rem;
    background: ${props => props.theme.colors.headerBackground}EE;
    backdrop-filter: blur(10px) saturate(2);

    z-index: 1000;

    @media (max-width: 887px) {
        nav {
            display: none;
        }

        .rightContent {
            display: none;
        }

        .menu {
            display: block;
            margin-left: auto;
        }
    }
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    height: 70px;
    
    display: flex;
    align-items: center;

    h1 {
        font-size: 2.5rem;
        color: ${props => props.theme.colors.text};
        margin-right: 3.125rem;

        cursor: pointer;
    }

    nav {
        
        a {
            color: ${props => props.theme.colors.textLighter};
            font-weight: 400;
            cursor: pointer;

            display: inline-block;
            position: relative;
            height: 4.6675rem;
            line-height: 4.6675rem;
            padding: 0 .3125rem;

            transition: color .2s;

            &:hover {
                color: ${props => props.theme.colors.text};
                font-weight: bold;
            }

            & + a {
                margin-left: 1.25rem;
            }

            &.active {
                color: ${props => props.theme.colors.text};
                font-weight: bold;
            }

            &.active::after {
                content: '';
                height: 3px;
                border-radius: 3px 3px 0 0;
                width: 100%;
                position: absolute;
                bottom: 0;
                left: 0;
                background: ${props => props.theme.colors.primary};
            }
        }
    }
`

export const RightContent = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;

    svg {
        color: ${props => props.theme.colors.text};
        height: 20px;
        width: 20px;
        margin-right: 1.25rem;

        cursor: pointer;
    }
`

export const Menu = styled.div`
    display: none;

    svg {
        color: ${props => props.theme.colors.text};
        height: 25px;
        width: 25px;
        cursor: pointer;
    }
`