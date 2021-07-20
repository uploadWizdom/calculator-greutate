import * as React from "react";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

const style = require("./layout.module.scss");

export const Layout = ({ children, location }) => {
  React.useEffect(() => {
    ReactGA.pageview(`${location.pathname}${location.search}`);
  }, [location]);

  return (
    <section className={style.body}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />

        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, initial-scale=1.0"
        />
        <title>
          Homepage - Institutul Național pentru Sănătatea Mamei și Copilului
          ”Alessandrescu-Rusescu” București
        </title>
      </Helmet>

      <Header />
      <main>{children}</main>
      <Footer />
    </section>
  );
};
