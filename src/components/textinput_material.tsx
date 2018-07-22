
import * as React from 'react';
import {IInputFieldProperties} from '../interfaces';
import Tip from './infotip';


export default class Input extends React.Component<IInputFieldProperties> {

    public render() {
        const {id, value, label, tooltip, validation, ...rest} = this.props;
        const hasContent = value && value.length > 0;
        const isDisabled = this.props.disabled;
        let classString = "themeinput";
        if (hasContent) {classString += " hasContent";}
        if (isDisabled) {classString += " disabled";}
        if (validation) {classString += " invalid";}

        return (
            <div className={classString} data-tooltip-error={validation}>
                <input type="text" id={id} {...rest} value={value} />
                <label htmlFor={id}> {label} </label>
                <span className="bar"></span>   
                {(tooltip) && <Tip message={tooltip} />}
                {/* {(validation) && <Tip message={validation} />}*/}
            </div>
        );
    }
}
