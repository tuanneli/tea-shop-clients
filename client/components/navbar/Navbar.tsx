import React from 'react';
import icon from "../../public/favicon.ico";
import {
    Icon,
    NavbarCenter,
    NavbarContent,
    NavbarMainBox,
    NavbarRight,
    Login
} from './navbarStiledComponents';
import NavbarLeftPart from "./NavbarLeftPart";
import NavbarRightPart from "./NavbarRightPart";
import NavbarCentralPart from "./NavbarCentralPart";

const Navbar = () => {
    return (
        <NavbarMainBox>
            <NavbarContent>
                <NavbarLeftPart/>
                <NavbarCentralPart/>
                <NavbarRightPart/>
            </NavbarContent>
        </NavbarMainBox>
    );
};

export default Navbar;