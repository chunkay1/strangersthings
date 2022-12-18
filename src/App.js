import React, { useState, useEffect } from 'react';

import { STORAGE_KEY } from './api/getRequests';

import NewAccount from './components/newAccount';
import Posts from './components/Posts';
import NewPost from './components/NewPost';
// import LogIn from './components/logIn';



// import { URL } from './constants/constants';


function App() {
  const [token, setToken] = useState('')

  useEffect(() => {
    const token = localStorage.getItem(`${STORAGE_KEY}`);

    setToken(token)
  }, [])


  return (
    <div className="App">
      <nav>
        <h1>Stranger's Things</h1>

        <ul>
          <li>Home</li>
          <li>Posts</li>
          <li>Profile</li>
        </ul>

      </nav>

      <main>
        {
          (!token)
            ?
            <NewAccount />
            :
            <>
              <NewPost />
              <Posts />
            </>
        }
        {/* <LogIn /> */}
        {/* <br /> */}

      </main>
    </div>
  );
}

export default App;
