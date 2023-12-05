import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Recycle Quest</title>
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
