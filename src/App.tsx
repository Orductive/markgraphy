import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Videography from './pages/Videography';
import VideoDetail from './pages/VideoDetail';
import Photography from './pages/Photography';
import AlbumDetail from './pages/AlbumDetail';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="videography" element={<Videography />} />
          <Route path="videography/:id" element={<VideoDetail />} />
          <Route path="photography" element={<Photography />} />
          <Route path="photography/:albumId" element={<AlbumDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
