"use client";
import React, { ReactNode, useEffect } from "react";
import { useAtom } from "jotai";
import { styleAtom } from "./state";
import Navbar from "./components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalStyle from "./components/GlobalStyle";

interface LayoutProps {
  children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

const GlobalLayout: React.FC<LayoutProps> = ({ children }) => {
  const [css, setCss] = useAtom(styleAtom);

  
  
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
        <GlobalStyle/>
        <main className={inter.className + " min-h-screen flex flex-col"}>
         <Navbar />
          <div className="global min-h-full flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
};

export default GlobalLayout;
