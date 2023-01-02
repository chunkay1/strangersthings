import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router';
import { myProfile, STORAGE_KEY } from './api/accountRequests';

import NavBar from './components/NavBar';
import Posts from './components/Posts';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import Home from './components/Home';

import styles from './App.module.css'

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
    <div className={styles.App}>
      <nav className={styles.navContainer}>
        <NavBar
          token={token}
        />
      </nav>

      <main className={styles.main}>
        <Switch>

          <Route exact path={'/'}>
            <Home
              token={token} />
          </Route>

          <Route exact path={'/home'}>
            <Home
              token={token} />
          </Route>

          <Route exact path={'/posts'}>
            <Posts
              token={token} />
          </Route>

          <Route exact path={'/profile'}>
            <Profile
              token={token} />
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
