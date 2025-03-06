import React, { Component } from "react";

import '../All.css'
import './InputBox.css';

class Label extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return <a>{this.props.children}</a>;
    }
}
 
export default Label;