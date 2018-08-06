
import * as React from 'react';

const User = (props:any) => {
   const { name, active, onClick, localUser} = props;
   let userClass = "selectable-user takeable";

   if (active) 
   {
      userClass = "selectable-user taken";

      if (name === localUser) {userClass = "selectable-user owned";}
   }
   else {
      userClass = "selectable-user takeable";
   }
   
   return (
      <div className={userClass} onClick={() => onClick(name)} >
         <div className="user-initial">{name.charAt(0)}</div>
         <div className="user-name">{name}</div>
      </div>
   );
};

interface IStatusList {
   active: boolean;
   name: string;
}

interface IProps {
   statusList: IStatusList[];
   localUser:string;
   onClick(params:string):void;
 }

export default class SelectUserMenu extends React.Component<IProps> {

   render(){
      const {onClick, statusList, localUser} = this.props;

      return (
         <article className="user-selection">
            { 
               statusList.map((user, index:number) =>
               {
                  return (
                     <User 
                        name={user.name} 
                        key={index} 
                        active={user.active} 
                        localUser={localUser} 
                        onClick={onClick} 
                     />
                  );
               })
            }
         </article>
      );
   }

}
