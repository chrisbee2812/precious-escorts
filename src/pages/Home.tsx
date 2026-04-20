import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Diamond, Star, ArrowRight, ShieldCheck, Clock, Users } from 'lucide-react';
import { ESCORTS } from '@/src/constants';
import { EscortCard } from '@/src/components/EscortCard';
import { EscortModal } from '@/src/components/EscortModal';

export function Home() {
  const [selectedEscort, setSelectedEscort] = useState<any>(null);
  const [lastSelectedId, setLastSelectedId] = useState<string | null>(null);

  const handleClose = () => {
    if (selectedEscort) {
      setLastSelectedId(selectedEscort.id);
      setTimeout(() => setLastSelectedId(null), 800);
    }
    setSelectedEscort(null);
  };

  return (
    <div className="overflow-x-hidden">
      <EscortModal 
        escort={selectedEscort} 
        onClose={handleClose} 
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center px-8 md:px-30 bg-bg overflow-hidden pt-20">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-40">
          <img 
            src="/public/Images/champagne.jpg"
            alt="Luxury background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="text-5xl sm:text-7xl md:text-[120px] font-display text-accent mb-8 leading-[0.9] tracking-tighter"
          >
            Unrivaled <br/>Sophistication.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-lg md:text-xl text-white/50 font-sans font-light mb-12 max-w-xl leading-relaxed"
          >
            Curating exceptional encounters for the discerning individual. Our collective represents the pinnacle of elegance, intelligence, and grace in Leeds.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:row gap-6"
          >
            <Link 
              to="/gallery" 
              className="px-12 py-5 border border-accent text-accent uppercase tracking-[0.2em] text-xs hover:bg-accent hover:text-black transition-all duration-500 font-sans text-center"
            >
              View Collective
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-32 px-15 bg-bg relative border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-start">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
            {ESCORTS.filter(e => e.featured).map((escort) => (
              <div 
                key={escort.id}
                style={{ 
                  zIndex: (selectedEscort?.id === escort.id || lastSelectedId === escort.id) ? 50 : 1,
                  position: 'relative'
                }}
              >
                <EscortCard 
                  escort={escort} 
                  onClick={() => setSelectedEscort(escort)} 
                />
              </div>
            ))}
          </div>
          
          <div className="w-full md:w-100 sticky top-32">
            <h2 className="text-4xl md:text-5xl font-display text-accent mb-8 leading-tight">Featured <br/><span className="italic text-white">Elite Companions</span></h2>
            <p className="text-white/40 text-base font-light leading-relaxed mb-10">
              Hand-selected for their intelligence, elegance, and charm. Each companion at Velvet Rose offers a unique blend of beauty and sophistication.
            </p>
            <Link to="/gallery" className="group flex items-center gap-4 text-accent text-xs uppercase tracking-[0.2em] font-sans">
              View All 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 bg-bg px-15 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-20">
            <h2 className="text-5xl font-display text-accent mb-6 leading-tight italic">The Boutique <br/><span className="text-white not-italic">Experience</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <ExperienceCard 
              icon={<ShieldCheck size={20} strokeWidth={1} />}
              title="Discretion Assured"
              description="Privacy is our highest priority. We maintain absolute confidentiality for both our clients and companions."
            />
            <ExperienceCard 
              icon={<Star size={20} strokeWidth={1} />}
              title="Bespoke Services"
              description="From social engagements to luxury travel, we tailor every meeting to your specific desires and expectations."
            />
            <ExperienceCard 
              icon={<Diamond size={20} strokeWidth={1} />}
              title="Elite Standards"
              description="Our rigorous selection process ensures only the most refined and sophisticated companions represent our agency."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

const ExperienceCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => {
  return (
    <div className="text-left group border-l border-white/5 pl-8 py-4">
      <div className="text-accent mb-6 transform group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-display text-white mb-4 tracking-wide italic">{title}</h3>
      <p className="text-white/40 font-sans font-light leading-relaxed text-sm">{description}</p>
    </div>
  );
}
