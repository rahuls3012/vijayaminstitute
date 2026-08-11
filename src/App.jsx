import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Universities from './pages/Universities';
import OnlineLearning from './pages/OnlineLearning';
import ODL from './pages/ODL';
import Admission from './pages/Admission';
import FAQPage from './pages/FAQPage';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="no-scroll-x">
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <Navbar />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/online-learning" element={<OnlineLearning />} />
          <Route path="/odl" element={<ODL />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <FloatingCTA />
      <ScrollToTop />
    </div>
  );
}
