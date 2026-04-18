import React from 'react';
import { motion } from 'motion/react';
import { Diamond, Shield, Clock, Coffee, Plane, Hotel } from 'lucide-react';

const COMMON_RATES = [
  { duration: "1 Hour", rate: "£400", incall: true, outcall: true },
  { duration: "2 Hours", rate: "£700", incall: true, outcall: true },
  { duration: "3 Hours", rate: "£1,000", incall: true, outcall: true },
  { duration: "Evening (4 hrs)", rate: "£1,000", incall: true, outcall: true },
  { duration: "Overnight", rate: "£2,500", incall: false, outcall: true },
  { duration: "24 Hours", rate: "£4,000", incall: false, outcall: true },
];

export function Rates() {
  return (
    <div className="pt-32 pb-32 min-h-screen bg-bg px-15">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-32">
          <h1 className="text-6xl md:text-[100px] font-display text-accent mb-8 italic leading-none">Rates & Services</h1>
          <p className="text-white/40 font-sans font-light max-w-2xl mx-auto text-lg leading-relaxed">
            Our rates reflect the exceptional quality, education, and social grace of our companions. Transparent pricing for a seamless experience.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          <ServiceFeature 
            icon={<Clock size={20} />}
            title="Punctuality"
            description="Our companions value your time as much as their own. Timely arrivals are a pillar of our service."
          />
          <ServiceFeature 
            icon={<Shield size={20} />}
            title="Confidentiality"
            description="Absolute privacy for every booking. Your personal details are never stored or shared."
          />
          <ServiceFeature 
            icon={<Coffee size={20} />}
            title="Social Interaction"
            description="Whether for dinner, events, or travel, expect charming and intelligent conversation."
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#111] border border-accent/20 p-8 md:p-20 rounded-none shadow-2xl overflow-hidden relative"
        >
          <h2 className="text-3xl font-display text-accent mb-16 text-center tracking-[0.2em] uppercase italic">London Standard Rates</h2>
          
          <div className="space-y-8">
            {COMMON_RATES.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center border-b border-white/10 pb-8 group">
                <div>
                  <h3 className="text-2xl font-display text-white group-hover:text-accent transition-colors italic">{item.duration}</h3>
                  <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] mt-2 font-sans">
                    {item.incall && "Incall"} {item.incall && item.outcall && " / "} {item.outcall && "Outcall Available"}
                  </p>
                </div>
                <div className="text-3xl font-display text-accent italic">
                  {item.rate}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-black/50 border border-gold/5 rounded-sm">
            <h4 className="text-gold font-serif text-lg mb-4 italic">International Travel & Long Term</h4>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              For bookings outside of London, travel companions, or multiple day arrangements, please contact our concierge directly. 
              Travel expenses and accommodation are to be provided by the client in addition to the standard daily rate.
            </p>
          </div>
        </motion.div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-10 border border-neutral-900 bg-neutral-950 rounded-sm">
            <h3 className="text-2xl font-serif text-gold mb-6 flex items-center gap-3">
              <Hotel size={24} /> Private Bookings
            </h3>
            <p className="text-neutral-400 font-light leading-relaxed">
              We offer exclusive incall locations in the heart of Mayfair and Kensington. Discreet, secure, and luxurious environments for your relaxation.
            </p>
          </div>
          <div className="p-10 border border-neutral-900 bg-neutral-950 rounded-sm">
            <h3 className="text-2xl font-serif text-gold mb-6 flex items-center gap-3">
              <Plane size={24} /> Luxury Travel
            </h3>
            <p className="text-neutral-400 font-light leading-relaxed">
              Our companions are available for international travel. Whether it's a weekend in Saint-Tropez or a business trip to Dubai, we ensure you have the perfect partner.
            </p>
          </div>
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
