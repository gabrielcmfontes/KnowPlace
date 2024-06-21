import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Course from './Pages/Course/Course';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/course" element={<Course/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </div>  
  );
}

export default App;
