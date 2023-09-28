import React from 'react';
import { async } from 'regenerator-runtime';
import AppMode from './../AppMode.js'
import App from './App.js';

class twoFactor extends React.Component {
    constructor() {
        super();
        //Create a ref for the email input DOM element
       this.emailInputRef = React.createRef();
        this.state = {
            SMScode: "",
            accountCreateMsg: "",
            loginBtnIcon: "fa fa-sign-in",
            loginBtnLabel: "Log In",
            loginMsg: "",
            val: "",
            random: 0,
            message:{
            recipient: "",
            textmessage: ""
            }

        }
      }
 
    handleChange = (event) => {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
        
    }
    
    //handleLoginSubmit -- Called when user clicks on login button.
    handleSubmitCode = (event) => {
    event.preventDefault();
     this.setState({loginBtnIcon: "fa fa-spin fa-spinner",
                   loginBtnLabel: "Logging In..."});
     setTimeout(1000);    
     this.props.changeMode(AppMode.HOMEPAGE);
    }
   
    sendText= (event) => {
    event.preventDefault();
    this.setState({ submitting: true });

    //this.setState({message:{...this.state.message}})
    //this.props.phoneNumber=this.state.message.recipient;
    //value=this.state.message.textmessage;
    fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.message)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.setState({
            error: false,
            submitting: false,
            message: {
              recipient: this.props.phoneNumber,
              body: "004732"
            }
          });
        } else {
          this.setState({
            error: true,
            submitting: false
          });
        }
      });
             }
              
    //try adding the actual number where i have the number number displayed.
    render() {
        return(
            
            <div className="padded-page">
            <center>
            <h1 >SMS Authentication</h1>
            
            <img src="https://image.freepik.com/free-vector/2fa-icon-password-secure-login-authentication-verification-sms-push-code-messages-symbol-smartphone-mobile-phone-flat-isolated-pictogram_101884-953.jpg" 
             height="300" width="400"/>

             <h2> ({this.props.phoneNumber})</h2>
             <span>&nbsp;</span>
             
              <form onSubmit={this.handleSubmitCode}>
            <label>
                Enter Code
                <input
                ref={this.SMScode}
                className="form-control form-text form-center"
                name="SMSCode"
                type="SMSCode"
                size="35"
                placeholder="Enter Code Here"
                required={true}               
                />
            </label>
            </form>
            <button type="submit" 
                className="btn btn-primary btn-color-theme modal-submit-btn"
                onClick={this.sendText}>
                <span className="fa fa-user-plus"></span>&nbsp;Send Code
            </button>
            
            </center>
            <a id="logOutBtn" className="logOut-Btn"
               onClick={this.props.logOut}>
              <span className="floatbtn-icon"></span>&nbsp;Cancel</a>
              <br/>
          <br/>
          <br/>
        </div>
        )
    }
}

export default twoFactor;
