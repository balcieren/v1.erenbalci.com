import { Footer, Header, Navbar } from "@components/layout";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { FC } from "react";
import "../styles/globals.css";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <main>
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
