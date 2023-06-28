import { styled } from 'styled-components';

const StyledDiv = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;

const Container = ({ children }: { children: React.ReactNode }) => {
    return <StyledDiv>{children}</StyledDiv>;
};
export default Container;
