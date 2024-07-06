"use client";
import React, { ReactNode, useLayoutEffect } from "react";
import { useAtom } from "jotai";
import { styleAtom } from "./state";
import Navbar from "./components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

interface LayoutProps {
  children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

const GlobalLayout: React.FC<LayoutProps> = ({ children }) => {
  const [css, setCss] = useAtom(styleAtom);
  /*
  useLayoutEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = css.css;
    document.head.appendChild(style);

    // Cleanup the style tag when the component is unmounted
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  */
  return (
    <html lang="en">
      <head>
        <style>{`
    .cm-scroller {
      border-radius: 0.25rem;
      padding: 0.5rem;
    }
    .cm-editor {
      border-radius: 0.25rem;
      padding: 0.5rem;
      border-width: 1px;
    }
  `}</style>
      </head>
      <body>
        <main className={inter.className + " min-h-screen flex flex-col"}>
          <Navbar />
          <div className="global min-h-full flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
};

export default GlobalLayout;
