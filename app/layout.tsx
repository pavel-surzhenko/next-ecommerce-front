'use client';
import StyledComponentsRegistry from './_lib/registry';

import { styled } from 'styled-components';

const Body = styled.body`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #eee;
`;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <head>
                <title>Ecommerce</title>
                <link
                    rel='icon'
                    href='%PUBLIC_URL%/favicon.ico'
                    sizes='any'
                />
            </head>
            <StyledComponentsRegistry>
                <Body>{children}</Body>
            </StyledComponentsRegistry>
        </html>
    );
}
