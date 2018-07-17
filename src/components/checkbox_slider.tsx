
import * as React from 'react';
import {IInputCheckboxProperties} from '../interfaces';


export default class SliderCheckbox extends React.Component<IInputCheckboxProperties> {

    public render() {
        const {id, label, ...rest} = this.props;

        return (
            <div className="themeslider">
                <input type="checkbox" id={id} {...rest} />
                <label htmlFor={id} >{label}</label>
            </div>
        );
    }
}
