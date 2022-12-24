import React, { useState, useEffect } from 'react';

import { myProfile, STORAGE_KEY } from './api/accountRequests';

import NewAccount from './components/NewAccount';
import Posts from './components/Posts';
import NewPost from './components/NewPost';

import { logOut } from './api/accountRequests';

import LogIn from './components/LogIn';
// import MessageForm from './components/MessageForm';



// import { URL } from './constants/constants';


function App() {
  const [token, setToken] = useState('')

  useEffect(() => {
    const token = localStorage.getItem(`${STORAGE_KEY}`);

    if (token) {
      setToken(token)
      myProfile({ token })
    }

  }, [])

  // useEffect(() => {
  //   myProfile({ token })
  //   console.log('first');
  // }, [token])


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
            logOut();
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
              <Posts />
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
