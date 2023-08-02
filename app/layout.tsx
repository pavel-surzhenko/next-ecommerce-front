'use client';
import StyledComponentsRegistry from './_lib/registry';
import CartContextProvider from './components/CartContext';

import { styled } from 'styled-components';
import { Poppins } from 'next/font/google';

const pop = Poppins({
    weight: ['400', '500', '600', '700'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--poppins',
});

const Body = styled.body`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: #eee;
`;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang='en'
            className={pop.className}
        >
            <head>
                <title>Ecommerce</title>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
                />
            </head>
            <StyledComponentsRegistry>
                <Body>
                    <CartContextProvider>{children}</CartContextProvider>
                </Body>
            </StyledComponentsRegistry>
        </html>
    );
}
