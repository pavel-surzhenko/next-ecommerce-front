'use client';
import StyledComponentsRegistry from './_lib/registry';

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
