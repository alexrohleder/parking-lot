import React, { ReactNode } from "react";
import LayoutHeader from "./LayoutHeader";

type Props = {
  children: ReactNode;
};

function Layout(props: Props) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <LayoutHeader />
      <main className="lg:container m-auto p-4">{props.children}</main>
    </div>
  );
}

export default Layout;
