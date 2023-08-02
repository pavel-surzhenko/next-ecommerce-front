import { styled } from 'styled-components';

const StyledTable = styled.table`
    width: 100%;
    /* table-layout: fixed; */
    th {
        text-align: left;
        text-transform: uppercase;
        color: #ccc;
        font-weight: 600;
        font-size: 0.7rem;
    }
    td {
        width: 33.33%;
    }
    td:nth-child(2) {
        width: 45%;
    }
`;
const Table = ({ children }: { children: React.ReactNode }) => {
    return <StyledTable>{children}</StyledTable>;
};
export default Table;
