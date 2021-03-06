import { useEffect, useState } from 'react';
import '../css/Posts.css';

export default function DisplayUserPosts({ id, userName }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, [id, setPosts]);

  return (
    <div className="blog-posts-container">
      <h1>{userName ? `Posts by ${userName}` : `Select an user from the above table to display posts`} </h1>
      <hr />
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
