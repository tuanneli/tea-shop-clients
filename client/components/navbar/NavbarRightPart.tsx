import React from 'react';
import {DropDownMenu, Login, Menu, NavbarLeft, NavbarRight} from "./navbarStiledComponents";

const NavbarLeftPart = () => {
    return (
        <NavbarRight>
            <Login>
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 448 512" fill={"white"} width={'20px'} height={'20px'}>
                    <path
                        d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                </svg>
                <div style={{margin: '0 10px'}}>
                    войти
                </div>
            </Login>
        </NavbarRight>
    );
};

export default NavbarLeftPart;