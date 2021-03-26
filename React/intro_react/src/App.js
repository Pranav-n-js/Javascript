import logo from './logo.svg';
import './App.css';
import {Greet, Hello, TwoPlayer} from './components/greeting.js'
import ClassComp from './components/classComp.js'
function App() {
  return (
    <div className="App">
      <Greet name ="Washi"></Greet>
      <p> he is a Great player</p>
      <Greet name ="Sundar"></Greet>
      <ClassComp />
      <TwoPlayer player1="Rishab Pant" player2="KL Rahul" />
      <Hello/>
    </div>
  );
}

export default App;
