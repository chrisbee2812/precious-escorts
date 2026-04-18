import { motion, AnimatePresence } from 'motion/react';
import { Escort } from '@/src/constants';
import { X, MapPin, Languages, Ruler, Heart, Sparkles } from 'lucide-react';

interface EscortModalProps {
  escort: Escort | null;
  onClose: () => void;
}

export function EscortModal({ escort, onClose }: EscortModalProps) {
  if (!escort) return null;

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
          <div className="w-full md:w-100 bg-black flex flex-col">
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <img 
                src={escort.thumbnail} 
                alt={escort.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="grid grid-cols-4 border-t border-white/10">
                {escort.gallery.map((img, idx) => (
                  <div key={idx} className="aspect-square border-r border-white/10 opacity-50 hover:opacity-100 transition-opacity">
                    <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
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
                  <span>In-Call (2 Hours)</span>
                  <span className="text-accent italic">£600</span>
                </div>
                <div className="flex justify-between border-b border-white/10 py-3 text-xs uppercase tracking-widest text-white/70">
                  <span>Out-Call (2 Hours)</span>
                  <span className="text-accent italic">£800</span>
                </div>
                <div className="flex justify-between border-b border-white/10 py-3 text-xs uppercase tracking-widest text-white/70">
                  <span>Overnight</span>
                  <span className="text-accent italic">£2,500</span>
                </div>
              </div>

              <button className="w-full py-5 border border-accent text-accent uppercase tracking-[0.2em] text-xs hover:bg-accent hover:text-black transition-all duration-500 font-sans">
                Request Encounter
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
