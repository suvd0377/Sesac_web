import '../style/StylePractice5.scss';
import { useEffect, useState } from 'react';

export default function StylePractice5() {
  // {id, title, body}[]
  const fakePosts = [
    {
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
    },
    {
      id: 3,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut',
    },
  ];

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setPosts(fakePosts);
    }, 5000);
  }, []);
  //   setPosts(fakePosts); // 무한 렌더링
  return (
    <>
      return (
      <>
        <h6 className="name">📨PostList</h6>
        <div className="post-list">
          {posts.length !== 0 ? (
            posts.map(element => (
              <div key={element.id} className="post-item">
                <div className="post-header">
                  <span>No. {element.id}</span>
                  <span> {element.title}</span>
                </div>
                <p>{element.body}</p>
              </div>
            ))
          ) : (
            <div className="loading">Loading...</div>
          )}
        </div>
      </>
      );
    </>
  );
}
