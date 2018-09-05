
import * as React from "react";


export interface IProps {
   isLoading: boolean;
}

export const WithLoading = <P extends object>(Component:React.ComponentType<P>):React.ComponentType<P & IProps> => {
   return (props) => {
      const {isLoading, ...rest} = props as IProps;
      if (!isLoading) { return(<Component {...rest} />); } 
      return(<div className="themeloader"></div>);
   };
};