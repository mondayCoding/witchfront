import * as React from 'react';

export interface IPlaceholderProps {
   branchWhen: boolean;
   branch: React.ComponentType;
}

export const WithBranch = <P extends object>(
      Component: React.ComponentType<P> 
   ): React.SFC<P & IPlaceholderProps> => {

   return (props) => {
      const { branchWhen, branch, ...rest } = props as IPlaceholderProps;
      const Branch = branch;
      if (branchWhen) { return (<Branch/>); }

      return (<Component {...rest} />);
   };
 };