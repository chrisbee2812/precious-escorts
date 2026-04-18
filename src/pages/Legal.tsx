import { useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { Shield, Scale, ScrollText, CheckCircle2 } from 'lucide-react';

const CONTENT = {
  'terms-and-conditions': {
    title: 'Terms & Conditions',
    icon: <Scale className="text-gold" size={40} />,
    sections: [
      {
        title: 'Agency Philosophy',
        content: 'Velvet Rose operates as a high-end introductory agency. We represent independent companions and facilitate meetings with discerning clients.'
      },
      {
        title: 'Booking Policy',
        content: 'All bookings must be confirmed via our concierge. A deposit may be required for certain arrangements or for new clients to ensure commitment.'
      },
      {
        title: 'Cancellation',
        content: 'Cancellations made less than 4 hours before the scheduled time may incur a fee to compensate the companion for their time and preparation.'
      }
    ]
  },
  'disclaimer': {
    title: 'Agency Disclaimer',
    icon: <Shield className="text-gold" size={40} />,
    sections: [
      {
        title: 'Legal Compliance',
        content: 'Velvet Rose operates in strict accordance with local laws and regulations. Our services are for companionship and social engagement only.'
      },
      {
        title: 'Adults Only',
        content: 'You must be at least 18 years of age (or the legal age in your jurisdiction) to use our services or access this website.'
      },
      {
        title: 'Independent Status',
        content: 'Companions are independent contractors. Velvet Rose does not exercise control over their private conduct outside of agreed agency standards.'
      }
    ]
  },
  'etiquette': {
    title: 'Etiquette & Expectations',
    icon: <ScrollText className="text-gold" size={40} />,
    sections: [
      {
        title: 'Mutual Respect',
        content: 'We expect all clients to treat our companions with the utmost respect, courtesy, and dignity at all times.'
      },
      {
        title: 'Hygiene & Presentation',
        content: 'Personal grooming is essential for a pleasant experience. Our companions maintain the highest standards, and we expect the same from our clients.'
      },
      {
        title: 'Clear Communication',
        content: 'Briefly discuss your expectations and boundaries early in the encounter to ensure a mutually satisfying experience.'
      }
    ]
  }
};

export function Legal() {
  const { type } = useParams();
  const info = CONTENT[type as keyof typeof CONTENT] || CONTENT['disclaimer'];

  return (
    <div className="pt-32 pb-32 min-h-screen bg-bg px-15">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <h1 className="text-6xl md:text-[80px] font-display text-accent mb-8 leading-none italic">{info.title}</h1>
          <p className="text-white/40 font-sans font-light uppercase tracking-[0.2em] text-[10px]">Velvet Rose Mandates | 2026 Edition</p>
        </motion.div>

        <div className="space-y-24">
          {info.sections.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group border-l border-white/5 pl-12 py-4"
            >
              <h2 className="text-3xl font-display text-white mb-8 italic">
                {section.title}
              </h2>
              <div>
                <p className="text-white/50 font-sans font-light leading-relaxed text-lg">
                  {section.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 p-16 border border-white/5 bg-[#111] rounded-none text-center">
          <p className="text-white/40 font-display italic text-2xl mb-12 max-w-xl mx-auto leading-relaxed">
            "Excellence is not an act, but a habit. We strive for brilliance in every curated encounter."
          </p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-accent/60 font-sans">
            Legal Protocol Alpha-4 | Secure Documentation
          </p>
        </div>
      </div>
    </div>
  );
}
