/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
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
            'pavlo-next-ecommerce.s3.amazonaws.com',
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
