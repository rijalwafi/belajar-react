import React, { Component, Fragment } from 'react';
import Post from '../../component/post/Post';
import axios from 'axios';

import './BlogPost.css';
class BlogPost extends Component {
  state = {
    post: [],
  };
  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((response) => response.json())
    //   .then((json) =>
    //     this.setState({
    //       post: json,
    //     })
    //   );
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      console.log(res.data);
      this.setState({
        post: res.data,
      });
    });
  }
  render() {
    return (
      <Fragment>
        <p>Blog Post</p>

        {this.state.post.map((posts) => {
          return <Post title={posts.title} desc={posts.body} />;
        })}
      </Fragment>
    );
  }
}
export default BlogPost;
