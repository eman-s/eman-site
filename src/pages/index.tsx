import React, { FunctionComponent, useEffect } from "react";
import Router from "next/router";
import Head from "next/head";

const IndexPage: FunctionComponent = () => {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == "/") {
      Router.push("/dashboard");
    }
  });
  return (
    <Head>
      <title>Emmanuel Salicrup Developer</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
export default IndexPage;
