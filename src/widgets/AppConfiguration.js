import React, { Component } from "react";
class AppConfiguration extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    applyPropsRecursively(children) {
        return React.Children.map(children, (child) => {
            if (!React.isValidElement(child)) return child;

            var newObjs = {};
            if(this.props.theme != null) newObjs["theme"] = this.props.theme;
            if(this.props.accent != null) newObjs["accent"] = this.props.accent;

            return React.cloneElement(child, newObjs, 
                this.applyPropsRecursively(child.props.children)
            );
        });
    }
    render() {
        return this.applyPropsRecursively(this.props.children)
    };

}
 
export default AppConfiguration;