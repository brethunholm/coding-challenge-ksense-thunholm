import { useState } from 'react';
import DisplayUserPosts from './DisplayUserPosts';
import Table from './Table';
import '../css/Page.css';


export default function Page() {
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null)

  function displayPosts({ id, name }) {
    setUserId(id);
    setUserName(name)
  }
  return (
    <div className="container">
      <div className="hero">
        <h1>Ksense Coding Challenge</h1>
        <h4>Breanna Thunholm</h4>
        <a
          href="https://www.brethunholm.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="personal-website"
        >
          brethunholm.com
        </a>
      </div>
      <div className="application-info">
          <p>Welcome to <a className="highlight" href="#userList">theBlog</a>! Click on a user below to see a list of their posts!</p>
       
          <div className="project-details">
          <span>This application utilizes the following technologies:</span>
          <ul>
            <li>React JS</li>
            <li>Bootstrap</li>
            <li>CSS Grid</li>
            <li>Fetch</li>
            <li>DevOps - Netlify</li>
          </ul>
          </div>
          
      </div>

      <Table handleClick={displayPosts} />
      <DisplayUserPosts id={userId} userName={userName} />
    </div>
  );
}
