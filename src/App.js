import React, { useState, useEffect } from 'react';

import { myProfile, STORAGE_KEY } from './api/accountRequests';

import NewAccount from './components/NewAccount';
import Posts from './components/Posts';
import NewPost from './components/NewPost';

// import { logOut } from './api/accountRequests';

import LogIn from './components/LogIn';



// import { URL } from './constants/constants';


function App() {
  const [token, setToken] = useState('')

  useEffect(() => {
    const token = localStorage.getItem(`${STORAGE_KEY}`);

    setToken(token)

  }, [])

  useEffect(() => {
    myProfile({ token })
    console.log('first');
  }, [token])


  return (
    <div className="App">
      <nav>
        <h1>Stranger's Things</h1>

        <ul>
          <li>Home</li>
          <li>Posts</li>
          <li>Profile</li>
        </ul>

        <button
          onClick={(event) => {
            console.log('come back and find out why this is console logging automatically, this is supposed to be the log out button...')
          }



          }
        >Log Out</button>

      </nav>

      <main>


        {
          (!token)
            ?
            <>
              <NewAccount />
              <LogIn />
            </>
            :
            <>
              <NewPost />
              <Posts />
            </>
        }
        {/* <br /> */}

      </main>
    </div >
  );
}

export default App;
