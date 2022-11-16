
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/foooter/footer';
import Home from './components/pages/home';
import Place from './components/pages/place';
import Navbar from './components/navbar/navbar';


function App() {
  return (
    <div className=" min-h-screen w-screen">
      <Router >
        <Navbar />
        <Routes>
        
      
          <Route path='/' element={<Home />} />
          <Route path='/place' element={<Place />} />

          
        </Routes>
        <Footer />
      </Router>
      
      
      
    </div>
  );
}

export default App;
