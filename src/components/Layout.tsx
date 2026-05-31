import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Play, 
  Trophy, 
  Menu, 
  X, 
  Search, 
  Bell, 
  User,
  ExternalLink,
  ShieldCheck,
  FileText,
  Mail,
  Info
} from 'lucide-react';
import { useUserStats } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const { stats } = useUserStats();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-accent flex items-center justify-center rounded-lg rotate-3 group-hover:rotate-0 transition-transform">
            <Play size={20} className="text-primary fill-primary" />
          </div>
          <div>
            <span className="text-2xl font-bold text-white tracking-tighter">VAL<span className="text-accent">CURA</span></span>
            <p className="text-[10px] text-accent font-medium leading-none uppercase tracking-widest hidden sm:block">Media Hub</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-slate-300 hover:text-accent transition-colors">Magazine</Link>
          <Link to="/blog" className="text-sm font-medium text-slate-300 hover:text-accent transition-colors">Editorial</Link>
          <Link to="/rewards" className="text-sm font-medium text-slate-300 hover:text-accent transition-colors">Vault</Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer">
            <Trophy size={16} className="text-accent" />
            <span className="text-sm font-bold text-white">{stats.points}</span>
            <span className="text-[10px] text-accent uppercase font-black">Points</span>
          </div>
          
          <Button variant="ghost" size="icon" className="text-white md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </Button>
          
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white">
              <Search size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white">
              <User size={20} />
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-primary z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-bold text-white">VALCURA</span>
              <Button variant="ghost" size="icon" className="text-white" onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} />
              </Button>
            </div>
            <nav className="flex flex-col gap-6">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-white hover:text-accent transition-colors">Magazine</Link>
              <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-white hover:text-accent transition-colors">Editorial</Link>
              <Link to="/rewards" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-white hover:text-accent transition-colors">Vault</Link>
              <Link to="/legal/privacy" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-white hover:text-accent transition-colors">Privacy</Link>
            </nav>
            <div className="mt-auto pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl">
                <Trophy size={24} className="text-accent" />
                <div>
                  <p className="text-xs text-slate-400">Total ValPoints</p>
                  <p className="text-xl font-bold text-white">{stats.points}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-primary pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-accent flex items-center justify-center rounded-lg">
                <Play size={16} className="text-primary fill-primary" />
              </div>
              <span className="text-xl font-bold text-white tracking-tighter">VALCURA</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
              ValCura is a premium digital media curation platform that rewards engagement through high-quality editorial critique and audience interaction.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all cursor-pointer">
                <Search size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all cursor-pointer">
                <Bell size={18} />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <FileText size={16} className="text-accent" />
              Information
            </h4>
            <ul className="space-y-4">
              <li><Link to="/legal/about" className="text-sm text-slate-400 hover:text-accent transition-colors">About ValCura</Link></li>
              <li><Link to="/blog" className="text-sm text-slate-400 hover:text-accent transition-colors">Editorial Blog</Link></li>
              <li><Link to="/rewards" className="text-sm text-slate-400 hover:text-accent transition-colors">Rewards Program</Link></li>
              <li><Link to="/legal/contact" className="text-sm text-slate-400 hover:text-accent transition-colors">Contact Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <ShieldCheck size={16} className="text-accent" />
              Compliance
            </h4>
            <ul className="space-y-4">
              <li><Link to="/legal/privacy" className="text-sm text-slate-400 hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal/tos" className="text-sm text-slate-400 hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link to="/legal/privacy" className="text-sm text-slate-400 hover:text-accent transition-colors">Cookie Disclosure</Link></li>
              <li className="text-[10px] text-slate-500 uppercase tracking-widest mt-4">18+ Restricted</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} ValCura Media Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[10px] text-slate-600 font-bold uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            AdSense Compliance Verified
          </div>
        </div>
      </div>
    </footer>
  );
};