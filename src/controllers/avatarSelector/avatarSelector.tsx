
import * as React from 'react';
import ANNO from '../../utils/annoModule';


export default class AvatarSelector extends React.Component<IProps> {

   public state = {
      selected: this.props.selected,
      selectedIndex: this.props.selected,
      avatarList: (this.props.avatarList) ? this.props.avatarList : defaultAvatars
   };

   public handleAvatarClick(avatar:Avatar, index:number) {
      ANNO.announce(`Selected ${avatar.name}`);
      const avatarList = this.state.avatarList.slice(0);
      const selected = avatarList[index];      
      avatarList.forEach((x) => x.selected = false);
      selected.selected = true;
      this.setState({avatarList, selected});
      this.handleAvatarSelection(avatarList[index]);
   }

   public handleAvatarSelection(selected:Avatar){
      if (this.props.onSelection){
         this.props.onSelection(selected);
      }
   }

   public render() {
      return this.state.avatarList.map((avatar, index)=> {

         const selectedClass = (avatar.selected) ? "avatar selected" : "avatar";
         const onClick = () => this.handleAvatarClick(avatar, index);

         return(
            <div key={name + index} onClick={onClick} className={selectedClass}>
               <img src={avatar.path} title={avatar.name}  />                  
            </div>
         );
      });
   }
}

interface Avatar {
   selected: boolean;  
   name: string;        
   path: string;          
}

interface IProps {
   selected?:Avatar;
   selectedIndex?:number;
   avatarList?: Avatar[];
   onSelection?(param:Avatar):void;
}

const defaultAvatars = [
   {selected:false,  name:"Blue",        path:"../images/ava_blue.jpg"          },
   {selected:false,  name:"Cyan",        path:"../images/ava_cyan.jpg"          },
   {selected:false,  name:"Forest",      path:"../images/ava_forest.jpg"        },
   {selected:false,  name:"Greenish",    path:"../images/ava_greenish.jpg"      },
   {selected:false,  name:"Magenta",     path:"../images/ava_magenta.jpg"       },
   {selected:false,  name:"Orange",      path:"../images/ava_orange.jpg"        },
   {selected:false,  name:"Pink",        path:"../images/ava_pink.jpg"          },
   {selected:false,  name:"Red",         path:"../images/ava_red.jpg"           },
   {selected:false,  name:"Green",       path:"../images/ava_vibrantgreen.jpg"  },
   {selected:false,  name:"Yellow",      path:"../images/ava_vibrantyellow.jpg" },
   {selected:false,  name:"Violet",      path:"../images/ava_violet.jpg"        },
   {selected:false,  name:"Yellowish",   path:"../images/ava_yellow.jpg"        },
];