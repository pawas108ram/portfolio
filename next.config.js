/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        domains: [
            'camo.githubusercontent.com',
            'user-images.githubusercontent.com',
            'logowik.com',
            'www.svgrepo.com',
            'cdn.worldvectorlogo.com',
            'upload.wikimedia.org',
            'freelogopng.com',
            'www.sarkarinaukriexams.com',
            'cdn.iconscout.com',
        ],
    },
    env: {
        NEXT_PUBLIC_RESUME_URL: process.env.NEXT_PUBLIC_RESUME_URL,
    },
};

module.exports = nextConfig;
