import logo from './logo.svg';
import './App.css';
import Demo from './components/demo'
import R from './components/Renu'
import Hook from './components/hookslnc'
import ClassBasedCom from "./components/classBasedComponent"
function App() {
  return (
    <div className="App">
      <h1>Hello NEC</h1>
      <Demo></Demo>
       <Demo />
       <Demo />
       <Demo />
       <R name=" Renu">NEC</R>
       <R name=" Renuka">NEC</R>
       <Home/>
       <h1>Hooks Concept</h1>
       <Hook />
       <ClassBasedCom />
    </div>
  );
}
let Home=()=>{
  return(
    <h1>This is my Home Component</h1>
  );
}
export default App;
