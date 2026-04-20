import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Gallery } from './pages/Gallery';
import { Rates } from './pages/Rates';
import { Contact, WorkWithUs } from './pages/Contact';
import { Legal } from './pages/Legal';

import { FAQ } from './pages/FAQ';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-black">
        <Navbar />
        <main className="grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/rates" element={<Rates />} />
            <Route path="/work-with-us" element={<WorkWithUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/:type" element={<Legal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
