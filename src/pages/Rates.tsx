import React from 'react';
import { motion } from 'motion/react';
import { Shield, Clock, Coffee, Plane, Hotel } from 'lucide-react';

const COMMON_RATES = [
  { duration: "1 Hour", outcall: "£170" },
  { duration: "90 Minutes", outcall: "£250" },
  { duration: "2 Hours", outcall: "£320" },
  { duration: "3 Hours", outcall: "£460" },
  { duration: "4 Hours", outcall: "£600" },
  { duration: "5 Hours", outcall: "£740" },
  { duration: "10 Hours", outcall: "£1100" },
  { duration: "12 Hours", outcall: "£1300" },
  { duration: "Dinner Date", outcall: "POA" },
  { duration: "Weekend", outcall: "POA" },
];

export function Rates() {
  return (
    <div className="pt-32 pb-32 min-h-screen bg-bg px-8 md:px-15">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-32">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-[100px] font-display text-accent mb-8 leading-none italic"
          >
            Rates & Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/40 font-sans font-light max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Our rates match the quality, brains, and charm of our companions. Clear prices, no hidden surprises.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <ServiceFeature 
              icon={<Clock size={20} />}
              title="Punctuality"
              description="Our companions value your time as much as their own. Timely arrivals are a pillar of our service."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <ServiceFeature 
              icon={<Shield size={20} />}
              title="Confidentiality"
              description="Absolute privacy for every booking. Your personal details are never stored or shared."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <ServiceFeature 
              icon={<Coffee size={20} />}
              title="Social Interaction"
              description="Whether for dinner, events, or travel, expect charming and intelligent conversation."
            />
          </motion.div>
          
          
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#111] border border-accent/20 p-8 md:p-20 rounded-none shadow-2xl overflow-hidden relative"
        >
          <h2 className="text-3xl font-display text-accent mb-16 text-center tracking-[0.2em] uppercase italic">Standard Rates</h2>
          
          <div className="w-full overflow-x-auto">
            <div className="min-w-150">
              <div className="grid grid-cols-3 border-b border-white/10 pb-6 mb-8">
                <div className="text-[13px] uppercase tracking-[0.2em] text-white/30 font-display italic">Duration</div>
                <div className="text-[13px] uppercase tracking-[0.2em] text-white/30 font-display italic text-right">Out-Call</div>
              </div>

              <div className="space-y-6">
                {COMMON_RATES.map((item, idx) => (
                  <div key={idx} className="grid grid-cols-3 items-center border-b border-white/5 pb-6 group transition-colors hover:bg-white/5 -mx-4 px-4">
                    <div className="text-xl md:text-2xl font-display text-white group-hover:text-accent transition-colors italic">
                      {item.duration}
                    </div>
                    <div className="text-xl md:text-2xl font-display text-accent text-right italic">
                      {item.outcall}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 p-8 bg-black/50 border border-gold/5 rounded-sm">
            <h4 className="text-gold font-serif text-lg mb-4 italic">Travel</h4>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              For out-of-town travel, mileage expenses will be charged. International travel arrangements are available upon request. Please contact us for a personalized quote. 
            </p>
          </div>
        </motion.div>
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
