import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Region from './routes/Region';
import Privacy from './components/Privacy'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/region' element={<Region/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Privacy' element={<Privacy/>}/>
      </Routes>
    </div>
  );
}

export default App;
