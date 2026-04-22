import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Diamond, Heart } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function Contact() {
  const location = useLocation();
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (location.state?.escortName) {
      setMessage(`I am interested in requesting an encounter with ${location.state.escortName}. Please let me know their availability.`);
    }
  }, [location.state]);

  return (
    <div className="pt-32 pb-32 min-h-screen bg-bg px-15">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-32">
          <h1 className="text-6xl md:text-[100px] font-display text-accent mb-8 italic leading-none">Contact Concierge</h1>
          <p className="text-white/40 font-sans font-light max-w-2xl mx-auto text-lg leading-relaxed">
            For enquiries, bookings, or special requests, please get in touch with our dedicated concierge team. We prioritize discretion and timely responses.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-display text-white mb-10 italic">Get in Touch</h2>
              <div className="space-y-10">
                <ContactItem 
                  icon={<Phone size={18} strokeWidth={1} />} 
                  label="Concierge Line"
                  value="+44 (0) 20 1234 5678"
                />
                <ContactItem 
                  icon={<Mail size={18} strokeWidth={1} />} 
                  label="Email Enquiry"
                  value="concierge@preciousescorts.com"
                />
                <ContactItem 
                  icon={<MapPin size={18} strokeWidth={1} />} 
                  label="Office"
                  value="Leeds Central, West Yorkshire, UK"
                />
              </div>
            </div>

            <div className="p-10 border border-white/5 bg-[#111] rounded-none">
              <h3 className="text-accent font-display text-xl mb-6 flex items-center gap-3 italic">
                Booking Hours
              </h3>
              <ul className="text-[11px] text-white/40 space-y-4 font-sans tracking-[0.2em] uppercase">
                <li className="flex justify-between border-b border-white/5 pb-2"><span>Monday - Friday</span> <span className="text-white">09:00 - 22:00</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2"><span>Saturday</span> <span className="text-white">10:00 - 20:00</span></li>
                <li className="flex justify-between"><span>Sunday</span> <span className="text-white">By appointment</span></li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#111] border border-white/5 p-10 md:p-16 rounded-none shadow-[0_50px_100px_rgba(0,0,0,0.5)]"
          >
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <InputGroup label="Full Name" placeholder="Your name" />
                <InputGroup label="Email Address" placeholder="your@email.com" type="email" />
              </div>
              <InputGroup label="Date of Interest" type="date" />
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.2em] text-accent font-sans">Your Message</label>
                <textarea 
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-black/40 border border-white/10 focus:border-accent p-6 text-white outline-none transition-colors rounded-none font-sans font-light resize-none text-sm"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-5 border border-accent text-accent uppercase tracking-[0.2em] text-xs hover:bg-accent hover:text-black transition-all duration-500 font-sans"
              >
                Send Request
              </button>
              <p className="text-[9px] text-white/20 text-center uppercase tracking-[0.2em] font-sans">
                By submitting, you agree to our privacy policy and discretion mandates.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ContactItem({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-8 items-start group border-l border-white/5 pl-8 py-2">
      <div className="text-accent group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <div>
        <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2 font-sans">{label}</h4>
        <p className="text-xl text-white font-display italic group-hover:text-accent transition-colors">{value}</p>
      </div>
    </div>
  );
}

export function InputGroup({ label, placeholder = "", type = "text" }: { label: string, placeholder?: string, type?: string }) {
  return (
    <div className="space-y-4">
      <label className="text-[10px] uppercase tracking-[0.2em] text-accent font-sans">{label}</label>
      <input 
        type={type}
        placeholder={placeholder}
        className="w-full bg-black/40 border border-white/10 focus:border-accent p-6 text-white outline-none transition-colors rounded-none font-sans font-light text-sm"
      />
    </div>
  );
}

export function WorkWithUs() {
  return (
    <div className="pt-32 pb-32 min-h-screen bg-bg px-15">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-32">
          <h1 className="text-6xl md:text-[100px] font-display text-accent mb-8 italic leading-none">Join the Collective</h1>
          <p className="text-white/40 font-sans font-light max-w-2xl mx-auto text-lg leading-relaxed">
            We are always looking for smart, confident, and well-presented girls to join our small, friendly agency. Enjoy a role with great earnings, privacy respected, and a genuinely high-end experience.
          </p>
        </header>

        <section className="bg-[#111] border border-white/5 p-10 md:p-20 rounded-none shadow-[0_50px_100px_rgba(0,0,0,0.5)] mb-32">
          <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <InputGroup label="Stage Name" placeholder="Your chosen name" />
              <InputGroup label="Real Name" placeholder="Your real name" />
              <InputGroup label="Age" placeholder="Your age (18+ only)" type="number" />
              <InputGroup label="Location" placeholder="Current city" />
              <InputGroup label="Nationality" placeholder="Your nationality" />
              <InputGroup label="Bust Size" placeholder="Your bust size" />
              <InputGroup label="Dress Size" placeholder="Your dress size" />
              <InputGroup label="Hair Colour" placeholder="Your hair colour" />
              <InputGroup label="Eye Colour" placeholder="Your eye colour" />
              <InputGroup label="Tattoos" placeholder="Your tattoos" />
              <InputGroup label="Email" placeholder="your@email.com" type="email" />
              <InputGroup label="WhatsApp/Phone" placeholder="+44 ..." />
            </div>

            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-[0.2em] text-accent font-sans">About You & Experience</label>
              <textarea 
                rows={5}
                placeholder="Tell us about yourself, your languages, and why you'd like to work with Precious Escorts..."
                className="w-full bg-black/40 border border-white/10 focus:border-accent p-6 text-white outline-none transition-colors rounded-none font-sans font-light resize-none text-sm"
              />
            </div>

            <div className="pt-10">
              <p className="text-white/30 text-[11px] font-sans font-light mb-12 leading-relaxed uppercase tracking-widest border-l border-accent/20 pl-8">
                Please note that we receive a high volume of applications. Our selection process is rigorous and focuses on personality, presentation, and professionalism. We will contact you via secure channels if we wish to proceed.
              </p>
              <button 
                type="submit"
                className="w-full py-6 border border-accent text-accent uppercase tracking-[0.2em] text-xs hover:bg-accent hover:text-black transition-all duration-500 font-sans"
              >
                Submit Dossier
              </button>
            </div>
          </form>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left py-20 border-t border-white/5">
          <Benefit title="High Earnings" desc="Industry-leading rates for elite companions." />
          <Benefit title="Discretion" desc="Absolute anonymity and client screening." />
          <Benefit title="Flexibility" desc="Full control over your engagements." />
        </div>
      </div>
    </div>
  );
}

const Benefit = ({ title, desc }: { title: string; desc: string }) => (
  <div className="border-l border-white/5 pl-8 py-4">
    <h4 className="text-white font-display text-2xl mb-4 italic">{title}</h4>
    <p className="text-white/40 text-sm font-sans font-light">{desc}</p>
  </div>
)
