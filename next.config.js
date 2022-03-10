const BASE_PATH = process.env.CI ? '/sample-integration-nextjs' : '';

module.exports = {
  assetPrefix: BASE_PATH,
  env: {
    BASE_PATH,
  },
};
