import React, {useEffect, useState} from 'react';
import RegistrationContent from "./RegistrationContent";
import styled from "styled-components";
import {useAuthValidation, useCheckIfEmail} from "./validationHooks";
import Error from "../error/Error";
import Link from "next/link";
import {Button, FormBox, Input, Label, MainContainer, SideBox} from './styledComponentsLogin';
import Loader from "../loader/Loader";
import {useAppDispatch, useAppSelector} from "../../store/hooks/hooksRedux";
import {authentication} from "../../store/reducers/UserReducer/UserActionCreator";
import {useRouter} from "next/router";

const LoginContent = () => {
    const [auth, setAuth] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const dispatch = useAppDispatch();
    const router = useRouter();
    const state = useAppSelector(state => state.userReducer);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const isEmailOrLogin = useCheckIfEmail(auth);
        let validationError = "";
        isEmailOrLogin === "email" ?
            validationError = useAuthValidation(auth, "login", password, password) :
            validationError = useAuthValidation('email@gmail.com', auth, password, password)
        setError(validationError)
        if (!validationError) {
            await dispatch(authentication({auth, password, isEmailOrLogin}, 'login'));
        }
    }

    useEffect(() => {
        if (state.user.email) {
            router.push('/');
        } else {
            setError(state.error);
        }
    }, [state.isLoading, state.error])

    useEffect(() => {
        setIsLoading(false);
    }, [])

    if (isLoading) {
        return (
            <Loader/>
        )
    }

    return (
        <MainContainer>
            <SideBox className={'sidebox-left'}>
                <FormBox theme={{width: "500px"}}>
                    <h1 style={{fontSize: '50px', marginBottom: "10px"}}>Tea Shop</h1>
                    <h1 style={{fontSize: '30px', marginBottom: "10px"}}>Вход</h1>
                    <p>И снова здравствуй! Мы рады что ты снова зашёл к нам в гости!</p>
                </FormBox>
            </SideBox>
            <SideBox className={'sidebox-right'} dir={"start"}>
                <FormBox dir={"start"}>
                    <Label>Логин или почта</Label>
                    <Input type="text" placeholder={"Введите логин или почту"}
                           onChange={(e) => setAuth(e.target.value)}/>
                    <Label>Пароль</Label>
                    <Input type="password" placeholder={"Введите пароль"}
                           onChange={(e) => setPassword(e.target.value)}/>
                    <div>
                        {error ? <Error errorText={error}/> : null}
                    </div>
                    <Button onClick={handleSubmit}>Подтвердить</Button>
                    <Label>
                        Ещё нет аккаунта? <Link style={{textDecoration: "underline"}}
                                                href={'/registration'}>Зарегистрироваться</Link>
                    </Label>
                </FormBox>
            </SideBox>
        </MainContainer>
    );
};

export default LoginContent;