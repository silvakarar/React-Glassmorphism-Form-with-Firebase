import React, {Component } from 'react';
import './App.css';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';
import Header from './components/header/header.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    }
  }
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  

  render() {
    return (
      <div className="App">
   <Header currentUser={this.state.currentUser} />
    <SignInAndSignUpPage />
   
      </div>
    );
  }

}

export default App;
