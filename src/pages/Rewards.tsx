import React from 'react';
import { Link } from 'react-router-dom';
import { useUserStats } from '@/lib/store';
import { 
  Trophy, 
  History, 
  Gift, 
  ChevronRight, 
  ArrowUpRight, 
  ShieldAlert,
  Zap,
  Ticket
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AdPlaceholder } from '@/components/AdPlaceholder';
import { motion } from 'framer-motion';

const Rewards = () => {
  const { stats } = useUserStats();

  const MILESTONES = [
    { title: 'Digital Gift Card', cost: 1000, type: 'Financial', brand: 'Amazon', color: 'bg-orange-500' },
    { title: 'Gaming Key Bundle', cost: 2500, type: 'Entertainment', brand: 'Steam', color: 'bg-blue-600' },
    { title: 'Software Subscription', cost: 5000, type: 'Productivity', brand: 'Adobe', color: 'bg-red-500' },
    { title: 'ValCura Premium Pass', cost: 500, type: 'Platform', brand: 'ValCura', color: 'bg-accent' },
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 dark:bg-primary/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Stats Dashboard */}
          <div className="lg:col-span-8">
            <header className="mb-12">
              <div className="flex items-center gap-2 bg-accent/10 border border-accent/20 px-3 py-1 rounded-full w-fit mb-4">
                <Zap size={14} className="text-accent" />
                <span className="text-[10px] font-black uppercase tracking-widest text-accent">Vault Dashboard</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">The Rewards <span className="text-slate-400">Vault</span></h1>
              <p className="text-slate-500 max-w-xl">Monitor your analytical contributions and track your progress toward premium milestones.</p>
            </header>

            {/* Main Stats Card */}
            <div className="bg-primary rounded-[2.5rem] p-12 text-white relative overflow-hidden mb-12 shadow-2xl">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-20"></div>
              
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-accent mb-4">Current Balance</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-7xl font-bold tracking-tighter">{stats.points}</span>
                    <span className="text-xl font-bold text-accent italic">ValPoints</span>
                  </div>
                  <div className="mt-8 flex gap-4">
                    <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/10">
                      <p className="text-[10px] text-slate-400 uppercase font-black mb-1">Rank</p>
                      <p className="text-sm font-bold">Elite Curator</p>
                    </div>
                    <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/10">
                      <p className="text-[10px] text-slate-400 uppercase font-black mb-1">Multiplier</p>
                      <p className="text-sm font-bold text-accent">1.2x Active</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span className="uppercase tracking-widest text-slate-400">Next Milestone</span>
                      <span className="text-accent italic">450 pts remaining</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-accent w-2/3"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                      <p className="text-[10px] text-slate-400 uppercase font-black mb-1">Reviews</p>
                      <p className="text-xl font-bold">{stats.reviewedVideos.length}</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                      <p className="text-[10px] text-slate-400 uppercase font-black mb-1">Watched</p>
                      <p className="text-xl font-bold">{stats.watchedVideos.length}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <AdPlaceholder size="horizontal" />

            {/* Catalog */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white dark:bg-slate-800 flex items-center justify-center rounded-xl shadow-sm">
                    <Gift size={20} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">Digital Catalog</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {MILESTONES.map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center text-white shadow-lg`}>
                        <Ticket size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.brand} {item.type}</p>
                        <h4 className="font-bold text-lg">{item.title}</h4>
                        <div className="flex items-center gap-1 mt-1">
                          <Trophy size={12} className="text-accent" />
                          <span className="text-xs font-black text-primary dark:text-accent">{item.cost} Points</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="rounded-xl font-bold border-slate-200">Redeem</Button>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Right: History & Logs */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 p-8">
                <div className="flex items-center gap-3 mb-8">
                  <History size={18} className="text-accent" />
                  <h4 className="font-bold">Engagement Logs</h4>
                </div>
                <div className="space-y-6">
                  {stats.reviewedVideos.length > 0 ? stats.reviewedVideos.map((id, i) => (
                    <div key={i} className="flex gap-4 group cursor-pointer">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                      <div>
                        <p className="text-xs font-bold leading-tight group-hover:text-accent transition-colors">Analytical review submitted for media#{id}</p>
                        <p className="text-[10px] text-slate-400 mt-1 uppercase font-black tracking-widest">Today • +10 Points</p>
                      </div>
                    </div>
                  )) : (
                    <div className="text-center py-8">
                      <p className="text-xs text-slate-400 font-medium">No activity recorded yet.</p>
                      <Link to="/" className="text-xs font-bold text-accent underline mt-2 inline-block">Start Curating</Link>
                    </div>
                  )}
                </div>
                <Button variant="ghost" className="w-full mt-8 text-xs font-black uppercase tracking-widest hover:bg-slate-50">View Full History</Button>
              </div>

              <AdPlaceholder size="sidebar" />

              <div className="bg-amber-50 dark:bg-amber-950/20 rounded-3xl p-8 border border-amber-100 dark:border-amber-900/30">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-4">
                  <ShieldAlert size={12} /> Global Policy Disclaimer
                </div>
                <p className="text-[10px] text-amber-700 dark:text-amber-500 leading-relaxed font-bold italic">
                  "ValPoints are strictly awarded for media critique, text review submissions, and platform loyalty. ValCura never rewards, incentivizes, or tracks interaction with advertisement blocks."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;