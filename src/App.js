import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';


import { myProfile, STORAGE_KEY } from './api/accountRequests';

import NavBar from './components/NavBar';
import NewAccount from './components/NewAccount';
import LogIn from './components/LogIn';
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
            {
              (!token)
                ?
                <>
                  <Posts
                    token={token} />
                </>
                :
                <>

                  <NewPost />
                  <Posts
                    token={token} />
                </>
            }
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
            <div>
              <h1>Page Not Found</h1>
              <img src={'https://media.tenor.com/nEP6ovplEd8AAAAj/so-really.gif'} alt='lost' />
              <h3>Try using the links above!</h3>
              {/* <h2>Unless you're too lazy to move your cursor, in which case...same</h2>

              <ul>
                <li><Link to={'/home'}>Home</Link></li>
                <li><Link to={'/posts'}>Posts</Link></li>
                <li><Link to={'/profile'}>Profile</Link></li>
              </ul> */}

            </div>
          </Route>

        </Switch>
      </main>
    </div >
  );
}

export default App;
