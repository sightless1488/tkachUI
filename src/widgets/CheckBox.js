import React, { Component } from "react";
import './CheckBox.css'

class CheckBox extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        var darkTheme = this.props.theme == "dark";
        var accentColor = this.props.accent;
        return (<input type="checkbox" className="check-bx" dark={darkTheme.toString()} {...this.props} style={{
            "--color-acc" : accentColor
        }}>

        </input>);
    }
}
 
export default CheckBox;