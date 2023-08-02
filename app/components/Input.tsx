import { styled } from 'styled-components';
import { InputHTMLAttributes } from 'react';

const StyledInput = styled.input`
    width: 100%;
    padding: 5px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 1rem;
`;

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return <StyledInput {...props} />;
};

export default Input;
