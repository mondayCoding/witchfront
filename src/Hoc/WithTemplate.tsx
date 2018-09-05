
import * as React from "react";


export interface IProps {
   showPlaceholder: boolean;
}

export const WithTemplate = <P extends object>(
      Component:React.ComponentType<P>, 
      Placeholder:React.ComponentType
   ): React.ComponentType<P & IProps> => {

   return (props) => {
      const {showPlaceholder, ...rest} = props as IProps;
      if (!showPlaceholder) { return(<Component {...rest} />); } 
      return(<Placeholder />);
   };
};