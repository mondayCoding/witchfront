
import * as React from 'react';
import {IButtonProperties} from '../interfaces';


export default class Button extends React.Component<IButtonProperties> {

    public render() {
        let { className, buttonText, type, ...rest } = this.props;
        className = className || "themebutton";
        buttonText = buttonText || "button";
        type = type || "button";

        return (
            <button type={type} className={className} {...rest} >
                {buttonText}
            </button>
        );
    }
}
