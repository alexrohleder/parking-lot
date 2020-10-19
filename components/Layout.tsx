import React, { ReactNode } from "react";
import Head from "next/head";
import LayoutHeader from "./LayoutHeader";

type Props = {
  title: string;
  children: ReactNode;
};

function Layout(props: Props) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>{props.title}</title>
      </Head>
      <LayoutHeader />
      <main className="lg:container m-auto p-4">{props.children}</main>
      <footer className="text-center p-8">
        Made with ❤️ by{" "}
        <a
          href="https://www.linkedin.com/in/alexrohleder/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Alex Rohleder
        </a>
      </footer>
    </div>
  );
}

export default Layout;
