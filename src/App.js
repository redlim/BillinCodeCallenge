import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CardContainer from './components/CardContainer';
import CardViewer from './components/CardViewer';
import './normalize.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Billin code challenge</h2>
        <Switch>
          <Route exact path="/" component={CardContainer} />
          <Route path="/card/:id" component={CardViewer} />
        </Switch>
      </div>
    );
  }
}

export default App;
