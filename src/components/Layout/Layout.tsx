import * as React from "react";
import { Helmet } from "react-helmet";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

const style = require("./layout.module.scss");

export const Layout = ({ children }) => {
  return (
    <section className={style.body}>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto%3Aital%2Cwght%400%2C400%3B0%2C500%3B1%2C400&amp;display=swap&amp;ver=5.7.2"
          type="text/css"
          media="all"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
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
