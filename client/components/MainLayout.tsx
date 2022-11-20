import React, {ReactNode} from 'react'
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Navbar from "./navbar/Navbar";

interface IMainLayout {
    children: ReactNode
}

const MainLayout = ({children}: IMainLayout) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Tea shop</title>
                <meta name={"keywords"} content="чай, чаи, tea, coffee, кофе"/>
                <meta name={"description"} content="tea site"/>
                <meta charSet={"utf-8"}/>
            </Head>
            <Navbar/>
            <main>
                {children}
            </main>
        </div>
    );
};

export default MainLayout;