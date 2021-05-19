import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Login from './components/Login';
import Main from './components/Main';
import Error from './components/Error';
import StocksComponent from './components/StocksComponent';
import './components/styles.css'
 
class App extends Component {
  render() {
    return (
       <BrowserRouter className=".body">
            <Switch>
              <Route path="/" component={Login} exact/>
              <Route path="/main" component={Main}/>
              <Route path="/stocks" component={StocksComponent}/>
              <Route component={Error}/>
           </Switch>
      </BrowserRouter>
    );
  }
}
 
export default App;