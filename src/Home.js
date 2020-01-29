import React from 'react';

function Home({ user, signOut }) {
  return (
    <div>
      <h1>Welcome!</h1>
      <div>
        <img src={user.photoURL} alt="user icon" width="60" height="60" />
        <p>名前: {user.displayName}</p>
        <p>メールアドレス: {user.email}</p>
        <p>電話番号: {user.phoneNumber || '登録なし'}</p>
      </div>
      <button onClick={signOut}>SignOut</button>
    </div>
  );
}

export default Home;
