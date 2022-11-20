import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import {setupStore} from "../store/store";
import {useEffect} from "react";

export default function App({Component, pageProps}: AppProps) {
    return (
        <Provider store={setupStore()}>
            <Component {...pageProps} />
        </Provider>
    )
}

