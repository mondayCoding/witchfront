
import * as React from 'react';

const Heading:React.StatelessComponent<IProps> = (props) => {
   const {headingText, icon, ...rest} = props;
   return(
      <h3 className="themeheading" {...rest}>
         {icon && <span className="icon">icon</span>}
         {headingText && <span>headingText</span>}
      </h3>
   );
};

export default Heading;

interface IProps {
   headingText: string;
   icon: React.ReactNode;
}