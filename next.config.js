// Add next-with-images and next-transpile-modules to the webpack config
module.exports = {
  target: "serverless",
  webpack: (config) => {
    const result = {
      ...config,
    };

    // Add Polyfills to webpack entry points
    const originalEntry = result.entry;
    result.entry = async () => {
      const entries = await originalEntry();

      if (
        entries["main.js"] &&
        !entries["main.js"].includes("./polyfills.js")
      ) {
        entries["main.js"].unshift("./polyfills.js");
      }

      return entries;
    };

    return result;
  },
};
