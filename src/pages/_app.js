import "@/styles/reset.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>LOL</title>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
