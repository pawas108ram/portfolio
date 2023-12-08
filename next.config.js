/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ["@svgr/webpack"]
        });
    
        return config;
    },
    
    images: {
        dangerouslyAllowSVG: true,
        domains:['camo.githubusercontent.com','user-images.githubusercontent.com','logowik.com','www.svgrepo.com','cdn.worldvectorlogo.com','upload.wikimedia.org','freelogopng.com','www.sarkarinaukriexams.com','cdn.iconscout.com']
    }
}

module.exports = nextConfig
