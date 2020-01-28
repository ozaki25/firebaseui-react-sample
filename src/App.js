import React, { useState } from 'react';
import 'firebase/auth';
import firebase from 'firebase/app';

import Home from './Home';
import Login from './Login';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
};

firebase.initializeApp(config);

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
