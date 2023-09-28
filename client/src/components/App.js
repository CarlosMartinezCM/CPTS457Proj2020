import React from 'react';
import NavBar from './NavBar.js';
import SideMenu from './SideMenu.js';
import LoginPage from './LoginPage.js';
import AppMode from "./../AppMode.js"
import HomePage from './HomePage.js';
import AboutBox from './AboutBox.js';
import twoFactor from './twoFactor.js';

const modeTitle = {};
modeTitle[AppMode.LOGIN] = "Network Authentication";
modeTitle[AppMode.HOMEPAGE] = "Welcome Back!!";
modeTitle[AppMode.TWOFACTOR] = "SMS Authentication";

const modeToPage = {};
modeToPage[AppMode.LOGIN] = LoginPage;
modeToPage[AppMode.HOMEPAGE] = HomePage;
modeToPage[AppMode.TWOFACTOR] = twoFactor;

class App extends React.Component {

  constructor() {
    super();
    this.state = {mode: AppMode.LOGIN,
                  menuOpen: false,
                  mode1: AppMode.TWOFACTOR,
                  authenticated: false,
                  userObj: {displayName: "", profilePicURL: ""},
                  editAccount: false,
                  showEditAccountDialog: false,
                  userId: "",
                  showAbout: false};
  }
   //componentDidMount
   componentDidMount() {
    if (!this.state.authenticated) { 
      //Use /auth/test route to (re)-test authentication and obtain user data
      fetch("/auth/test")
        .then((response) => response.json())
        .then((obj) => {
          if (obj.isAuthenticated) {
            this.setState({
              userObj: obj.user,
              authenticated: true,
              mode: AppMode.TWOFACTOR
            });
          }
        }
      )
    } 
  }
    //refreshOnUpdate(newMode) -- Called by child components when user data changes in 
  //the database. The function calls the users/:userid (GET) route to update 
  //the userObj state var based on the latest database changes, and sets the 
  //mode state var is set to newMode. After this method is called, the
  //App will re-render itself, forcing the new data to 
  //propagate to the child components when they are re-rendered.
  refreshOnUpdate = async(newMode) => {
    let response = await fetch("/users/" + this.state.userObj.id);
    response = await response.json();
    const obj = JSON.parse(response);
    this.setState({
      userObj: obj,
      mode: newMode
    });
  }


  toggleAbout = () => {
    this.setState(prevState => ({showAbout: !prevState.showAbout}));
  }

  handleChangeMode = (newMode) => {
    this.setState({mode: newMode});
  }

  openMenu = () => {
    this.setState({menuOpen : true});
  }
  
  closeMenu = () => {
    this.setState({menuOpen : false});
  }

  toggleMenuOpen = () => {
    this.setState(prevState => ({menuOpen: !prevState.menuOpen}));
  }

  setUserId = (Id) => {
    this.setState({userId: Id,
                   authenticated: true});
  }

  setUserObjType = (newType) => {
    this.setState({userObj: newType});
  }
  render() {
    const ModePage = modeToPage[this.state.mode];
    return (
      <div>
        {this.state.showAbout ? <AboutBox hideAbout={this.toggleAbout}/> : null}
        <NavBar 
          title={modeTitle[this.state.mode]} 
          mode={this.state.mode}
          changeMode={this.handleChangeMode}
          menuOpen={this.state.menuOpen}
          toggleMenuOpen={this.toggleMenuOpen}
          />
          <SideMenu 
            menuOpen = {this.state.menuOpen}
            mode={this.state.mode}
            toggleMenuOpen={this.toggleMenuOpen}
            displayName={this.state.userObj.displayName}
            profilePicURL={this.state.userObj.profilePicURL}
            localAccount={this.state.userObj.authStrategy === "local"}
            showAbout={this.toggleAbout}
            logOut={() => this.handleChangeMode(AppMode.LOGIN)}
            />
           <ModePage 
           displayName={this.state.userObj.displayName}
           profilePicURL={this.state.userObj.profilePicURL}
           localAccount={this.state.userObj.authStrategy === "local"}
            menuOpen={this.state.menuOpen}
            mode={this.state.mode}
            changeMode={this.handleChangeMode}
            userObj={this.state.userObj}
            refreshOnUpdate={this.refreshOnUpdate}
            phoneNumber={this.state.userObj.phoneNumber}
            logOut={() => this.handleChangeMode(AppMode.LOGIN)}
            />
      </div>
    );  
  }
}

export default App;