import DisplayUserPosts from "./DisplayUserPosts";
import Table from "./Table";
import { useState } from 'react';
import '../css/Page.css';

export default function Page() {
    const [userId, setUserId] = useState(null)

    function displayPosts({ id }) {
      setUserId(id)
  }
    return(
        <div className="container">
        <h1>Ksense Coding Challenge - Breanna Thunholm</h1>
        <hr />
        <Table handleClick={displayPosts} />
        <DisplayUserPosts id={userId} />
      </div>
    )
}