import React, { Component } from "react";

import '../All.css'
import './Button.css';

class Button extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        var darkTheme = this.props.theme == "dark";
        var accentColor = this.props.accent;
        return (
            <button className="btn" dark={darkTheme.toString()} {...this.props} style={{
                "--color-acc" : accentColor
            }}>
                {this.props.children}
            </button>
        );
    }
}
 
export default Button;