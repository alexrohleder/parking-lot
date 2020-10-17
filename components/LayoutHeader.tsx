import React from "react";
import Link from "next/link";

function LayoutHeader() {
  return (
    <div className="h-16">
      <header className="bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100">
        <div className="container m-auto flex items-center h-16 px-4">
          <Link href="/">
            <a>Parking Dashboard</a>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default LayoutHeader;
