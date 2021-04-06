import logo from './logo.svg';
import './App.css';
import {Greet, Hello, TwoPlayer} from './components/greeting.js'
import {ClassComp, ClassClick} from './components/classComp.js'
import FunctionClick from './components/eventHandling.js'
import {UserGreeting} from './components/UserGreet.js'
import {NameList, PersonList} from './components/NameList.js'
import {ParentComponent} from './components/ParentComponent.js'
import Form from './components/Form.js'
import LifeCycleA from './components/LifeCycleA.js'
function App() {
  return (
    <div className="App">
    {  /* <Form />
      <Greet name ="Washi"></Greet>
      <p> he is a Great player</p>
      <Greet name ="Sundar"></Greet>
      <ClassComp />
      <TwoPlayer player1="Rishab Pant"  player2="KL Rahul" />
      <Hello/>
      <ParentComponent/>
      <NameList/>
      <PersonList/>
       <span> function click is used<FunctionClick></FunctionClick></span>
      class Click is used <ClassClick/>
      <UserGreeting /> */}
      <LifeCycleA />
    </div>
  );
}

export default App;
