import { Footer, Header, Navbar } from "@components/layout";
import { AppProps } from "next/app";
import { FC } from "react";
import "../styles/globals.css";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <main>
      <Header>
        <Navbar />
      </Header>
      <Component {...pageProps} />
      <Footer />
    </main>
  );
};

export default App;
