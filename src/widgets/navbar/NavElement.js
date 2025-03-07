import React, { useState } from 'react';
import "./Navbar.css";

const NavElement = ({ theme, accent, id, children, selected, onSelected }) => {
    const darkTheme = theme === "dark";

    const isSelected = id === selected;
    return (
        <div 
            className='nav-el' 
            id = {id}
            onClick={() => {
                onSelected(id)
            }} 
            dark={darkTheme.toString()} 
            style={{ "--color-acc": accent }}

            selectedId = {selected}

            selected = {isSelected.toString()}
        >
            {children}
        </div>
    );
}

export default NavElement;