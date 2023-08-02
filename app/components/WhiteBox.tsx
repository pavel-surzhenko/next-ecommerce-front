import { styled } from 'styled-components';

export const WhiteBox = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 30px;
    order: 2;
    max-width: 80%;
    @media screen and (min-width: 768px) {
        max-width: 40%;
        order: 0;
    }
`;
