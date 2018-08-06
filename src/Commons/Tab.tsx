
import * as React from 'react';

interface ITabButton {
   title: string;
   tabIndex?: number;
   isActive?: boolean;
   onClick?(number:number):void;
}

const Tab: React.StatelessComponent<ITabButton> = (props) => {
   const {onClick, tabIndex, isActive, title} = props;
   const buttonClass = (isActive) ? "tab-title active" : "tab-title";
   const handleTabClick = () => onClick(tabIndex);

   return(
      <button className={buttonClass} onClick={handleTabClick} title={title}>
         {title}
      </button>
   );  
};

export default Tab;