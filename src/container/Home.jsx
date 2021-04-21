import React from 'react';
import YoutubeComp from '../component/YoutubeComp/YoutubeComp';
import BlogPost from './BlogPost/BlogPost';
import LiveCycleComp from './LiveCycleComp/LiveCycleComp';

class Home extends React.Component {
  // state = {
  //   showComponen: true,
  // };
  // componentDidMount() {
  //   // setInterval(() => {
  //   //   this.setState({
  //   //     showComponen: false,
  //   //   });
  //   // }, 5000);
  // }
  render() {
    return (
      <div>
        {/* <p>Youtube Component</p>
        <hr /> */}
        {/* <YoutubeComp
          time="8.10"
          title="anu anu"
          desc="500x ditonton selama 30hari"
        />
        <YoutubeComp
          time="7.10"
          title="tuman"
          desc="450x ditonton selama 30hari "
        />
        <YoutubeComp
          time="6.41"
          title="sopan lu yeh"
          desc="1000x ditonton selama 30hari"
        />
        <YoutubeComp /> */}
        {/* <p>Live Cycle Component</p>

        <br />
        {this.state.showComponen ? <LiveCycleComp /> : null} */}

        <p>Blog Post</p>
        <hr />
        <BlogPost />
      </div>
    );
  }
}
export default Home;
