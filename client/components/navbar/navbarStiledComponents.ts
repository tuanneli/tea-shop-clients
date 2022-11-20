import styled from "styled-components";

export const NavbarMainBox = styled.div`
  width: 100vw;
  position: static;
  height: 60px;
  background: #2d2d2dbd;
  margin: 0;
  padding: 0 20px;
  border-bottom: 1px solid #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NavbarContent = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 25px;
  user-select: none;

  img {
    width: 40px;
    height: 40px;
  }
`

export const Menu = styled.div`
  content: "";
  display: flex;
  width: 30px;
  height: 4px;
  border-radius: 100vh;
  background-color: white;
  cursor: pointer;

  &:before {
    position: absolute;
    content: "";
    display: flex;
    transform: translateY(10px);
    width: 30px;
    height: 4px;
    border-radius: 100vh;
    background-color: white;
  }

  &:after {
    position: absolute;
    content: "";
    display: flex;
    transform: translateY(-10px);
    width: 30px;
    height: 4px;
    border-radius: 100vh;
    background-color: white;
  }
`

export const DropDownMenu = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const NavbarLeft = styled.div`

`

export const NavbarCenter = styled.div`

`

export const NavbarRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
`