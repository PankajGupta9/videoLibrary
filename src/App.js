import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './componentss/Header';
import Home from './componentss/Home';
import Footer from './componentss/Footer';
import Videos from './componentss/Videos';
import Upload from './componentss/Upload';
import Login from './componentss/Login';
import SignUp from './componentss/SignUp';

function App() {
  return (
  <Router>
  <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/videos' element={<Videos/>}/>
      <Route path='/upload' element={<Upload/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      <Footer/>
  </Router>
  ); 
}

export default App;
