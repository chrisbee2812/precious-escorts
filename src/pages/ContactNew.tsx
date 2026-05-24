import React, { useState, useEffect, useRef, InputHTMLAttributes } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, Phone, MapPin, Send, Diamond, Heart, Upload, Image as ImageIcon, 
  User, Camera, X, Calendar as CalendarIcon, ChevronLeft, ChevronRight,
  Clock
} from 'lucide-react';
import { useLocation } from 'react-router';

interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  id?: string;
  name?: string;  
}

interface FileGroupProps {
  label: string;
  desc?: string;
  required?: boolean;
  id?: string;
  accept?: string;
  onChange?: (file: File | null) => void;  // ADD THIS - callback to parent
  value?: File | null;  // OPTIONAL BUT RECOMMENDED - for controlled component
}

// --- DatePicker Components ---

function Calendar({ selectedDate, onSelect, onClose }: { 
  selectedDate: Date | null, 
  onSelect: (date: Date) => void,
  onClose: () => void 
}) {
  const [viewDate, setViewDate] = useState(selectedDate || new Date());
  
  const month = viewDate.getMonth();
  const year = viewDate.getFullYear();
  
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const prevMonth = (e: React.MouseEvent) => {
    e.preventDefault();
    setViewDate(new Date(year, month - 1, 1));
  };

  const nextMonth = (e: React.MouseEvent) => {
    e.preventDefault();
    setViewDate(new Date(year, month + 1, 1));
  };

  const isToday = (day: number) => {
    const today = new Date();
    return day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
  };

  const isSelected = (day: number) => {
    return selectedDate && day === selectedDate.getDate() && month === selectedDate.getMonth() && year === selectedDate.getFullYear();
  };

  return (
    <div className="p-6 bg-[#181818] border border-white/10 w-72 shadow-2xl relative">
      <div className="flex justify-between items-center mb-6">
        <button onClick={prevMonth} className="text-white/40 hover:text-accent transition-colors"><ChevronLeft size={18} /></button>
        <div className="text-[10px] uppercase tracking-[0.2em] text-white font-sans font-medium">
          {months[month]} {year}
        </div>
        <button onClick={nextMonth} className="text-white/40 hover:text-accent transition-colors"><ChevronRight size={18} /></button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
          <div key={d} className="text-[8px] uppercase tracking-widest text-accent/40 text-center py-2">{d}</div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
          <div key={`empty-${i}`} className="p-2" />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          return (
            <button
              key={day}
              onClick={(e) => {
                e.preventDefault();
                onSelect(new Date(year, month, day));
                onClose();
              }}
              className={`
                p-2 text-[10px] font-sans transition-all
                ${isSelected(day) ? 'bg-accent text-black font-bold' : 'text-white/60 hover:bg-white/5'}
                ${isToday(day) && !isSelected(day) ? 'border border-accent/30' : ''}
              `}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function CustomDateInput({ label, required = false, value, onChange, id }: { 
  label: string, 
  required?: boolean, 
  value: Date | null,
  onChange: (date: Date) => void,
  id?: string
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const fieldId = id || label.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formattedDate = value ? value.toLocaleDateString('en-GB', { 
    day: '2-digit', 
    month: 'long', 
    year: 'numeric' 
  }) : '';

  return (
    <div className="space-y-4 relative" ref={containerRef}>
      <div className="min-h-10 flex items-end">
        <label htmlFor={fieldId} className="text-[10px] uppercase tracking-[0.2em] text-accent font-sans">{label}</label>
      </div>
      <button 
        id={fieldId}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-black/40 border border-white/10 focus:border-accent outline-none p-6 text-white cursor-pointer flex justify-between items-center transition-colors group"
      >
        <span className={`text-sm font-sans font-light ${!value ? 'text-white/20' : 'text-white'}`}>
          {formattedDate || 'Select preferred date'}
        </span>
        <CalendarIcon size={16} className={`transition-colors ${isOpen ? 'text-accent' : 'text-white/20 group-hover:text-white/40'}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 z-50 mt-2"
          >
            <Calendar 
              selectedDate={value} 
              onSelect={onChange} 
              onClose={() => setIsOpen(false)} 
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      {required && <input type="hidden" name={fieldId} value={formattedDate} required />}
    </div>
  );
}

function CustomTimeInput({ label, value, onChange, id }: { 
  label: string, 
  value: string | null,
  onChange: (time: string) => void,
  id?: string
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const fieldId = id || label.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
  const minutes = ['00', '15', '30', '45'];

  const handleSelect = (h: string, m: string, shouldClose: boolean = false) => {
    onChange(`${h}:${m}`);
    if (shouldClose) setIsOpen(false);
  };

  return (
    <div className="space-y-4 relative" ref={containerRef}>
      <div className="min-h-10 flex items-end">
        <label htmlFor={fieldId} className="text-[10px] uppercase tracking-[0.2em] text-accent font-sans">{label}</label>
      </div>
      <button 
        id={fieldId}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-black/40 border border-white/10 focus:border-accent outline-none p-6 text-white cursor-pointer flex justify-between items-center transition-colors group"
      >
        <span className={`text-sm font-sans font-light ${!value ? 'text-white/20' : 'text-white'}`}>
          {value || 'Optional: Select time'}
        </span>
        <Clock size={16} className={`transition-colors ${isOpen ? 'text-accent' : 'text-white/20 group-hover:text-white/40'}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-full left-0 z-50 mt-2 p-4 bg-[#181818] border border-white/10 shadow-2xl flex gap-4 h-64 overflow-hidden"
          >
            <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10">
              <p className="text-[8px] uppercase tracking-widest text-accent/40 mb-3 sticky top-0 bg-[#181818] py-1">Hour</p>
              {hours.map(h => (
                <button
                  key={h}
                  onClick={(e) => {
                    e.preventDefault();
                    const currentMin = value?.split(':')[1] || '00';
                    handleSelect(h, currentMin, false);
                  }}
                  className={`w-full text-left py-2 px-3 text-[10px] hover:bg-white/5 transition-colors ${value?.startsWith(h) ? 'text-accent' : 'text-white/40'}`}
                >
                  {h}:00
                </button>
              ))}
            </div>
            <div className="w-px bg-white/5" />
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10">
              <p className="text-[8px] uppercase tracking-widest text-accent/40 mb-3 sticky top-0 bg-[#181818] py-1">Min</p>
              {minutes.map(m => (
                <button
                  key={m}
                  onClick={(e) => {
                    e.preventDefault();
                    const currentHour = value?.split(':')[0] || '12';
                    handleSelect(currentHour, m, true);
                  }}
                  className={`w-full text-left py-2 px-3 text-[10px] hover:bg-white/5 transition-colors ${value?.endsWith(m) ? 'text-accent' : 'text-white/40'}`}
                >
                  :{m}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Main Pages ---

export function Contact() {
  const location = useLocation();
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state?.escortName) {
      setMessage(`I am interested in requesting an encounter with ${location.state.escortName}. Please let me know their availability.`);
    }
  }, [location.state]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    fetch("https://www.formbackend.com/f/068f8a8354d0c373", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ name, email, message, date: selectedDate, time: selectedTime}),
    })
    .then((response) => {
      if (response.status === 422) {
        throw new Error("Validation error");
      } else if (!response.ok) {
        throw new Error("Something went wrong");
      }

      return response.json();
    })
    .then(data => {
      // You can even use `data` here. Access `data.submission_text`, `data.values` etc.
      setSuccessMessage(true);
    })
    .catch((error) => {
      setSuccessMessage(false);
    });
    // await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

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
            {isSubmitted ? (
              successMessage ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 border border-accent rounded-full flex items-center justify-center mx-auto mb-10">
                    <Send className="text-accent" size={32} strokeWidth={1} />
                  </div>
                  <h3 className="text-3xl font-display text-white mb-6 italic">Request Received</h3>
                  <p className="text-white/40 font-sans font-light leading-relaxed mb-10">
                    Your enquiry has been securely transmitted. Our concierge will review your request and contact you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-accent border-b border-accent/40 pb-1 hover:border-accent transition-all text-xs uppercase tracking-widest font-sans"
                  >
                    Send another message
                  </button>
                </motion.div>
            ) : ( 
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 border border-accent rounded-full flex items-center justify-center mx-auto mb-10">
                  <Send className="text-accent" size={32} strokeWidth={1} />
                </div>
                <h3 className="text-3xl font-display text-white mb-6 italic">Request Received</h3>
                <p className="text-white/40 font-sans font-light leading-relaxed mb-10">
                  Your enquiry has failed transmission. Please retry shortly. If the issue persists, contact us directly at preciousescorts@myyahoo.com.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-accent border-b border-accent/40 pb-1 hover:border-accent transition-all text-xs uppercase tracking-widest font-sans"
                >
                  Send another message
                </button>
              </motion.div>
            )) : (
              <form className="space-y-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <InputGroup 
                    label="Full Name" 
                    placeholder="Your name" 
                    required 
                    onChange={(e) => setName(e.target.value)} 
                  />
                  <InputGroup 
                    label="Email Address" 
                    placeholder="your@email.com" 
                    type="email" 
                    required 
                    onChange={(e) => setEmail(e.target.value)} 
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <CustomDateInput 
                    label="Date of Interest" 
                    required 
                    value={selectedDate} 
                    onChange={setSelectedDate} 
                  />
                  <CustomTimeInput
                    label="Preferred Time"
                    value={selectedTime}
                    onChange={setSelectedTime}
                  />
                </div>
                <div className="space-y-4">
                  <label htmlFor="concierge-message" className="text-[10px] uppercase tracking-[0.2em] text-accent font-sans">Your Message</label>
                  <textarea 
                    id="concierge-message"
                    name="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your requirements..."
                    required
                    className="w-full bg-black/40 border border-white/10 focus:border-accent p-6 text-white outline-none transition-colors rounded-none font-sans font-light resize-none text-sm"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 border border-accent text-accent uppercase tracking-[0.2em] text-xs hover:bg-accent hover:text-black transition-all duration-500 font-sans disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Transmitting...' : 'Send Request'}
                </button>
                <p className="text-[9px] text-white/20 text-center uppercase tracking-[0.2em] font-sans">
                  By submitting, you agree to our privacy policy and discretion mandates.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
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

export function InputGroup({ 
  label, 
  placeholder = "", 
  type = "text", 
  required = false, 
  id, 
  name,
  ...rest  // This now includes onChange, value, onBlur, etc. with correct types
}: InputGroupProps) {
  const fieldId = id || label.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  
  return (
    <div className="space-y-4">
      <div className="min-h-10 flex items-end">
        <label htmlFor={fieldId} className="text-[10px] uppercase tracking-[0.2em] text-accent font-sans">{label}</label>
      </div>
      <input 
        id={fieldId}
        name={name || fieldId}
        type={type}
        placeholder={placeholder}
        required={required}
        {...rest}
        className="w-full bg-black/40 border border-white/10 focus:border-accent p-6 text-white outline-none transition-colors rounded-none font-sans font-light text-sm"
      />
    </div>
  );
}

export function FileGroup({ 
  label, 
  desc, 
  required = false, 
  id, 
  accept,
  onChange,  // ADD TO DESTRUCTURING
  value: externalFile  // ADD THIS - allows parent to control the file
}: FileGroupProps) {
  // Use either external value (if provided) or internal state
  const [internalFile, setInternalFile] = useState<File | null>(null);
  const file = externalFile !== undefined ? externalFile : internalFile;
  
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const fieldId = id || label.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    
    // Update internal state if not controlled externally
    if (externalFile === undefined) {
      setInternalFile(selectedFile);
    }
    
    // NOTIFY THE PARENT
    if (onChange) {
      onChange(selectedFile);
    }
    
    // Handle preview
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  };

  const removeFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Clear internal state if not controlled externally
    if (externalFile === undefined) {
      setInternalFile(null);
    }
    
    // NOTIFY THE PARENT
    if (onChange) {
      onChange(null);
    }
    
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const selectedFile = e.dataTransfer.files?.[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      // Update internal state if not controlled externally
      if (externalFile === undefined) {
        setInternalFile(selectedFile);
      }

      // NOTIFY THE PARENT
      if (onChange) {
        onChange(selectedFile);
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-start min-h-18">
        <div>
          <label htmlFor={fieldId} className="text-[10px] uppercase tracking-[0.2em] text-accent font-sans block mb-1">{label}</label>
          <span className="text-[10px] text-white/20 font-sans tracking-wider uppercase leading-tight">{desc}</span>
        </div>
        {required && <span className="text-[10px] text-accent/50 font-sans uppercase tracking-[0.2em] mb-1">Required</span>}
      </div>
      
      <div 
        onClick={() => fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`relative w-full aspect-4/5 bg-black/40 border border-dashed border-white/10 hover:border-accent/40 transition-all cursor-pointer flex flex-col items-center justify-center overflow-hidden group ${preview ? 'border-solid' : ''}`}
      >
        <input 
          id={fieldId}
          name={fieldId}
          type="file" 
          ref={fileInputRef}
          onChange={handleFileChange}
          accept={accept}
          className="hidden"
          required={required && !file}
        />
        
        {preview ? (
          <>
            <img src={preview} alt="Preview" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <Camera className="text-white" size={24} strokeWidth={1} />
                <span className="text-[10px] uppercase tracking-[0.3em] text-white font-sans">Change Image</span>
              </div>
            </div>
            <button 
              onClick={removeFile}
              className="absolute top-4 right-4 w-8 h-8 bg-black/80 flex items-center justify-center text-white/40 hover:text-accent transition-colors z-10"
            >
              <X size={16} />
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center gap-6 p-8 text-center">
            <div className="w-16 h-16 border border-white/5 flex items-center justify-center group-hover:border-accent/20 transition-colors">
              <Upload className="text-white/20 group-hover:text-accent/40 transition-colors" size={24} strokeWidth={1} />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-2 font-sans group-hover:text-white/60 transition-colors">Choose Image</p>
              <p className="text-[9px] uppercase tracking-widest text-white/10 font-sans">Drag & drop or browse</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function WorkWithUs() {
  const location = useLocation();
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState<boolean | null>(null);
  const [stageName, setStageName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");
  const [locationCity, setLocationCity] = useState("");
  const [phone, setPhone] = useState("");
  const [bustSize, setBustSize] = useState("");
  const [dressSize, setDressSize] = useState("");
  const [hairColour, setHairColour] = useState("");
  const [eyeColour, setEyeColour] = useState("");
  const [markings, setMarkings] = useState("");
  const [imageFile1, setImageFile1] = useState<File | null>(null);
  const [imageFile2, setImageFile2] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Create FormData object
  const formData = new FormData();

  // Append text fields
  formData.append("stageName", stageName);
  formData.append("name", name);
  formData.append("email", email);
  formData.append("age", age);
  formData.append("nationality", nationality);
  formData.append("locationCity", locationCity);
  formData.append("phone", phone);
  formData.append("bustSize", bustSize);
  formData.append("dressSize", dressSize);
  formData.append("hairColour", hairColour);
  formData.append("eyeColour", eyeColour);
  formData.append("markings", markings);
  formData.append("message", message);

  // Append files (if they exist)
  if (imageFile1) {
    formData.append("imageFile1", imageFile1);
  }
  if (imageFile2) {
    formData.append("imageFile2", imageFile2);
  }

  for (let [key, value] of formData.entries()) {
  if (value instanceof File) {
    console.log(`${key}: ${value.name} (${value.size} bytes, type: ${value.type})`);
  } else {
    console.log(`${key}: ${value}`);
  }
}

  try {
    const response = await fetch("https://www.formbackend.com/f/8392252a9627a277", {
      method: "POST",
      headers: {
        "Accept": "application/json",  // Tell server you want JSON back
      },
      // IMPORTANT: Do NOT set Content-Type header with FormData
      // The browser will set it automatically with the correct boundary
      body: formData,
    });

    console.log("Response Status:", response.status);

    if (response.status === 422) {
      throw new Error("Validation error");
    } else if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();
    console.log("Form submission response:", data);
    if (data && !data.error) {
    setSuccessMessage(true);   // ✅ Success
  } else {
    console.error("Submission failed according to API response:", data);
    setSuccessMessage(false);  // ❌ Failed
  }
} catch (error) {
  console.error("Network or parsing error:", error);
  setSuccessMessage(false);    // ❌ Failed
} finally {
    setIsSubmitting(false);
    setIsSubmitted(true);
  }
};


  return (
    <div className="pt-32 pb-32 min-h-screen bg-bg px-15">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-32">
          <h1 className="text-6xl md:text-[100px] font-display text-accent mb-8 italic leading-none">Join the Collective</h1>
          <p className="text-white/40 font-sans font-light max-w-2xl mx-auto text-lg leading-relaxed">
            We are always seeking sophisticated, intelligent, and refined individuals to join our boutique agency. Experience a career defined by luxury, discretion, and exceptional rewards.
          </p>
        </header>

        <section className="bg-[#111] border border-white/5 p-10 md:p-20 rounded-none shadow-[0_50px_100px_rgba(0,0,0,0.5)] mb-32">
          {isSubmitted ? (
              successMessage === true ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 border border-accent rounded-full flex items-center justify-center mx-auto mb-10">
                    <Send className="text-accent" size={32} strokeWidth={1} />
                  </div>
                  <h3 className="text-3xl font-display text-white mb-6 italic">Request Received</h3>
                  <p className="text-white/40 font-sans font-light leading-relaxed mb-10">
                    Your enquiry has been securely transmitted. Our concierge will review your request and contact you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-accent border-b border-accent/40 pb-1 hover:border-accent transition-all text-xs uppercase tracking-widest font-sans"
                  >
                    Send another message
                  </button>
                </motion.div>
            ) : successMessage === false ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 border border-accent rounded-full flex items-center justify-center mx-auto mb-10">
                  <Send className="text-accent" size={32} strokeWidth={1} />
                </div>
                <h3 className="text-3xl font-display text-white mb-6 italic">Request Received</h3>
                <p className="text-white/40 font-sans font-light leading-relaxed mb-10">
                  Your enquiry has failed transmission. Please retry shortly. If the issue persists, contact us directly at preciousescorts@myyahoo.com.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-accent border-b border-accent/40 pb-1 hover:border-accent transition-all text-xs uppercase tracking-widest font-sans"
                >
                  Send another message
                </button>
              </motion.div>
            ) : null ) : (
            <form className="space-y-12" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                <InputGroup 
                  label="Stage Name" 
                  placeholder="Your chosen name" 
                  required
                  onChange={(e) => setStageName(e.target.value)}
                />
                <InputGroup 
                  label="Real Name" 
                  placeholder="Legal name (confidential)" 
                  required 
                  onChange={(e) => setName(e.target.value)}
                />
                <InputGroup 
                  label="Age" 
                  placeholder="Your age (18+ only)" 
                  type="number" 
                  required 
                  onChange={(e) => setAge(e.target.value)}
                />
                <InputGroup 
                  label="Nationality" 
                  placeholder="Your nationality" 
                  required 
                  onChange={(e) => setNationality(e.target.value)}
                />
                <InputGroup 
                  label="Location" 
                  placeholder="Current city" 
                  required 
                  onChange={(e) => setLocationCity(e.target.value)}
                />
                <InputGroup 
                  label="Email" 
                  placeholder="your@email.com" 
                  type="email" 
                  required 
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputGroup 
                  label="WhatsApp/Phone" 
                  placeholder="+44 ..." 
                  required 
                  onChange={(e) => setPhone(e.target.value)}
                />
                <InputGroup 
                  label="Bust Size" 
                  placeholder="e.g. 32B" 
                  required 
                  onChange={(e) => setBustSize(e.target.value)}
                />
                <InputGroup 
                  label="Dress Size" 
                  placeholder="e.g. 8" 
                  required 
                  onChange={(e) => setDressSize(e.target.value)}
                />
                <InputGroup 
                  label="Hair Colour" 
                  placeholder="e.g. Brunette" 
                  required 
                  onChange={(e) => setHairColour(e.target.value)}
                />
                <InputGroup 
                  label="Eye Colour" 
                  placeholder="e.g. Hazel" 
                  required 
                  onChange={(e) => setEyeColour(e.target.value)}
                />
                <InputGroup 
                  label="Tattoos/Piercings" 
                  placeholder="Details of any markings" 
                  required 
                  onChange={(e) => setMarkings(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 pt-8">
                <FileGroup 
                  label="Portrait Shot" 
                  desc="Clear image focusing on your face" 
                  required 
                  onChange={(file) => setImageFile1(file)}
                  accept="image/*"
                />
                <FileGroup 
                  label="Full Body Shot" 
                  desc="Recent clothed image showing your silhouette" 
                  required 
                  onChange={(file) => setImageFile2(file)}
                  accept="image/*"
                />
              </div>

              <div className="space-y-4">
                <label htmlFor="dossier-about" className="text-[10px] uppercase tracking-[0.2em] text-accent font-sans">About You & Experience</label>
                <textarea 
                  id="dossier-about"
                  name="about"
                  rows={5}
                  placeholder="Tell us about yourself, your languages, and why you'd like to work with Precious Escorts..."
                  required
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 focus:border-accent p-6 text-white outline-none transition-colors rounded-none font-sans font-light resize-none text-sm"
                />
              </div>

              <div className="pt-10">
                <p className="text-white/30 text-[11px] font-sans font-light mb-12 leading-relaxed uppercase tracking-widest border-l border-accent/20 pl-8">
                  Please note that we receive a high volume of applications. Our selection process is rigorous and focuses on personality, presentation, and professionalism. We will contact you via secure channels if we wish to proceed.
                </p>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 border border-accent text-accent uppercase tracking-[0.2em] text-xs hover:bg-accent hover:text-black transition-all duration-500 font-sans disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Processing Dossier...' : 'Submit Dossier'}
                </button>
              </div>
            </form>
          )}
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

const Benefit = ({ title, desc }: { title: string, desc: string }) => (
  <div className="border-l border-white/5 pl-8 py-4">
    <h4 className="text-white font-display text-2xl mb-4 italic">{title}</h4>
    <p className="text-white/40 text-sm font-sans font-light">{desc}</p>
  </div>
);
