import React, { useEffect } from 'react';
import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

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

export default Login;
