import React from 'react';
import { motion } from 'motion/react';
import { Escort } from '@/src/constants';
import { MapPin, Expand } from 'lucide-react';

interface EscortCardProps {
  escort: Escort;
  onClick: () => void;
}

export const EscortCard: React.FC<EscortCardProps> = ({ escort, onClick }) => {
  return (
    <motion.div
      layoutId={`card-${escort.id}`}
      onClick={onClick}
      className="group relative aspect-3/4 overflow-hidden cursor-pointer border border-white/5 bg-[#1a1a1a]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.img
        src={escort.thumbnail}
        alt={escort.name}
        className="w-full h-full object-cover transition-opacity duration-700 opacity-80 group-hover:opacity-100"
        referrerPolicy="no-referrer"
      />
      
      <div className="absolute bottom-6 left-6">
        <h3 className="text-xl font-display italic text-white tracking-wide group-hover:text-accent transition-colors">{escort.name}</h3>
      </div>
    </motion.div>
  );
}
