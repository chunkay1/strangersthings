import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router';

import { myProfile, STORAGE_KEY } from './api/accountRequests';

import NavBar from './components/NavBar';
// import NewAccount from './components/NewAccount';
// import LogIn from './components/LogIn';
import Posts from './components/Posts';
import NewPost from './components/NewPost';

// import { logOut } from './api/accountRequests';

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

          {/* <Route exact path={'/profile'}>
            <Profile 
            token={token}/>
          </Route> */}

          <Route exact path={'/home'}>
            {
              (!token)
                ?
                <>

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

          </Route>

          <Route>
            <div>
              <h1>Page Not Found</h1>

              <h3>Perhaps you were looking for one of these pages?</h3>
                ///links to home or post

            </div>
          </Route>

        </Switch>
      </main>
    </div >
  );
}

export default App;
