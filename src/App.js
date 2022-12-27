import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router';

import { myProfile, STORAGE_KEY } from './api/accountRequests';

import NavBar from './components/NavBar';
import NewAccount from './components/NewAccount';
import Posts from './components/Posts';
import NewPost from './components/NewPost';

// import { logOut } from './api/accountRequests';

import LogIn from './components/LogIn';
import Profile from './components/Profile';

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
        <NavBar
          token={token}
        />
      </nav>

      <main>
        <Switch>


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
                <Profile
                  token={token}
                />
                <Posts />
              </>
          }
          {/* <br /> */}

        </Switch>
      </main>
    </div >
  );
}

export default App;
