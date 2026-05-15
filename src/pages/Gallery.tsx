import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { ESCORTS, Escort } from '@/src/constants';
import { EscortCard } from '@/src/components/EscortCard';
import { EscortModal } from '@/src/components/EscortModal';
import { Diamond, Filter, X, ChevronDown } from 'lucide-react';
import { cn } from '@/src/lib/utils';

type HeightRange = 'Short (<160cm)' | 'Medium (160-175cm)' | 'Tall (>175cm)';

interface Filters {
  preferences: string[];
  heights: HeightRange[];
  busts: string[];
  hair: string[];
  eyes: string[];
}

const HEIGHT_RANGES: HeightRange[] = ['Short (<160cm)', 'Medium (160-175cm)', 'Tall (>175cm)'];

export function Gallery() {
  const [selectedEscort, setSelectedEscort] = useState<Escort | null>(null);
  const [lastSelectedId, setLastSelectedId] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  
  const [filters, setFilters] = useState<Filters>({
    preferences: [],
    heights: [],
    busts: [],
    hair: [],
    eyes: []
  });

  const uniqueOptions = useMemo(() => {
    return {
      preferences: ['Solo', 'Couples', 'Groups'],
      busts: Array.from(new Set(ESCORTS.map(e => e.stats.bust))).sort(),
      hair: Array.from(new Set(ESCORTS.map(e => e.stats.hair))).sort(),
      eyes: Array.from(new Set(ESCORTS.map(e => e.stats.eyes))).sort()
    };
  }, []);

  const getEscortHeightRange = (cm: number): HeightRange => {
    if (cm < 160) return 'Short (<160cm)';
    if (cm <= 175) return 'Medium (160-175cm)';
    return 'Tall (>175cm)';
  };

  const matchesFilters = (escort: Escort, f: Filters) => {
    if (f.preferences.length > 0 && !f.preferences.some(p => escort.preferences.includes(p as any))) return false;
    if (f.heights.length > 0 && !f.heights.includes(getEscortHeightRange(escort.stats.heightCm))) return false;
    if (f.busts.length > 0 && !f.busts.includes(escort.stats.bust)) return false;
    if (f.hair.length > 0 && !f.hair.includes(escort.stats.hair)) return false;
    if (f.eyes.length > 0 && !f.eyes.includes(escort.stats.eyes)) return false;
    return true;
  };

  const filteredEscorts = ESCORTS.filter(e => matchesFilters(e, filters));

  // Determine which options are available based on OTHER category filters
  const isOptionAvailable = (category: keyof Filters, value: any) => {
    const tempFilters = { ...filters, [category]: [value] };
    // For availability check, we ignore the current category's active filters and only test the target value
    const baseFilters = { ...filters };
    (baseFilters[category] as any) = []; // Clear current category

    return ESCORTS.some(e => {
        // Must match other categories' active filters
        const matchesOthers = matchesFilters(e, baseFilters);
        if (!matchesOthers) return false;
        
        // And match the specific value for THIS category
        if (category === 'preferences') return e.preferences.includes(value);
        if (category === 'heights') return getEscortHeightRange(e.stats.heightCm) === value;
        if (category === 'busts') return e.stats.bust === value;
        if (category === 'hair') return e.stats.hair === value;
        if (category === 'eyes') return e.stats.eyes === value;
        return false;
    });
  };

  const toggleFilter = (category: keyof Filters, value: string) => {
    setFilters(prev => {
      const current = prev[category] as string[];
      const next = current.includes(value) 
        ? current.filter(v => v !== value)
        : [...current, value];
      return { ...prev, [category]: next };
    });
  };

  const clearFilters = () => {
    setFilters({
      preferences: [],
      heights: [],
      busts: [],
      hair: [],
      eyes: []
    });
  };

  const activeCount = Object.values(filters).flat().length;

  const handleClose = () => {
    if (selectedEscort) {
      setLastSelectedId(selectedEscort.id);
      setTimeout(() => setLastSelectedId(null), 800);
    }
    setSelectedEscort(null);
  };

  return (
    <div className="pt-32 pb-32 min-h-screen bg-bg px-15">
      <EscortModal 
        escort={selectedEscort} 
        onClose={handleClose} 
      />

      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-20">
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
            Refined elegance, curated for the discerning. Ten exceptional companions ready to transform your evening into an unforgettable experience.
          </motion.p>
        </header>

        {/* Filter Controls */}
        <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between border-y border-white/5 py-8">
            <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white hover:text-accent transition-colors group"
            >
                <Filter size={14} className={cn("transition-transform", showFilters && "rotate-180")} />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
                {activeCount > 0 && (
                    <span className="bg-accent text-black px-2 py-0.5 rounded-full text-[8px] font-bold">
                        {activeCount}
                    </span>
                )}
            </button>

            <div className="flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] text-white/40 font-sans">
                <p>Showing <span className="text-white font-medium">{filteredEscorts.length}</span> of <span className="text-white font-medium">{ESCORTS.length}</span> Companions</p>
                {activeCount > 0 && (
                    <button 
                        onClick={clearFilters}
                        className="text-accent border-b border-accent/20 hover:border-accent transition-all pb-0.5"
                    >
                        Clear All
                    </button>
                )}
            </div>
        </div>

        <AnimatePresence>
            {showFilters && (
                <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mb-16"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 p-10 bg-[#111] border border-white/5">
                        <FilterGroup 
                            label="Preferences" 
                            options={uniqueOptions.preferences} 
                            selected={filters.preferences}
                            onToggle={(v) => toggleFilter('preferences', v)}
                            isAvailable={(v) => isOptionAvailable('preferences', v)}
                        />
                        <FilterGroup 
                            label="Height" 
                            options={HEIGHT_RANGES} 
                            selected={filters.heights}
                            onToggle={(v) => toggleFilter('heights', v)}
                            isAvailable={(v) => isOptionAvailable('heights', v)}
                        />
                        <FilterGroup 
                            label="Bust" 
                            options={uniqueOptions.busts} 
                            selected={filters.busts}
                            onToggle={(v) => toggleFilter('busts', v)}
                            isAvailable={(v) => isOptionAvailable('busts', v)}
                        />
                         <FilterGroup 
                            label="Hair" 
                            options={uniqueOptions.hair} 
                            selected={filters.hair}
                            onToggle={(v) => toggleFilter('hair', v)}
                            isAvailable={(v) => isOptionAvailable('hair', v)}
                        />
                        <FilterGroup 
                            label="Eyes" 
                            options={uniqueOptions.eyes} 
                            selected={filters.eyes}
                            onToggle={(v) => toggleFilter('eyes', v)}
                            isAvailable={(v) => isOptionAvailable('eyes', v)}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEscorts.map((escort, idx) => (
            <motion.div
              key={escort.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              style={{ 
                zIndex: (selectedEscort?.id === escort.id || lastSelectedId === escort.id) ? 50 : 1,
                position: 'relative'
              }}
            >
              <EscortCard 
                escort={escort} 
                onClick={() => setSelectedEscort(escort)}
              />
            </motion.div>
          ))}
        </div>

        {filteredEscorts.length === 0 && (
            <div className="text-center py-32 border border-dashed border-white/10">
                <p className="text-white/20 font-sans uppercase tracking-[0.3em] mb-4">No companions match your criteria</p>
                <button 
                    onClick={clearFilters}
                    className="text-accent underline decoration-accent/20 underline-offset-4 text-[10px] uppercase tracking-widest"
                >
                    Reset Filters
                </button>
            </div>
        )}

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

function FilterGroup({ label, options, selected, onToggle, isAvailable }: { 
    label: string, 
    options: string[], 
    selected: string[], 
    onToggle: (val: string) => void,
    isAvailable: (val: string) => boolean
}) {
    return (
        <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-accent font-sans border-b border-white/5 pb-4">{label}</h4>
            <div className="space-y-3">
                {options.map(opt => {
                    const active = selected.includes(opt);
                    const available = isAvailable(opt);
                    
                    return (
                        <button
                            key={opt}
                            disabled={!available && !active}
                            onClick={() => onToggle(opt)}
                            className={cn(
                                "w-full text-left flex items-center justify-between text-[10px] transition-all duration-300",
                                active ? "text-accent font-medium translate-x-1" : "text-white/40 hover:text-white/70",
                                !available && !active && "opacity-20 cursor-not-allowed grayscale"
                            )}
                        >
                            <span className="font-sans uppercase tracking-widest">{opt}</span>
                            {active && <div className="w-1 h-1 bg-accent rounded-full" />}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
