
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Sidebar/>}/>
        </Routes>
    </div>
  );
}

export default App;
