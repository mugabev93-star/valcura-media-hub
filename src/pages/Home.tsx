import React from 'react';
import { MediaCard, MEDIA_DATA } from '@/components/MediaCard';
import { AdPlaceholder } from '@/components/AdPlaceholder';
import { Button } from '@/components/ui/button';
import { Play, TrendingUp, Sparkles, Newspaper } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const featured = MEDIA_DATA.find(i => i.featured) || MEDIA_DATA[0];

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/055a3091-749c-4745-9084-642576c8d24c/valcura-brand-hero-9c920a6e-1780218668546.webp" 
            className="w-full h-full object-cover opacity-40"
            alt="ValCura Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 bg-accent/20 border border-accent/20 px-3 py-1 rounded-full w-fit mb-6">
              <Sparkles size={14} className="text-accent" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Premium Curation</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tighter">
              Value through <br/><span className="text-accent italic">Curation.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
              ValCura bridges the gap between premium short-form media and engaged audiences. Watch, review, and build the ultimate media database.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-accent text-primary hover:bg-white font-bold h-12 px-8 rounded-full transition-all flex gap-2">
                Explore Magazine <ArrowRight size={18} />
              </Button>
              <div className="flex items-center gap-4 px-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-primary bg-slate-800 flex items-center justify-center text-[10px] font-bold">U{i}</div>
                  ))}
                </div>
                <span className="text-xs font-medium text-slate-400">12.4k Curators Active</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <div className="container mx-auto px-6 -mt-20 relative z-20">
        <AdPlaceholder size="horizontal" />

        {/* Featured Feed */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary dark:bg-white/10 flex items-center justify-center rounded-xl">
                <TrendingUp size={20} className="text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Trending Reviews</h2>
                <p className="text-xs text-slate-500 uppercase font-black tracking-widest mt-1">Watch & Earn +10 Points</p>
              </div>
            </div>
            <div className="hidden sm:flex gap-2">
              {['All', 'Tech', 'Cinema', 'Documentary', 'Gaming'].map((cat) => (
                <button key={cat} className="px-4 py-1.5 rounded-full text-xs font-bold border border-slate-200 dark:border-slate-800 hover:border-accent hover:text-accent transition-all">
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="magazine-grid">
            {MEDIA_DATA.map((item) => (
              <MediaCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        <AdPlaceholder size="multiplex" />

        {/* Loyalty Program Section */}
        <section className="bg-primary rounded-[2rem] p-12 md:p-20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-32 group-hover:translate-x-20 transition-transform duration-1000"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">
                Rewarding Your <br/><span className="text-accent">Analytical Mind.</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-xl text-accent border border-white/10 shrink-0">
                    <Play size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Watch Curation</h4>
                    <p className="text-slate-400 text-sm">Consume hand-picked premium content from diverse categories.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-xl text-accent border border-white/10 shrink-0">
                    <Newspaper size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Analytical Review</h4>
                    <p className="text-slate-400 text-sm">Read editorial deep-dives and submit your own critiques.</p>
                  </div>
                </div>
              </div>
              <Button className="mt-10 bg-white text-primary hover:bg-accent font-bold h-12 px-8 rounded-full">
                Learn About ValPoints
              </Button>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-8">
                <span className="text-slate-400 text-xs font-black uppercase tracking-widest">Live Rewards Feed</span>
                <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
              </div>
              <div className="space-y-4">
                {[
                  { user: 'alex_m', action: 'Reviewed Indie Cinema', points: '+15' },
                  { user: 'sarah.j', action: 'Engagement Streak', points: '+50' },
                  { user: 'tech_guru', action: 'Video Critique', points: '+10' },
                  { user: 'marcus_v', action: 'Community Top Pick', points: '+100' },
                ].map((log, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-400 uppercase">{log.user[0]}</div>
                      <div>
                        <p className="text-white text-xs font-bold">{log.user}</p>
                        <p className="text-[10px] text-slate-500">{log.action}</p>
                      </div>
                    </div>
                    <span className="text-accent font-black text-xs">{log.points}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <div className="container mx-auto px-6 mt-12">
        <p className="text-center text-[10px] text-slate-500 uppercase tracking-widest font-bold">
          ValCura strictly rewards text-based analytical contributions. Ad interaction is never incentivized.
        </p>
      </div>
    </div>
  );
};

export default Home;

const ArrowRight = ({ size, className }: { size?: number; className?: string }) => (
  <svg 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14m-7-7 7 7-7 7" />
  </svg>
);