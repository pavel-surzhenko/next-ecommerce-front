import { ClipLoader } from 'react-spinners';
import { styled } from 'styled-components';

export function Spinner() {
    return (
        <SpinnerWrapper>
            <ClipLoader color='#222' />
        </SpinnerWrapper>
    );
}

const SpinnerWrapper = styled.div`
    display: grid;
    place-items: center;
    height: 80vh;
`;
