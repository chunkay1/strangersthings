import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { myProfile, STORAGE_KEY } from './api/accountRequests';

import NavBar from './components/NavBar';
import NewAccount from './components/NewAccount';
import LogIn from './components/LogIn';
import Posts from './components/Posts';
import Profile from './components/Profile';
import NotFound from './components/NotFound';

function App() {
  const [token, setToken] = useState('')


  useEffect(() => {
    const token = localStorage.getItem(`${STORAGE_KEY}`);

    if (token) {
      setToken(token)
      myProfile({ token })
    }

  }, [])

  return (
    <div className="App">
      <nav>
        <NavBar
          token={token}
        />
      </nav>

      <main>
        <Switch>

          <Route exact path={'/home'}>
            {
              (!token)
                ?
                <>

                  <h3>Welcome to Stranger's Things!</h3>
                  <br />
                  <h2>Please sign-in or create an account to get started.</h2>

                  <div>
                    <NewAccount />
                  </div>

                  <div>
                    <LogIn />
                  </div>

                </>
                :

                <>
                  <h3>Welcome to Stranger's Things!</h3>
                  <br />
                  <h2>Use the links below to get started</h2>

                  <ul>
                    <li><Link to={'/posts'}>Posts</Link></li>
                    <li><Link to={'/profile'}>Profile</Link></li>
                  </ul>
                </>

            }
          </Route>

          <Route exact path={'/posts'}>
            <Posts
              token={token} />
          </Route>

          <Route exact path={'/profile'}>
            {
              (!token)
                ?
                <h2>Please <Link to={'/home'}>log in or create a profile</Link> to view your messages</h2>
                :
                <Profile
                  token={token} />
            }
          </Route>

          <Route>
            <NotFound />
          </Route>

        </Switch>
      </main>
    </div >
  );
}

export default App;
