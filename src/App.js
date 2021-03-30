import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Chats from './components/Chats';
import ChatView from './components/ChatView';
import Preview from './components/Preview';
import WebcamCapture from './components/WebcamCapture';

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app__body">
          <Switch>
            <Route exact path="/chats/view">
              <ChatView />
            </Route>
            <Route exact path="/chats">
              <Chats />
            </Route>
            <Route exact path="/preview">
              <Preview />
            </Route>
            <Route exact path="/">
              <WebcamCapture />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
