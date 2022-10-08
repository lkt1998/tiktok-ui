import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from './pages/Profile';
import Upload from './pages/Upload';
import Defaultlayout from './components/Layouts/DefaultLayout';
import HeaderOnly from './components/Layouts/HeaderOnly';
import Profilelayout from './components/Layouts/ProfileLayout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Defaultlayout><Home /></Defaultlayout>} />
          <Route path="/following" element={<Defaultlayout><Following /></Defaultlayout>} />
          <Route path="/upload" element={<HeaderOnly><Upload /></HeaderOnly>} />
          <Route path="/@:nickname" element={<HeaderOnly><Profile /></HeaderOnly>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
