import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Videography from './pages/Videography';
import VideoDetail from './pages/VideoDetail';
import Photography from './pages/Photography';
import AlbumDetail from './pages/AlbumDetail';
import SubAlbumDetail from './pages/SubAlbumDetail';
import SubFolderDetail from './pages/SubFolderDetail';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="videography" element={<Videography />} />
            <Route path="videography/:id" element={<VideoDetail />} />
            <Route path="photography" element={<Photography />} />
            <Route path="photography/:albumId" element={<AlbumDetail />} />
            <Route path="photography/:albumId/:subAlbumId" element={<SubAlbumDetail />} />
            <Route path="photography/:albumId/:subAlbumId/:subFolderId" element={<SubFolderDetail />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;
