import React, {useEffect, useState} from 'react';
import {useAuthValidation} from "./validationHooks";
import Error from "../error/Error";
import Link from "next/link";
import {Button, FormBox, Input, Label, MainContainer, SideBox} from './styledComponentsLogin';
import {useAppDispatch, useAppSelector} from "../../store/hooks/hooksRedux";
import {authentication} from "../../store/reducers/UserReducer/UserActionCreator";
import {useRouter} from "next/router";
import Loader from "../loader/Loader";

const RegistrationContent = () => {
    const [email, setEmail] = useState<string>("");
    const [login, setLogin] = useState<string>("");
    const [passwordFirst, setFirstPassword] = useState<string>("");
    const [passwordSecond, setSecondPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const router = useRouter();
    const dispatch = useAppDispatch();
    const state = useAppSelector(state => state.userReducer);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        let validationError = "";
        validationError = useAuthValidation(email, login, passwordFirst, passwordSecond);
        setError(validationError);
        if (!validationError) {
            await dispatch(authentication({login, email, password: passwordFirst, role: 'USER'}, 'registration'))
        }
    }

    useEffect(() => {
        setIsLoading(false);
    }, [])

    useEffect(() => {
        if (state.user.email) {
            router.push('/')
        } else {
            setError(state.error)
        }
    }, [state.isLoading, state.error])

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
                    <h1 style={{fontSize: '30px', marginBottom: "10px"}}>Регистрация</h1>
                    <p>Зарегистрируйтесь для того чтобы получить доступ к последним новинкам в Tea Shop, а так же
                        получать
                        приятные бонусы в своём личном кабинете</p>
                </FormBox>
            </SideBox>
            <SideBox className={'sidebox-right'} dir={"start"}>
                <FormBox dir={"start"}>
                    <Label>Почта</Label>
                    <Input type="text"
                           placeholder={"Введите почту"}
                           value={email}
                           onChange={(e) => setEmail(e.target.value.trim())}/>
                    <Label>Логин</Label>
                    <Input type="text" placeholder={"Придумайте уникальный логин"}
                           value={login}
                           onChange={(e) => setLogin(e.target.value.trim())}/>
                    <Label>Пароль</Label>
                    <Input type="password" placeholder={"Введите пароль"}
                           value={passwordFirst}
                           onChange={(e) => setFirstPassword(e.target.value.trim())}/>
                    <Label>Повторите пароль</Label>
                    <Input type="password"
                           value={passwordSecond}
                           placeholder={"Повторите пароль"}
                           onChange={(e) => setSecondPassword(e.target.value.trim())}/>
                    <div>
                        {error ? <Error errorText={error}/> : null}
                    </div>
                    <Button onClick={handleSubmit}>Подтвердить</Button>
                    <Label>
                        Уже есть аккаунт? <Link style={{textDecoration: "underline"}} href={'/login'}>Войти</Link>
                    </Label>
                </FormBox>
            </SideBox>
        </MainContainer>
    );
};

export default RegistrationContent;