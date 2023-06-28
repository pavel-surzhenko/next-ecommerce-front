'use client';
import { Roboto } from 'next/font/google';
import StyledComponentsRegistry from './_lib/registry';

import { styled } from 'styled-components';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

const Body = styled.body`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
`;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <StyledComponentsRegistry>
                <Body>{children}</Body>
            </StyledComponentsRegistry>
        </html>
    );
}
