import React, { Component } from 'react';
import "./Select.css"

class Select extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        var darkTheme = this.props.theme == "dark";
        var accentColor = this.props.accent;
        return (<select className="select-bx" dark={darkTheme.toString()} {...this.props} style={{"--color-acc" : accentColor}}>{this.props.children}</select>);
    }
}
 
export default Select;