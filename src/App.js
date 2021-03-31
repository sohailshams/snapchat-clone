import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Chats from './components/Chats';
import ChatView from './components/ChatView';
import Login from './components/Login';
import Preview from './components/Preview';
import WebcamCapture from './components/WebcamCapture';
import { selectUser } from './features/appSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
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
        )}
      </Router>
    </div>
  );
}

export default App;
