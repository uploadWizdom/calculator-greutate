exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig();
  if (config.mode === "production") {
    // Turn off source maps in production
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};
