import React, { useEffect, useState } from 'react';
import 'firebase/auth';
import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
};

firebase.initializeApp(config);

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

function Login({ signIn }) {
  useEffect(() => {
    const unregister = firebase.auth().onAuthStateChanged(signIn);
    return () => unregister();
  }, [signIn]);

  return (
    <div>
      <h1>Hello！</h1>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

function Home({ user, signOut }) {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>uid: {user.uid}</p>
      <p>displayName: {user.displayName}</p>
      <p>email: {user.email}</p>
      <p>phoneNumber: {user.phoneNumber}</p>
      <p>photoURL: {user.photoURL}</p>
      <button onClick={signOut}>SignOut</button>
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);

  const signIn = user => {
    setUser(user);
  };

  const signOut = () => {
    firebase.auth().signOut();
    setUser(null);
  };

  return user ? (
    <Home user={user} signOut={signOut} />
  ) : (
    <Login signIn={signIn} />
  );
}

export default App;
