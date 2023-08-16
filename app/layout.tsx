import { Nunito } from "next/font/google";

import { ReactNode } from "react";
import { Footer, Header, Navbar } from "./components/layout";
import { Theme } from "./components/layout/Theme";
import "./globals.css";

const nunito = Nunito({ preload: false });

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={nunito.className}>
                <Theme>
                    <Header>
                        <Navbar />
                    </Header>

                    {children}
                    <Footer />
                </Theme>
            </body>
        </html>
    );
}
