import React, {Component} from 'react';
import MyComponet from './MyComponent'; // MyComponent 를 불러옵니다.

class App extends Component {
  render() {

    return (
      <MyComponet name="React" age={4}/>
      );
  }
}


export default App;