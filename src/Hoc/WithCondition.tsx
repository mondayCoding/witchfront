import * as React from 'react';

export interface IProps {
   showCondition: boolean;
}

export const WithCondition = <P extends object>(Component: React.ComponentType<P>): React.SFC<P & IProps> => {
   return (props) => {
      const { showCondition, ...rest } = props as IProps;
      if (showCondition) { return (<Component {...rest} />); }

      return (null);
   };
 };