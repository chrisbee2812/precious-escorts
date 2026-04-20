import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Minus, Diamond } from 'lucide-react';

const FAQS = [
  {
    question: "How do I make a booking?",
    answer: "You can book by contacting our concierge via phone or the contact form on our website. We will discuss your requirements and confirm availability."
  },
  {
    question: "Is discretion guaranteed?",
    answer: "Absolutely. Precious Escorts is built on a foundation of absolute privacy. We do not store sensitive client data and all meetings are handled with the utmost discretion."
  },
  {
    question: "Do you offer international travel?",
    answer: "Yes, many of our companions are available for overseas travel. Please contact us at least 48 hours in advance for international arrangements."
  },
  {
    question: "What are the payment methods?",
    answer: "We accept various payment methods including cash, bank transfer, and major credit cards. Details will be provided during the booking process."
  }
];

export function FAQ() {
  return (
    <div className="pt-32 pb-32 min-h-screen bg-bg px-15">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-32">
          <h1 className="text-6xl md:text-[100px] font-display text-accent mb-8 leading-none italic">F.A.Q</h1>
          <p className="text-white/40 font-sans font-light text-lg uppercase tracking-[0.2em]">Common enquiries about our agency</p>
        </header>

        <div className="space-y-6">
          {FAQS.map((faq, idx) => (
            <FAQItem key={idx} faq={faq} />
          ))}
        </div>
      </div>
    </div>
  );
}

const FAQItem: React.FC<{ faq: { question: string, answer: string } }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/5 bg-[#111] rounded-none overflow-hidden transition-all duration-500 group">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 text-left flex justify-between items-center"
      >
        <span className="text-xl font-display text-white group-hover:text-accent transition-colors italic">{faq.question}</span>
        {isOpen ? <Minus className="text-accent" size={18} strokeWidth={1} /> : <Plus className="text-accent" size={18} strokeWidth={1} />}
      </button>
      
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="px-8 pb-8"
        >
          <div className="pt-6 border-t border-white/5 text-white/40 font-sans font-light leading-relaxed text-base">
            {faq.answer}
          </div>
        </motion.div>
      )}
    </div>
  );
}
