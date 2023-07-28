'use client';
import Link from 'next/link';
import { styled } from 'styled-components';
import Container from './Container';
import { HTMLAttributes, useContext, useState, useEffect } from 'react';
import { CartContext } from './CartContext';
import NavIcon from './icons/NavIcon';

const StyledHeader = styled.header`
    background-color: #222;
`;

const Logo = styled(Link)`
    color: #fff;
    text-decoration: none;
    position: relative;
    z-index: 3;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
`;

const NavLink = styled(Link)`
    display: block;
    color: #aaa;
    text-decoration: none;
    padding: 10px 0px;
    @media screen and (min-width: 768px) {
        padding: 0;
    }
`;

const StyledNav = styled.nav<StyledNavProps>`
    display: ${(props) => (props.$mobileNavActive ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 70px 20px 20px;
    background-color: #222;
    gap: 15px;

    @media screen and (min-width: 768px) {
        display: flex;
        position: static;
        padding: 0;
    }
`;

const NavButton = styled.button`
    background-color: transparent;
    border: 0;
    width: 30px;
    height: 30px;
    color: #fff;
    cursor: pointer;
    position: relative;
    z-index: 3;
    @media screen and (min-width: 768px) {
        display: none;
    }
`;

const Header = () => {
    const { cartProducts } = useContext(CartContext);
    const [navActive, setNavActive] = useState(false);

    useEffect(() => {
        if (navActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [navActive]);

    return (
        <StyledHeader>
            <Container>
                <Wrapper>
                    <Logo href={'/'}>Ecommerce</Logo>
                    <StyledNav $mobileNavActive={navActive}>
                        <NavLink href={'/'}>Home</NavLink>
                        <NavLink href={'/products'}>All products</NavLink>
                        <NavLink href={'/categories'}>Categories</NavLink>
                        <NavLink href={'/account'}>Account</NavLink>
                        <NavLink href={'/cart'}>
                            Cart ({cartProducts.length})
                        </NavLink>
                    </StyledNav>
                    <NavButton onClick={() => setNavActive((prev) => !prev)}>
                        <NavIcon />
                    </NavButton>
                </Wrapper>
            </Container>
        </StyledHeader>
    );
};
export default Header;

interface StyledNavProps extends HTMLAttributes<HTMLElement> {
    $mobileNavActive: boolean;
}
