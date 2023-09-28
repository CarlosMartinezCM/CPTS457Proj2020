import React from 'react';
import AppMode from '../AppMode';

class NavBar extends React.Component {

  getMenuBtnIcon = () => {
      if (this.props.mode === AppMode.ROUNDS_LOGROUND || 
          this.props.mode === AppMode.ROUNDS_EDITROUND)
          return "fa fa-arrow-left";
      if (this.props.menuOpen)
        return "fa fa-times";
      return "fa fa-bars";
  }

  handleMenuBtnClick = () => {
    if (this.props.mode === AppMode.ROUNDS_LOGROUND ||
        this.props.mode === AppMode.ROUNDS_EDITROUND) {
      this.props.changeMode(AppMode.ROUNDS);
    } else if (this.props.mode != AppMode.LOGIN) {
      this.props.toggleMenuOpen();
    }
  }

  //The img here is for the Icon that appears on the top left corner. 
  render() {
    return (
    <div className="navbar">  
    <span className="navbar-items">
      <button className="sidemenu-btn" onClick={this.handleMenuBtnClick}>
        <span id="menuBtnIcon" className={"sidemenu-btn-icon " + this.getMenuBtnIcon()}>
        </span>
      </button>
      <span className="navbar-title">
        &nbsp;{this.props.title}
      </span>
    </span>
  </div>
); 
}
}

export default NavBar;
