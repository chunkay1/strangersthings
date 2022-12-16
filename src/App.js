// import React from 'react';
import NewAccount from './components/newAccount';

import Posts from './components/posts';

// import LogIn from './components/logIn';
// import { useEffect } from 'react';

// import { URL } from './constants/constants';


function App() {
  // async function getPosts() {
  //   const response = await fetch(
  //     `https://strangers-things.herokuapp.com/api/COHORT-NAME/posts`);

  //   const data = await response.json();

  //   console.log(data);

  // }

  // useEffect(() => {
  //   getPosts();
  // }, [])

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

        {/* <LogIn /> */}

        {/* <Posts /> */}
        <NewAccount />

      </main>
    </div>
  );
}

export default App;
