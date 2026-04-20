import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Escort } from '@/src/constants';
import { X, MapPin, Languages, Ruler, Heart, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface EscortModalProps {
  escort: Escort | null;
  onClose: () => void;
}

export function EscortModal({ escort, onClose }: EscortModalProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  if (!escort) return null;

  const handleRequest = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate('/contact', { state: { escortName: escort?.name } });
    onClose();
  };

  // Use exactly 5 images total (thumbnail + first 4 gallery images)
  const allImages = [escort.thumbnail, ...escort.gallery].slice(0, 5);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/95 backdrop-blur-xl"
        />

        {/* Modal Content */}
        <motion.div
          layoutId={`card-${escort.id}`}
          className="relative w-full max-w-5xl max-h-[85vh] bg-[#111] border border-accent overflow-hidden flex flex-col md:flex-row shadow-[0_50px_100px_rgba(0,0,0,0.8)] rounded-none"
        >
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 z-10 text-accent hover:scale-110 transition-transform"
          >
            <X size={32} strokeWidth={1} />
          </button>

          {/* Left: Images */}
          <div className="w-full md:w-112.5 bg-black flex flex-col">
            <div className="relative flex-1 group overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeIndex}
                  src={allImages[activeIndex]} 
                  alt={escort.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-100 md:h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Thumbnails beneath - all 5 images */}
            <div className="grid grid-cols-5 border-t border-white/10 shrink-0">
              {allImages.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveIndex(idx)}
                  className={cn(
                    "aspect-square border-r border-white/10 transition-all duration-300 overflow-hidden",
                    activeIndex === idx ? "opacity-100 border-b-2 border-b-accent" : "opacity-40 hover:opacity-100"
                  )}
                >
                  <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex-1 p-12 md:p-16 overflow-y-auto custom-scrollbar">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-5xl font-display text-white mb-2">{escort.name}</h2>
              <p className="text-accent italic font-display text-lg mb-8 tracking-wide">A Symphony of Grace & Intellect</p>
              
              <p className="text-white/50 font-sans text-base leading-relaxed mb-10 font-light">
                {escort.bio}
              </p>

              <div className="space-y-4 mb-12">
                <div className="flex justify-between border-b border-white/10 py-3 text-xs uppercase tracking-widest text-white/70">
                  <span>In-Call (1 Hour)</span>
                  <span className="text-accent italic">£150</span>
                </div>
                <div className="flex justify-between border-b border-white/10 py-3 text-xs uppercase tracking-widest text-white/70">
                  <span>Out-Call (2 Hours)</span>
                  <span className="text-accent italic">£320</span>
                </div>
                <div className="flex justify-between border-b border-white/10 py-3 text-xs uppercase tracking-widest text-white/70">
                  <span>Overnight (Out-Call)</span>
                  <span className="text-accent italic">£900</span>
                </div>
              </div>

              <button 
                onClick={(e) => handleRequest(e)}
                className="w-full py-5 border border-accent text-accent uppercase tracking-[0.2em] text-xs hover:bg-accent hover:text-black transition-all duration-500 font-sans"
              >
                Request Encounter
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
