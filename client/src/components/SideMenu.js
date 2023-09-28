import React from 'react';
import AppMode from './../AppMode.js'
import App from './App.js';

class SideMenu extends React.Component {

//renderModeItems -- Renders correct subset of mode menu items based on
//current mode, which is stored in this.prop.mode. Uses switch statement to
//determine mode.
renderModeMenuItems = () => {
  switch (this.props.mode) {
    case AppMode.HOMEPAGE:
      return(
        <div>
         <a className="sidemenu-item" >
            <span ></span>&nbsp;Account</a>
        </div>
      );
    break;
    case AppMode.HOMEPAGE:
      return(
        <div>
          <a className="sidemenu-item" >
            <span className="fa fa-plus"></span>&nbsp;Button</a>
        </div>
      );
    break;
    default:
        return null;
    }
}

    render() {
       return (
        <div className={"sidemenu " + (this.props.menuOpen ? "sidemenu-open" : "sidemenu-closed")}
             onClick={this.props.toggleMenuOpen}>
          {/* SIDE MENU TITLE */}
          <div className="sidemenu-title">
              <img src={this.props.profilePicURL} height='60' width='60' />
              <span id="userID" className="sidemenu-userID">&nbsp;{this.props.displayName}</span>
          </div>
          {/* MENU CONTENT */}
          {this.renderModeMenuItems()}
          {/* The following menu items are present regardless of mode */}
          <a id="aboutBtn" className="sidemenu-item"
              onClick={this.props.showAbout}>
            <span className="fa fa-info-circle"></span>&nbsp;About</a>
          <a id="logOutBtn" className="sidemenu-item"
             onClick={this.props.logOut}>
            <span className="fa fa-sign-out-alt"></span>&nbsp;Log Out</a>
            
        </div>
       );
    }
}

export default SideMenu;
