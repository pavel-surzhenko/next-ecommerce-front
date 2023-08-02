import { styled } from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
`;

const Container = ({ children }: { children: React.ReactNode }) => {
    return <StyledDiv>{children}</StyledDiv>;
};
export default Container;
