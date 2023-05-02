import './App.css';
import FirstComponent from './components/FirstComponent';
import Home from './components/Home/Home';
import { Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import TourDetails from './components/TourDetails/TourDetails';
function App() {
  return (
    <div>
      {/* <FirstComponent/>
      <FirstComponent/> */}
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/city/:id' element={<TourDetails/>}/>
      </Routes>

    </div>
     );
}

export default App;
