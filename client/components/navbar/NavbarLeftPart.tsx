import React from 'react';
import {DropDownMenu, Menu, NavbarLeft} from "./navbarStiledComponents";

const NavbarLeftPart = () => {
    return (
        <NavbarLeft>
            <DropDownMenu>
                <Menu/>
            </DropDownMenu>
        </NavbarLeft>
    );
};

export default NavbarLeftPart;