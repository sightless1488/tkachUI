import React, { Component } from "react";
import CheckBox from "./CheckBox";

import "./Switch.css"

class Switch extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return <CheckBox {...this.props} className="swi-bx">{this.props.children}</CheckBox>;
    }
}
 
export default Switch;