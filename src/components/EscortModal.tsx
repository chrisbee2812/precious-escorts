import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router';
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
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-5xl font-display text-white">{escort.name}</h2>
                <div className="text-[10px] uppercase tracking-[0.2em] text-accent font-sans border border-accent/20 px-3 py-1 mt-4">
                  {escort.location}
                </div>
              </div>
              <p className="text-accent italic font-display text-lg mb-8 tracking-wide">A Symphony of Grace & Intellect</p>
              
              <div className="grid grid-cols-2 gap-x-12 gap-y-8 mb-12 border-y border-white/5 py-8">
                <Stat label="Height" value={`${escort.stats.heightCm}cm / ${Math.floor(escort.stats.heightCm / 30.48)}'${Math.round((escort.stats.heightCm / 2.54) % 12)}"`} />
                <Stat label="Bust" value={escort.stats.bust} />
                <Stat label="Hair" value={escort.stats.hair} />
                <Stat label="Eyes" value={escort.stats.eyes} />
              </div>

              <p className="text-white/50 font-sans text-base leading-relaxed mb-10 font-light">
                {escort.bio}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] text-accent mb-6 font-sans">Preferences</h3>
                  <div className="flex flex-wrap gap-2">
                    {escort.preferences.map(pref => (
                      <span key={pref} className="px-3 py-1 bg-white/5 border border-white/10 text-white/60 text-[10px] uppercase tracking-widest font-sans">
                        {pref}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] text-accent mb-6 font-sans">Availability</h3>
                  <div className="space-y-4">
                    {escort.availability.map((avail, idx) => (
                      <div key={idx} className="border-l border-white/5 pl-4">
                        <p className="text-[10px] text-white uppercase tracking-widest mb-1">{avail.days}</p>
                        <div className="flex flex-wrap gap-2">
                          {avail.windows.map((win, wIdx) => (
                            <span key={wIdx} className="text-[10px] text-white/40 font-mono tracking-tighter">
                              {win}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button 
                onClick={(e) => handleRequest(e)}
                className="w-full py-5 border border-accent text-accent uppercase tracking-[0.2em] text-xs hover:bg-accent hover:text-black transition-all duration-500 font-sans mt-4"
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

function Stat({ label, value }: { label: string, value: string }) {
  return (
    <div>
      <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2 font-sans">{label}</h4>
      <p className="text-lg text-white font-display italic">{value}</p>
    </div>
  );
}
