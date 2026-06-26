import "@/styles/globals.css";
import SolarisCursor from "../components/SolarisCursor";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <SolarisCursor />
            <Component {...pageProps} />
        </>
    );
}
