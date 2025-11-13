import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import HtmlPage from './pages/HtmlPage';
import CssPage from './pages/CssPage';
import JavaScriptPage from './pages/JavaScriptPage';
import BackendPage from './pages/BackendPage';
import ResourcesPage from './pages/ResourcesPage';
import SpinTheWheelPage from './pages/SpinTheWheelPage';
import GitPage from './pages/GitPage';
import FrameworksPage from './pages/FrameworksPage';
import FinalProjectPage from './pages/FinalProjectPage';
import AboutRasmus from './pages/AboutRasmus';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/html" element={<HtmlPage />} />
        <Route path="/css" element={<CssPage />} />
        <Route path="/javascript" element={<JavaScriptPage />} />
        <Route path="/frameworks" element={<FrameworksPage />} />
        <Route path="/backend" element={<BackendPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/spin-the-wheel" element={<SpinTheWheelPage />} />
        <Route path="/git" element={<GitPage />} />
        <Route path="/finalproject" element={<FinalProjectPage />} />
        <Route path="/about-rasmus" element={<AboutRasmus />} />
      </Routes>
    </Layout>
  );
}

export default App;
