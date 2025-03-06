import React, { Component } from "react";

import '../All.css'
import './InputBox.css';

class InputBox extends Component {
    constructor(props = {}) {
        super(props);
    }
    state = {  }
    render() { 
        var darkTheme = this.props.theme == "dark";
        var accentColor = this.props.accent;

        return (
            
            <div className="inp-box-div" dark={darkTheme.toString()} style={{
                "--color-acc" : accentColor
            }}>
                <input className="inp-box" {...this.props} dark={darkTheme.toString()}></input> 
            </div>
        );
    }
}
 
export default InputBox;