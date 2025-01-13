import axios from 'axios';
import { useEffect, useState } from 'react';
import PostItem from './PostItem';

export default function RealPost() {
  // https://jsonplaceholder.typicode.com/posts
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );

    console.log(response.data);
    setPosts(response.data.slice(0, 10));
  };

  //   useEffect의 callback으로는 async, await를 사용할 수 없음
  //  > async await를 사용하는 함수를 따로 만들어야 함
  useEffect(() => {
    // getPosts();
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setPosts(res.data.slice(0, 5));
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h6>Real Posts</h6>
      {posts.length === 0 ? (
        <span>Loading...</span>
      ) : (
        posts.map(post => {
          return (
            <PostItem
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          );
        })
      )}
    </>
  );
}
