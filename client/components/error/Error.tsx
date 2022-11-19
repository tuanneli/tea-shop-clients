import React from 'react';
import styled from "styled-components";

interface IError {
    errorText: string
}

const ErrorBox = styled.div`
  color: red;
  position: absolute;
`

const Error = ({errorText}: IError) => {
    return (
        <ErrorBox>
            {errorText}
        </ErrorBox>
    );
};

export default Error;