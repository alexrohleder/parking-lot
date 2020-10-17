import React, { ReactNode } from "react";
import LayoutHeader from "./LayoutHeader";

type Props = {
  children: ReactNode;
};

function Layout(props: Props) {
  return (
    <>
      <LayoutHeader />
      <main className="container m-auto p-4">{props.children}</main>
    </>
  );
}

export default Layout;
