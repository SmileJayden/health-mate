import "antd/dist/antd.css";
import "@lib/firebase/init";
import "@styles/global.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Container from "@components/common/container";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Container>
        <Head>
          <title>HealthMate</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </Container>
    </div>
  );
}
