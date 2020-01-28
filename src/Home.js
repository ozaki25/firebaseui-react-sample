import React from 'react';

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

export default Home;
