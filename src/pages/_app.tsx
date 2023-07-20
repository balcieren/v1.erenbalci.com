import { Footer, Header, Navbar } from "@components/layout";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { FC } from "react";
import { Nunito } from "next/font/google";
import "../styles/globals.css";

const nunito = Nunito({ preload: false });

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="system">
            <main className={nunito.className}>
                <Header>
                    <Navbar />
                </Header>
                <Component {...pageProps} />
                <Footer />
            </main>
        </ThemeProvider>
    );
};

export default App;
