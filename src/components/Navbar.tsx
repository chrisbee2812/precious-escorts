import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Diamond } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/src/lib/utils';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Rates', href: '/rates' },
  { name: 'Work with Us', href: '/work-with-us' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 border-b",
        scrolled 
          ? "bg-[#0A0A0A]/95 backdrop-blur-md py-6 border-white/10" 
          : "bg-transparent py-8 border-transparent"
      )}
    >
      <div className="max-w-full mx-auto px-15 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="text-2xl font-display tracking-[0.2em] uppercase text-accent">Precious Escorts</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "relative text-[11px] uppercase tracking-[0.2em] transition-all duration-300 hover:text-accent font-sans",
                location.pathname === link.href ? "text-accent border-b border-accent pb-1" : "text-white/70"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/gallery" 
            className="px-8 py-3 border border-accent text-accent text-[11px] uppercase tracking-[0.2em] hover:bg-accent hover:text-black transition-all duration-500 font-sans"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gold">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-neutral-950 border-b border-gold/20 flex flex-col p-8 gap-6 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-lg font-serif uppercase tracking-widest",
                  location.pathname === link.href ? "text-gold" : "text-neutral-400"
                )}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
