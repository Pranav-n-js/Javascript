import './App.css';
import PortalDemo from './components/PortalDemo'

{/*
   import RefsDemo from './components/RefsDemo'
   import ParentComp from './components/ParentComp.js'
   import PureComp from './components/PureComponents.js'
   import FragmentDemo from './components/FragmentDemo.js';
   import Tables from './components/Tables.js';
   import LifeCycleA from './components/LifeCycleA.js'
   import {Greet, Hello, TwoPlayer} from './components/greeting.js'
   import {ClassComp, ClassClick} from './components/classComp.js'
   import FunctionClick from './components/eventHandling.js'
   import {UserGreeting} from './components/UserGreet.js'
   import {NameList, PersonList} from './components/NameList.js'
   import {ParentComponent} from './components/ParentComponent.js'
   import Form from './components/Form.js'
*/}

function App() {
  return (
    <div className="App">
      <PortalDemo />
      {/*
         <RefsDemo />
         <ParentComp />
         <ClassComp />
         <FragmentDemo/>
         <Form />
         <Tables/>
         <Greet name ="Washi"></Greet>
         <p> he is a Great player</p>
         <Greet name ="Sundar"></Greet>

         <TwoPlayer player1="Rishab Pant"  player2="KL Rahul" />
         <Hello/>
         <ParentComponent/>
         <NameList/>
         <PersonList/>
         <span> function click is used<FunctionClick></FunctionClick></span>
         class Click is used <ClassClick/>
         <UserGreeting />
         <LifeCycleA />
      */}

    </div>
  );
}

export default App;
