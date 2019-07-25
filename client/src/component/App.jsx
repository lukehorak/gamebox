import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import WingIt from './wingit/WingIt';
import CloseEnough from './close-enough/CloseEnough';

import SocketTest from './prototyping/SocketTest';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/prototyping" component={SocketTest}/>
          <Route path="/wingit" component={WingIt} />
          <Route path="/closeenough" component={CloseEnough} />
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
