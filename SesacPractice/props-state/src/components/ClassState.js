import { Component } from 'react';

export default class PClassState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increase = () => {
    this.setState(prevState => ({ count: prevState.count + 2 }));
  };

  decrease = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };
  render() {
    return (
      <div>
        <h4>클래스형</h4>
        <p>숫자: {this.state.count}</p>
        <button onClick={this.increase}>+2</button>
        <button onClick={this.decrease}>-1</button>
      </div>
    );
  }
}
