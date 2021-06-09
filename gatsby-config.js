module.exports = {
  pathPrefix: "/calculator-greutate",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-sass",
      options: {
        additionalData: `@import "${__dirname}/src/sass/main";`,
        implementation: require("node-sass"),
      },
    },
  ],
};
