module.exports = {
  pathPrefix: "/calculator-greutate",
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        additionalData: `@import "${__dirname}/src/sass/main";`,
        implementation: require("node-sass"),
      },
    },
  ],
};
