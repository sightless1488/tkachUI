import React, { Component } from "react";

import '../All.css'
import './RangeInput.css';
class RangeInput extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        var darkTheme = this.props.theme == "dark";
        var accentColor = this.props.accent;
        return <input type="range" className="rang-bx" dark={darkTheme.toString()} {...this.props} style={{"--color-acc" : accentColor}} />;
    }
}
 
export default RangeInput;