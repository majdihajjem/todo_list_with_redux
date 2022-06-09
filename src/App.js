
import './App.css';
import Addtask from './components/Addtask';
import ListTask from './components/ListTask';

function App() {
  return (
    <div className="App">
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
