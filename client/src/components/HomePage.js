import React from 'react';
import AppMode from "./../AppMode.js";

  /************************Dummy Data info web app***************************************************************************/
  class HomePage extends React.Component {

    constructor() {
      super();
      this.state = {color: "#717171" 
                    };
  } 
      
    render(){
        return (
          <div className="padded-page">
          <center>
          <h1 >Hello,&nbsp;{this.props.displayName}</h1>
          <img src={this.props.profilePicURL} height='400' width='400' />
          <br/>
          <p>Go Cougs!</p>
          <p>Account Name: &nbsp;{this.props.displayName}</p>
          <p>More items: </p>
          
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <p style={{fontStyle: "italic"}}>Version 2.1 Class Project CPTS_427</p>
          </center>
          <a id="logOutBtn" className="logOut-Btn"
             onClick={this.props.logOut}>
            <span className="floatbtn-icon"></span>&nbsp;Log Out</a>
      </div>
      
        );

    }
  }
  export default HomePage;
  