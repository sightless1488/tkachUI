import React, { Component } from "react";
import '../All.css'
import './RadioButton.css';
class RadioButton extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        var darkTheme = this.props.theme == "dark";
        var accentColor = this.props.accent;
        return (
            <input className="rad-bx" type="radio" dark={darkTheme.toString()} {...this.props} style={{
                "--color-acc" : accentColor
            }}/>
        );
    }
}
 
export default RadioButton;