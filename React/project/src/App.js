import logo from './logo.svg';
import './App.css';
import Main from './components/Main.js'
import DateOfBirth from './components/DateOfBirth.js'
import {EnterMail} from './components/EnterMail.js'
import Game from './components/Game.js'
import MathmaticalQuestion from './components/MathmaticalQuestion'
import Success from './components/Success'
import Thanks from './components/Thanks'
import { Switch,Route, Link, BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <Router>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route path="/dob">
            <DateOfBirth />
          </Route>
          <Route path="/Email">
            <EnterMail />
          </Route>
          <Route path="/Game">
            <Game />
          </Route>
          <Route path="/MathmaticalQuestion">
            <MathmaticalQuestion />
          </Route>
          <Route path="/Success">
            <Success />
          </Route>
          <Route path="/Thanks">
            <Thanks />
          </Route>
    </Router>
    </div>
  );
}

export default App;
