import React from 'react';
import './YoutubeComp.css';

const YoutubeComp = (props) => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img src="https://i.ibb.co/QfsTKWT/kaos1.png" alt="kaos1" border="0" />

        <p className="time">{props.time}</p>
      </div>
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
};
YoutubeComp.defaultProps = {
  time: '00.00',
  title: 'judul video',
  desc: '10x ditonton dalam 10 hari ',
};
export default YoutubeComp;
