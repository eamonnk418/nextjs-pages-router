import { JSX, ReactNode } from "react";
import { Navbar } from "./navbar";

export const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}