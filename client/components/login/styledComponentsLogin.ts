import styled from "styled-components";

export const MainContainer = styled.div`
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

export const SideBox = styled.div`
  width: 100%;
  height: 100vh;
  margin: 10px 40px;
  display: flex;
  justify-content: ${props => props.dir || "center"};
  align-items: center;
`

export const FormBox = styled.div`
  max-width: ${props => props.theme.width || "300px"};
  width: 100%;
  height: 100vh;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => props.dir || "center"};
`

export const Label = styled.div`
  width: 100%;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  padding: 0 10px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.25);
  }
`

export const Button = styled.button`
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