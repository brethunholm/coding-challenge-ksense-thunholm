import { useState } from 'react';
import Table from "./Table";
import DisplayUserPosts from './DisplayUserPosts.js';
import './App.css';

function App() {
  const [userId, setUserId] = useState(null)

  function displayPosts({ id }) {
    setUserId(id)
}
  return (
    <div className="container">
      <h1>Ksense Coding Challenge</h1>
      <h2>Breanna Thunholm</h2>
      <p>
        You will be developing a one-page web application that receives JSON
        data and renders the data into the DOM. You will be using the following
        API: https://jsonplaceholder.typicode.com/ You should be able to find
        the endpoints you need on that page for users, posts, etc. Using jQuery
        or vanilla JS you will display each 'USER' in a table. When the user
        selects a 'USER' in the table, it will display all of the 'POSTS' that
        were created by that 'USER'. You have full freedom in how you accomplish
        the above objectives. You also have full freedom as far as design is
        concerned. Please do not spend more than 2 hours on this task. Once
        completed, please upload your code to a Github repo and send us the link
        via Indeed chat. Having a live version of the project is also
        encouraged. Good Luck.
      </p>
      <h3>User Posts</h3>
      <hr />
      <Table handleClick={displayPosts} />
      <DisplayUserPosts id={userId} />
    </div>
  );
}

export default App;
