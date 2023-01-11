import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../componment/navbar";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Footer from "../componment/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}
