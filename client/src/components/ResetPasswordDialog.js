import React from 'react';

class ResetPasswordDialog extends React.Component {

    render() {
        return (
          <div className="modal" role="dialog">
          <div className="modal-content">
          <div className="modal-header">
                       <center>
                        <h3 className="modal-tittle"><b>Look up Account</b>
                            <button className="close"
                               onClick={()=> {this.setState({showResetPasswordDialog: false})}}>
                                   &times;</button>
                        </h3>
                        </center>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={this.handleLookAccount}>
                            <label>
                                Account Email Address:
                                <input
                                className="form-control form-text"
                                type="email"
                                size="35"
                                placeholder="Enter Email Address"
                                pattern="[A-Za-z0-9._%+-]+@[a-Za-z0-9.-]+\.[a-Za-z]{2,}"
                                ref={this.AccountEmailRef}
                                required={true}
                                />
                            </label>
                            <button type="submit"
                                className="btn btn-primary btn-color-theme form-submit-btn">
                                    <span className="fa fa-search"></span>&nbsp;Loop Up Account
                                </button>
                        </form>
                    </div>
                </div>
       </div>      
       );
    }   
}

export default ResetPasswordDialog;