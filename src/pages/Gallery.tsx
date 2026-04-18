import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ESCORTS } from '@/src/constants';
import { EscortCard } from '@/src/components/EscortCard';
import { EscortModal } from '@/src/components/EscortModal';
import { Diamond } from 'lucide-react';

export function Gallery() {
  const [selectedEscort, setSelectedEscort] = useState<typeof ESCORTS[number] | null>(null);

  return (
    <div className="pt-32 pb-32 min-h-screen bg-bg px-15">
      <EscortModal escort={selectedEscort} onClose={() => setSelectedEscort(null)} />

      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-32">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-[100px] font-display text-accent mb-8 leading-none italic"
          >
            The Collection
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/40 font-sans font-light max-w-2xl mx-auto text-lg leading-relaxed"
          >
            A curated selection of the most sophisticated companions in London and beyond. Each profile represent a commitment to elegance, intelligence, and exceptional service.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ESCORTS.map((escort, idx) => (
            <motion.div
              key={escort.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <EscortCard 
                escort={escort} 
                onClick={() => setSelectedEscort(escort)}
              />
            </motion.div>
          ))}
        </div>

        <footer className="mt-32 text-center p-16 border border-white/5 bg-[#111] rounded-none">
          <h3 className="text-3xl font-display text-white mb-6 italic">Can't find what you're looking for?</h3>
          <p className="text-white/40 mb-10 font-sans font-light max-w-lg mx-auto">Our concierge can assist with specific requests and private bookings with absolute discretion.</p>
          <Link to="/contact" className="text-accent border-b border-accent/40 pb-2 hover:border-accent transition-all tracking-[0.2em] uppercase text-[11px] font-sans">
            Contact Concierge
          </Link>
        </footer>
      </div>
    </div>
  );
}
