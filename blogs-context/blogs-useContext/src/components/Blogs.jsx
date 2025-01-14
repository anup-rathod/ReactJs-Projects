import React, {useContext} from 'react'
import Spinner from './Spinner'
import { AppContext } from '../context/AppContext'



const Blogs = () => {

  //consume
  const {posts, loading} = useContext(AppContext);
 
  console.log("printing inside blog component");
  function Blogs() {
    return (
      loading ? (
        <Spinner />
      ) : (
        posts.length === 0 ? (
          <div>
            <p>No Post Found</p>
          </div>
        ) : (
          posts.map((post) => (
            <div key={post.id}>
              <p>{post.title}</p>
              <p>
                By <span>{post.author}</span> on <span>{post.category}</span>
              </p>
              <p>Posted on {post.date}</p>
              <p>{post.content}</p>
              <div>
                {post.tags.map((tag, index) => (
                  <span key={index}>{`#${tag}`}</span>
                ))}
              </div>
            </div>
          ))
        )
      )
    );
  };
}
export default Blogs;