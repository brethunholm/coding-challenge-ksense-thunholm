import { useState } from 'react';
import DisplayUserPosts from './DisplayUserPosts';
import Table from './Table';
import '../css/Page.css';


export default function Page() {
  const [userId, setUserId] = useState(null);

  function displayPosts({ id }) {
    setUserId(id);
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
          Welcome to the <span className="highlight">theBlog</span>! Click on a user below to see a list of their posts!
      </div>

      <Table handleClick={displayPosts} />
      <DisplayUserPosts id={userId} />
    </div>
  );
}
