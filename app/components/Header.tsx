'use client';
import Link from 'next/link';
import { styled } from 'styled-components';
import Container from './Container';

const StyledHeader = styled.header`
    background-color: #222;
`;

const Logo = styled(Link)`
    color: #fff;
    text-decoration: none;
`;

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Logo href={'/'}>Ecommerce</Logo>
                <nav>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/products'}>All products</Link>
                    <Link href={'/categories'}>Categories</Link>
                    <Link href={'/account'}>Account</Link>
                    <Link href={'/cart'}>Cart (0)</Link>
                </nav>
            </Container>
        </StyledHeader>
    );
};
export default Header;
