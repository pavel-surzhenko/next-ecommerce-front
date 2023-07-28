import { css, styled, StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import { primary } from '../_lib/colors';

export const ButtonStyle = css<PrimaryBtnProps>`
    border: 0;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    svg {
        height: 16px;
        margin-right: 5px;
    }
    ${(props) =>
        props.block &&
        css`
            display: block;
            width: 100%;
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
  ${(props) =>
        props.black &&
        !props.outline &&
        css`
            background-color: #000;
            color: #fff;
        `}
  ${(props) =>
        props.black &&
        props.outline &&
        css`
            background-color: transparent;
            color: #000;
            border: 1px solid #000;
        `}
  ${(props) =>
        props.primary &&
        !props.outline &&
        css`
            background-color: ${primary};
            border: 1px solid ${primary};
            color: #fff;
        `}
  ${(props) =>
        props.primary &&
        props.outline &&
        css`
            background-color: transparent;
            border: 1px solid ${primary};
            color: ${primary};
        `}
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
        props.disabled &&
        css`
            cursor: not-allowed;
            opacity: 0.5;
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
                onClick={props.onClick}
                black={props.black}
                block={props.block}
                href={props.href}
                white={props.white}
                outline={props.outline}
                type={props.type}
                disabled={props.disabled}
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
    onClick?: () => void;
    block?: string;
    black?: string;
    type?: string;
    disabled?: boolean;
}
