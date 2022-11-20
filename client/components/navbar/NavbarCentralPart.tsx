import React from 'react';
import {DropDownMenu, Icon, Login, Menu, NavbarCenter, NavbarLeft, NavbarRight} from "./navbarStiledComponents";
import icon from "../../public/favicon.ico";

const NavbarLeftPart = () => {
    return (
        <NavbarCenter>
            <Icon>
                <img src={icon.src} alt="favicon"/>Tea Shop
            </Icon>
        </NavbarCenter>
    );
};

export default NavbarLeftPart;