const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin();

const BASE_PATH = process.env.CI ? '/sample-integration-nextjs' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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

module.exports = withVanillaExtract(nextConfig);