import React from "react";
import './dialog.css';

interface Props {
    open: boolean;
}

class Dialog extends React.Component<Props> {
    render() {
        if(this.props.open) {
            return (
                <div id="dialog">
                    {this.props.children}
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Dialog;