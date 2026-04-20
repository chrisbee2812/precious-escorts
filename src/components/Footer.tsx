import { Link } from 'react-router-dom';
import { Diamond, Mail, Phone, Instagram, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg border-t border-white/10 pt-16 pb-8">
      <div className="max-w-full mx-auto px-15 flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-display tracking-[0.2em] uppercase text-accent">Precious Escorts</span>
          </Link>
          <div className="flex gap-8 text-[11px] uppercase tracking-[0.15em] text-white/50">
            <Link to="/etiquette" className="hover:text-accent transition-colors">Etiquette</Link>
            <Link to="/terms-and-conditions" className="hover:text-accent transition-colors">Terms & Conditions</Link>
            <Link to="/disclaimer" className="hover:text-accent transition-colors">Disclaimer</Link>
          </div>
        </div>

        <div className="max-w-100">
          <p className="text-[9px] uppercase tracking-[0.15em] text-white/30 leading-relaxed">
            PRECIOUS ESCORTS OPERATES IN FULL COMPLIANCE WITH LOCAL LAWS. WE FACILITATE INTRODUCTIONS FOR COMPANIONSHIP ONLY. ALL INDIVIDUALS ARE INDEPENDENT ADULTS.
          </p>
        </div>

        <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">
          <p>© {currentYear} Precious Escorts</p>
        </div>
      </div>
    </footer>
  );
}
