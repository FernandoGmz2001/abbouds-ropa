import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";

function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>Abbouds Ropa {title ? `| ${title}` : ""}</title>
      </Head>
      <Navbar />
      <div className="px-10 mt-5 font-KumbhSans font-normal">{children}</div>
    </>
  );
}

export default Layout;
