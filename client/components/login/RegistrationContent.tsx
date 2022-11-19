import React, {useState} from 'react';
import RegistrationContent from "./RegistrationContent";
import styled from "styled-components";
import {useAuthValidation} from "./validationHook";
import Error from "../error/Error";
import Link from "next/link";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .sidebox-left {
    @media (max-width: 560px) {
      color: red;
      visibility: hidden;
    }
  }

  .sidebox-right {
    @media (max-width: 560px) {
      position: absolute;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`

const SideBox = styled.div`
  width: 100%;
  height: 100vh;
  margin: 10px 40px;
  display: flex;
  justify-content: ${props => props.dir || "center"};
  align-items: center;
`

const FormBox = styled.div`
  max-width: ${props => props.theme.width || "300px"};
  width: 100%;
  height: 100vh;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => props.dir || "center"};
`

const Label = styled.div`
  width: 100%;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  padding: 0 10px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.25);
  }
`

const Button = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 30px;
  border-radius: 5px;
  padding: 0 10px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: transparent;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }

  &:active {
    background: rgba(255, 255, 255, 0.5);
  }
`

const LoginContent = () => {
    const [email, setEmail] = useState<string>("");
    const [login, setLogin] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [passwordFirst, setFirstPassword] = useState<string>("");
    const [passwordSecond, setSecondPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [userRole, setUserRole] = useState<string>('USER');

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log('here')
        const errorText = useAuthValidation(email, login, passwordFirst, passwordSecond);
        if (errorText) {
            return setError(errorText)
        }
        console.log(error)
        // const resError = await userStore.registration(email, name, passwordFirst, userStore.userRoleForRegistration);
        // if (resError) {
        //     return setError(resError)
        // }
        // if (!resError && !errorText) {
        //     userStore.setUserRoleForRegistration('USER');
        //     setError("");
        //     navigate('/home');
        // }
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
                    <Input type="text" placeholder={"Введите почту"} onChange={(e) => setEmail(e.target.value)}/>
                    <Label>Логин</Label>
                    <Input type="text" placeholder={"Придумайте уникальный логин"}
                           onChange={(e) => setLogin(e.target.value)}/>
                    <Label>Пароль</Label>
                    <Input type="password" placeholder={"Введите пароль"}
                           onChange={(e) => setFirstPassword(e.target.value)}/>
                    <Label>Повторите пароль</Label>
                    <Input type="password" placeholder={"Повторите пароль"}
                           onChange={(e) => setSecondPassword(e.target.value)}/>
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

export default LoginContent;