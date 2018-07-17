
import * as React from 'react';
import {IInputFieldProperties} from '../interfaces';


export default class Input extends React.Component<IInputFieldProperties> {

    public render() {
        const {...rest} = this.props;

        return (
            <input className="input-plain" type="text" {...rest} />
        );
    }
}
