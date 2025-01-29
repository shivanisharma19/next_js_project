import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <h1>Hello World</h1>
      <Component {...pageProps} />
      <h1>Bye World</h1>
    </>
  )
}
