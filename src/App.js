// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes, Route,} from 'react-router-dom';
import Create from './Componant/Create'

import Navbar from './Componant/Navbar';
import Read from './Componant/Read'
import Update from './Componant/Update';
import About from './Componant/About';
import Home from './Componant/Home';
import Submitsuccessfull from './Componant/Submitsuccessfull';

function App() {
  
  return (
    <div className="App">
     <Navbar/>
    <Router>
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/create' element={<Create/>}/>
        <Route path='/read' element={<Read/>}></Route>
        <Route path='/update' element={<Update/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/submit' element={<Submitsuccessfull/>} />
      </Routes>
    </Router>
     
    </div>
  );
}

export default App;
