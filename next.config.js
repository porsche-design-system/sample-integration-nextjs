const BASE_PATH = process.env.CI ? '/sample-integration-nextjs' : '';

/** @type {import('next').NextConfig} */
module.exports = {
  assetPrefix: BASE_PATH,
  env: {
    BASE_PATH,
  },
  poweredByHeader: false,
  reactStrictMode: true,
  webpack: (config) => {
    // take care of errors related to phn-navigation sourcemaps
    config.module.rules.push({ test: /\.map$/, loader: 'ignore-loader' });
    return config;
  },
};
