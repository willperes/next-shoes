import styled from 'styled-components';

export const Container = styled.section`
    padding: 6rem 2rem 6rem 2rem;
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    margin-top: 2rem;
    
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fill, minmax(249px, 1fr));

    gap: 2.675rem;

    @media (max-width: 1176px) {
        max-width: 827.25px;
    }

    @media (max-width: 887px) {
        max-width: 538.5px;
    }
`