import { css, styled, StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

export const ButtonStyle = css<PrimaryBtnProps>`
    border: 0;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
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
    ${(props) =>
        props.white &&
        !props.outline &&
        css`
            background-color: #fff;
            color: #000;
        `}
        ${(props) =>
        props.white &&
        props.outline &&
        css`
            background-color: transparent;
            color: #fff;
            border: 1px solid #fff;
        `}
`;

const StyledButton = styled.button<PrimaryBtnProps>`
    ${ButtonStyle}
`;

const Button: React.FC<PrimaryBtnProps> = (props) => {
    return (
        <StyleSheetManager shouldForwardProp={isPropValid}>
            <StyledButton
                primary={props.primary}
                size={props.size}
            >
                {props.children}
            </StyledButton>
        </StyleSheetManager>
    );
};
export default Button;

export interface PrimaryBtnProps {
    children?: React.ReactNode;
    size?: string;
    primary?: string;
    href?: string;
    white?: string;
    outline?: string;
}
