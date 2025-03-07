import React, { useState } from 'react';
import "./Navbar.css";

const Navbar = ({ theme, accent, children }) => {
    const darkTheme = theme === "dark";

    const [selected,setSelected] = useState(0)

    const onSelected = (el) => {
        setSelected(el);
    };

    return (
        <div className="navbar-bx" dark={darkTheme.toString()} style={{ "--color-acc": accent }}>
            {React.Children.map(children, (child, index) =>
                React.cloneElement(child, { onSelected, selected })
            )}
        </div>
    );
};

export default Navbar;
