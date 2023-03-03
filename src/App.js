import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import MainContent from './pages/MainContent';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import CreatePost from './pages/create-post/CreatePost';
function App() {
  return (
    <div className="App">

 <Router>
 <Navbar/>
  <Routes>
    <Route path="/" element={<MainContent/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/createpost" element={<CreatePost/>} />
  </Routes>
 </Router>
    </div>
  );
}

export default App;
