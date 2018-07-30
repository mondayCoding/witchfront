
import * as React from 'react';

interface IState {
   activeTab: number;
}

interface IProps { 
   defaultTabIndex?: number;
}

export default class Tabs extends React.Component<IProps, IState> {

   public state = {
      activeTab: this.props.defaultTabIndex || 0
   };

   public setActiveTab = (activeTab:number) => {
      this.setState({
         activeTab
      });
   }
   
   public renderTabButtons(){
      return React.Children.map(
         this.props.children, (child, index) => {
            // null check, since there are "optional" children
            if (child) {
               return React.cloneElement(child as any, {
                  onClick: this.setActiveTab, 
                  tabIndex: index, 
                  isActive: this.state.activeTab === index
               });
            }
         }
      );
   }

   public renderActiveContent(){
      const {children} = this.props as any;
      const {activeTab} = this.state;
      
      if (children[activeTab]) {
         return children[activeTab].props.children;
      }
   }

   public render() {   
      return (
         <div className="tabs">
            <div className="tab-titles">
               {this.renderTabButtons()}
            </div>
            <div className="tab-content">
               {this.renderActiveContent()}
            </div>
         </div>
      );
   }
}
