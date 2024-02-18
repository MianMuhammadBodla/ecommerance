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

        },{

          protocol: 'https',
          hostname: 'img.freepik.com',

      },{
       
        protocol:'https',
        hostname:'st2.depositphotos.com',

      },{
       
        protocol:'https',
        hostname:'st3.depositphotos.com',

      },{
       
        protocol:'https',
        hostname:'st.depositphotos.com',

      },
      ],
    },
  }
  module.exports = nextConfig