import * as React from 'react';

// *********************************************************************
// HOC - TEMPLATES
// *********************************************************************

// Stateless High Order Component (HOC)
const WrapWithStateless = (WrappedComponent:any) => {

   // DO SOMETHING HERE

   return (props:any) => {
      return(
         <WrappedComponent {...props} />
      );
   };
};


// Class High Order Component (HOC)
const WrapWithClass = (WrappedComponent:any) => {
   return class extends React.Component {

      // DO SOMETHING HERE

      render(){
         return(
            <WrappedComponent {...this.props} />
         );
      }
   }; 
};

export { WrapWithClass, WrapWithStateless };