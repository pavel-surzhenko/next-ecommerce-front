import { styled } from 'styled-components';

const StyledTable = styled.table`
    width: 100%;
    th {
        text-align: left;
        text-transform: uppercase;
        color: #ccc;
        font-weight: 600;
        font-size: 0.7rem;
    }
`;
const Table = ({ children }: { children: React.ReactNode }) => {
    return <StyledTable>{children}</StyledTable>;
};
export default Table;
