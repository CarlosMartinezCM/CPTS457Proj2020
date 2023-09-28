import React from 'react';
import AppMode from './../AppMode.js';

class FloatingButton extends React.Component {
    render() {
      return(
        <div className="floatbtn"
         onClick={!this.props.menuOpen ? this.props.handleClick : null}>
            <span className="floatbtn-icon fa fa-plus"></span>
        </div>  
      );
    }
}

export default FloatingButton;
