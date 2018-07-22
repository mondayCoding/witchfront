
import * as React from 'react';


export default class Announcement extends React.Component<any,any> {

  public state = {
    pageWidth: ""
  };

//   public componentWillMount(){
//     this.updateDimensions();
//     window.addEventListener("resize", this.updateDimensions);
//   }

//   public componentWillUnmount(){
//     window.removeEventListener("resize", this.updateDimensions);
//   }

//   public updateDimensions = () => {
//     this.setState({
//         pageWidth: $(window).width().toString()
//     });
//   }

  public render() {
    return (
        <div className="top-panel">
          <div className="announcement">
              <span className="message">{this.props.message}</span>
          </div>
        </div>
    );
  }
}
