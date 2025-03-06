import Head from "next/head";
import { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
};
