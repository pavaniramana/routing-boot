import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Header from './Component/Header';
import PageNotFound from './Component/PageNotFound';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*'element={<PageNotFound />}/>
      </Routes>
    </Router>
  );
}

export default App;
