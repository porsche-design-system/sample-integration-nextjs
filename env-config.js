const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BACKEND_URL': isProd ? '/sample-integration-nextjs' : '',
};
