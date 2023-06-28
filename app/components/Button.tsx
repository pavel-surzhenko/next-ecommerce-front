import { css, styled, StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

const StyledButton = styled.button<PrimaryBtnProps>`
    border: 0;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    svg {
        height: 16px;
        margin-right: 5px;
    }
    ${(props) =>
        props.primary &&
        css`
            background-color: #5542f6;
            color: #fff;
        `};
    ${(props) =>
        props.size === 'l' &&
        css`
            font-size: 1.2rem;
            padding: 10px 20px;
            svg {
                height: 20px;
            }
        `}
`;

const Button = ({ children, size, primary }: PrimaryBtnProps) => {
    return (
        <StyleSheetManager shouldForwardProp={isPropValid}>
            <StyledButton
                primary={primary}
                size={size}
            >
                {children}
            </StyledButton>
        </StyleSheetManager>
    );
};
export default Button;

interface PrimaryBtnProps {
    children: React.ReactNode;
    size?: string;
    primary?: string;
}
