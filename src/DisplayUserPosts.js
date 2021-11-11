import { useEffect, useState } from 'react';

export default function DisplayUserPosts({ id }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, [id, setPosts]);
  
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}
