import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '@/src/constants';

export function About() {
  return (
    <div className="pt-32 pb-32 min-h-screen bg-bg px-8 md:px-15">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-[100px] font-display text-accent mb-8 leading-none italic"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/40 font-sans font-light max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Real chemistry. Total privacy. Zero bullshit. Nearly 15 years in Leeds — and we're still the best-kept secret in the North West.
          </motion.p>
        </header>

        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 1.2 }}
          className="text-2xl md:text-[30px] font-display text-accent max-w-2xl mx-auto mb-8 leading-none italic"
        >
          What makes Precious Escorts Leeds different?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1.2 }}
          className="text-white/40 font-sans font-light max-w-3xl mx-auto text-lg leading-relaxed mb-16"
        >
          We don't do cold or awkward. We do real, private, and seriously seductive. For nearly 15 years, we've been giving Leeds and the North West something rare: genuine connection wrapped in total discretion. No games. No judgment. Just unforgettable nights with companions who actually enjoy your company. Read on — and see exactly what sets us apart.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (idx * 0.1) + 1.6, duration: 0.5 }}
            >
              <ServiceFeature 
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </div>

        
        </div>
      </div>
  );
}

const ServiceFeature: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => {
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
