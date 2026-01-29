import React from "react";

function PageLayout({ header, footer, children }) {
  return (
    <>
      <div>{header}</div>
      <div>{children}</div>
      <div>{footer}</div>
    </>
  );
}

export default PageLayout;
