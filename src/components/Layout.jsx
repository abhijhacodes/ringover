import Head from "next/head";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Ringover</title>
        <meta name="description" content="Ringover products site" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <main>
        <Header />
        {children}
      </main>
    </>
  );
};

export default Layout;
