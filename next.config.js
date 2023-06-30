/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: {
            ssr: false,
            displayName: false,
        },
    },
    images: {
        domains: [
            'pavlo-next-ecommerce.s3.eu-north-1.amazonaws.com',
            'localhost',
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pavlo-next-ecommerce.s3.eu-north-1.amazonaws.com',
            },
        ],
    },
};

module.exports = nextConfig;
