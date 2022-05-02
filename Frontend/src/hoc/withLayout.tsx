import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/sideBar";

function getDisplayName(WrappedComponent: any) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

function withLayout(WrappedComponent: any) {
  WrappedComponent.displayName = `withLayout(${getDisplayName(
    WrappedComponent
  )})`;

  function WrapperComponent({ ...props }) {
    return (
      <>
        <Header />
        <SideBar />
          <WrappedComponent {...props} />
        <Footer />
      </>
    );
  }

  return WrapperComponent;
}

export default withLayout;
