import React from "react";
import Link from "next/link";

function LayoutHeader() {
  return (
    <div className="h-16">
      <header className="bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100">
        <div className="container m-auto flex items-center justify-between h-16 px-4">
          <Link href="/">
            <a>
              <div className="placeholder h-6 w-24" />
            </a>
          </Link>
          <div className="flex gap-2 items-center">
            <div className="placeholder h-4 w-24" />
            <div className="placeholder h-4 w-16" />
            <div className="placeholder rounded-full h-8 w-8" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default LayoutHeader;
