import React, {Component} from 'react';
import './App.css'

class App extends Component {
  render() {
    const text = '당신은 어썸한가요?';
    const condition = true;
    const style = {
      backgroundColor: 'gray',
      border: '1px solid black',
      height: Math.round(Math.random() * 300) + 50,
      width: Math.round(Math.random() * 300) + 50,
      WekitTransition: 'all',
      MozTransition: 'all',
      msTransition: 'all'
    }
    return (
      // 부모가 있어야한다. h1, h2 두개의 태그를 사용하려면 div tag 로 감싸줘야한다.
      // Virtual DOM 이라고 한다.
      <div className="my-div">
        <h1>리액트 안녕!</h1>
        <h2>{text}</h2>
        {
          condition && '보여주세요'
        }
        <div 
          style={style}>
        </div>
        // 여기 쓰는 건 그대로 렌더링됩니다.
        /* 여기에선 주석 못 써요 */
      </div>
    );
  }
}

export default App;