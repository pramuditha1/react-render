import logo from './logo.svg';
import './App.css';
import { UseState } from './components/useState/UseState';
import { UseReducer } from './components/useState/useReducer';
import { ParentOne } from './components/child-parent-render-optimization/ParentOne'
import { ChildOne } from './components/child-parent-render-optimization/ChildOne'

function App() {
  return (
    <div className="App">
      {/* <UseState/> */}
      {/* <UseReducer/> */}
      <ParentOne>
        <ChildOne/>
      </ParentOne>
    </div>
  );
}

export default App;
