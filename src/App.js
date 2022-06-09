
import './App.css';
import Addtask from './components/Addtask';
import ListTask from './components/ListTask';
import {useDispatch} from 'react-redux';
import { filerdone } from './features/todo';

function App() {
  const dispatch = useDispatch()
  return (
    <div className="App">
          <button className="filterbutton" onClick={() => dispatch(filerdone())}>filter</button>
      <div className="container">
        <div className="containerlist">
          <ListTask/>
        </div>
        <Addtask/>
    </div>
    </div>
  );
}

export default App;
