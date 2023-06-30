import Link from 'next/link';
import { styled, StyleSheetManager } from 'styled-components';
import { ButtonStyle, PrimaryBtnProps } from './Button';
import isPropValid from '@emotion/is-prop-valid';

const StyledLink = styled(Link)<PrimaryBtnProps>`
    ${ButtonStyle}
`;
const ButtonLink = (props: PrimaryBtnProps) => {
    return (
        <StyleSheetManager shouldForwardProp={isPropValid}>
            <StyledLink {...props}></StyledLink>
        </StyleSheetManager>
    );
};
export default ButtonLink;
