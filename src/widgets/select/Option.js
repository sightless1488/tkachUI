import React, { Component } from 'react';

import "./Select.css"

class Choice extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        var darkTheme = this.props.theme == "dark";
        var accentColor = this.props.accent;
        return (<option className="option-bx" dark={darkTheme.toString()} {...this.props} style={{"--color-acc" : accentColor}}>{this.props.children}</option>);
    }
}
 
export default Choice;