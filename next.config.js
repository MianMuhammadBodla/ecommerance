// /** @type {import('next').NextConfig} */
// const nextConfig = {};


// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'tailwindui.com',
        //   port: '',
        //   pathname: '/account123/**',
        },{

            protocol: 'https',
            hostname: 'i.imgur.com',

        },
      ],
    },
  }
  module.exports = nextConfig