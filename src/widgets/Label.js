import React, { Component } from "react";

import '../All.css'
import './Label.css';

class Label extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        var darkTheme = this.props.theme == "dark";
        var accentColor = this.props.accent;
        return <a className="label-bx" dark={darkTheme.toString()} {...this.props} style={{
            "--color-acc" : accentColor
        }}>{this.props.children}</a>;
    }
}
 
export default Label;