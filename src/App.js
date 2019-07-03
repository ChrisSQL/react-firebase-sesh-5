import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import logo from './logo.svg';
import './App.css';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends Component {
  render() {
    const {
      user,
      signOut,
        signInWithFacebook,
    } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {
            user
              ? <p>Hello, {user.displayName}</p>
              : <p>Please sign in.</p>
          }

          {
            user
              ? <button onClick={signOut}>Sign out</button>
              : <button onClick={signInWithFacebook}>Join the Sesh</button>


          }
        </header>
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  facebookProvider: new firebase.auth.FacebookAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
