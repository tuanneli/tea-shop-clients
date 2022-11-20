import MainLayout from "../components/MainLayout";
import styled from "styled-components";
import icon from "../public/favicon.ico"
import {useEffect, useState} from "react";
import Loader from "../components/loader/Loader";

export default function Home() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, [])

    if (isLoading) {
        return (
            <Loader/>
        )
    }

    return (
        <MainLayout>
            <div>
                Works
            </div>
        </MainLayout>
    );
}
