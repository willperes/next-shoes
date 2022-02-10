import styled from 'styled-components';

export const Main = styled.main`
    padding: 5rem 2rem 5rem 2rem;

    color: ${props => props.theme.colors.text};
`

export const Wrapper = styled.section`
    max-width: 1120px;
    margin: 2rem auto 0 auto;

    display: flex;
    justify-content: center;

    .content {
        width: 22.5rem;
        margin-left: 2.5rem;
        margin-top: 1.5rem;

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
            width: 20rem;
            height: 3.5rem;
        }

        p {
            width: 20rem;
        }
    }
`