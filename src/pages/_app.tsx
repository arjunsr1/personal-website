// src/pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
