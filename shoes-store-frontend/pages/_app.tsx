import type { AppProps } from "next/app";
import { AuthContextProvider } from "../context/AuthContext";
import { CartContextProvider } from "../context/CartContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </AuthContextProvider>
  );
}
