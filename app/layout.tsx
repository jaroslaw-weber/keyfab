"use client";
import React, { ReactNode, useEffect, useLayoutEffect } from "react";
import { useAtom } from "jotai";
import { styleAtom } from "./state";
import Navbar from "./components/Navbar";
import { Inter } from "next/font/google";
import GlobalStyle from "./components/GlobalStyle";
import "./globals.css";

interface LayoutProps {
  children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

const GlobalLayout: React.FC<LayoutProps> = ({ children }) => {
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
        <GlobalStyle />
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
