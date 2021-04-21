import React, { Component } from 'react';
import '../LiveCycleComp/LiveCycleComp.css';

class LiveCycleComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
    console.log('construktor');
  }
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return null;
  }
  componentDidMount() {
    console.log('componentDidMount');
    // setInterval(() => {
    //   this.setState({
    //     count: 2,
    //   });
    // }, 3000);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.group('shouldComponentUpdate');
    console.log('nextState', nextState);
    console.log('this State', this.state);
    console.groupEnd();
    if (nextState.count > 4) {
      return false;
    }
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');
    return null;
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  ShowAlert = () => {
    alert('berhasil');
  };
  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    console.log('render');
    return (
      <div className="btn">
        <p>Live Cyle Component</p>
        <button onClick={this.changeCount}>
          This Button {this.state.count}
        </button>
      </div>
    );
  }
}
export default LiveCycleComp;
