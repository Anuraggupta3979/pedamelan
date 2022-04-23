import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
