import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      // 부모가 있어야한다. h1, h2 두개의 태그를 사용하려면 div tag 로 감싸줘야한다.
      // Virtual DOM 이라고 한다.
      <div>
        <h1>리액트 안녕!</h1>
        <h2>당신은 어썸한가요?</h2>
      </div>
    );
  }
}

export default App;