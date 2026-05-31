import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, 
  MessageSquare, 
  Share2, 
  ThumbsUp, 
  Clock, 
  ChevronRight,
  Info,
  Trophy,
  CheckCircle2,
  Play
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { AdPlaceholder } from '@/components/AdPlaceholder';
import { MEDIA_DATA } from '@/components/MediaCard';
import { useUserStats } from '@/lib/store';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

const MediaHub = () => {
  const { id } = useParams();
  const { markWatched, markReviewed } = useUserStats();
  const item = MEDIA_DATA.find(m => m.id === id);
  
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [isWatching, setIsWatching] = useState(false);
  const [watchProgress, setWatchProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isReviewed, setIsReviewed] = useState(false);

  useEffect(() => {
    if (isWatching && watchProgress < 100) {
      const timer = setInterval(() => {
        setWatchProgress(prev => {
          const next = prev + 1;
          if (next >= 100) {
            clearInterval(timer);
            handleWatchComplete();
          }
          return next;
        });
      }, 300); // Simulated watch speed for demo
      return () => clearInterval(timer);
    }
  }, [isWatching, watchProgress]);

  const handleWatchComplete = () => {
    const earned = markWatched(id!);
    if (earned) {
      toast.success('+5 ValPoints Earned', {
        description: 'You finished watching the curated media segment.',
        icon: <Trophy className="text-accent" />
      });
    }
    setIsCompleted(true);
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating || review.length < 20) {
      toast.error('Review too short', { description: 'Please provide a detailed analytical review (min. 20 chars).' });
      return;
    }
    
    const earned = markReviewed(id!);
    if (earned) {
      toast.success('+10 ValPoints Earned', {
        description: 'Thank you for your analytical contribution.',
        icon: <Trophy className="text-accent" />
      });
    }
    setIsReviewed(true);
    setReview('');
    setRating(0);
  };

  if (!item) return <div className="pt-32 text-center">Content not found</div>;

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">
          <Link to="/" className="hover:text-accent transition-colors">Magazine</Link>
          <ChevronRight size={12} />
          <span className="text-slate-500">{item.category}</span>
          <ChevronRight size={12} />
          <span className="text-primary dark:text-white">{item.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-8">
            <h1 className="text-3xl md:text-5xl font-bold text-primary dark:text-white mb-6 tracking-tighter leading-tight">
              {item.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-xs">VC</div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest leading-none">Curated By</p>
                  <p className="text-xs font-bold">ValCura Editorial</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-400">
                <div className="flex items-center gap-1 text-xs font-medium">
                  <Clock size={14} /> {item.duration}
                </div>
                <div className="flex items-center gap-1 text-xs font-medium">
                  <Star size={14} className="text-accent fill-accent" /> {item.rating}
                </div>
              </div>
            </div>

            {/* Video Player Framework */}
            <div className="relative aspect-video bg-black rounded-3xl overflow-hidden mb-12 shadow-2xl group">
              {!isWatching && !isCompleted ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                  <img src={item.thumbnail} className="absolute inset-0 w-full h-full object-cover opacity-60" alt="" />
                  <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"></div>
                  <Button 
                    onClick={() => setIsWatching(true)}
                    className="relative w-20 h-20 bg-accent text-primary hover:scale-110 transition-transform rounded-full flex items-center justify-center p-0 shadow-[0_0_50px_rgba(0,245,160,0.3)]"
                  >
                    <Play size={32} className="fill-primary ml-1" />
                  </Button>
                  <p className="relative mt-6 text-white font-bold uppercase tracking-widest text-xs">Start Curation Segment</p>
                </div>
              ) : isWatching && !isCompleted ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary p-12 text-center">
                  <div className="w-24 h-24 mb-8 relative">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
                      <motion.circle 
                        cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="4" 
                        strokeDasharray="283"
                        strokeDashoffset={283 - (283 * watchProgress) / 100}
                        className="text-accent"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-black text-white">{Math.round(watchProgress)}%</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Analyzing Media Content...</h3>
                  <p className="text-slate-400 text-sm max-w-xs">Please keep this tab active to complete your engagement tracking.</p>
                </div>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-accent text-primary p-12 text-center">
                  <CheckCircle2 size={64} className="mb-4" />
                  <h3 className="text-2xl font-black uppercase tracking-tighter">Curation Complete</h3>
                  <p className="font-bold">+5 ValPoints Awarded</p>
                  <Button variant="ghost" className="mt-8 border-2 border-primary font-bold hover:bg-primary hover:text-white" onClick={() => setIsCompleted(false)}>Re-watch Segment</Button>
                </div>
              )}
            </div>

            {/* Editorial Block */}
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-[2.5rem] p-8 md:p-12 mb-12 border border-slate-100 dark:border-slate-800 relative">
              <div className="absolute -top-4 left-12 bg-primary dark:bg-accent px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-white dark:text-primary shadow-lg">
                Editorial & Review Block
              </div>
              
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-lg font-bold text-primary dark:text-white mb-6 leading-relaxed italic">
                  "ValCura editors believe this segment represents a pivotal shift in {item.category} discourse. Our analysis highlights the nuanced approach to {item.excerpt.split(' ').slice(0, 5).join(' ')}."
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-loose mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sempiternum iter est inter stellas, sed hinc incipit. In the realm of digital media, we often overlook the underlying architecture that sustains long-term engagement. This specific video segment challenges the status quo by introducing a dialectical perspective on contemporary aesthetics.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                    <h4 className="font-bold text-xs uppercase tracking-widest text-accent mb-3">Key Analytical Insight</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">The composition utilizes a 1.85:1 aspect ratio to create an intimate, yet expansive viewing experience that mirrors the internal monologue of the subjects.</p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                    <h4 className="font-bold text-xs uppercase tracking-widest text-accent mb-3">Community Consensus</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">92% of ValCura curators agreed that the second act of this presentation provides the most actionable technical information.</p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-loose">
                  To truly appreciate the depth of this curation, one must look beyond the surface-level production value. We recommend focusing on the sound design in the final third, which utilizes binaural recordings to immerse the curator in the environment described. This is the hallmark of ValCura's commitment to high-end media discovery.
                </p>
              </div>
            </div>

            <AdPlaceholder size="horizontal" />

            {/* Review Section */}
            <section id="reviews" className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">Curator Interaction</h2>
                  <p className="text-xs text-slate-500 uppercase font-black tracking-widest mt-1">Submit Analysis for +10 Points</p>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare size={18} className="text-slate-400" />
                  <span className="text-sm font-bold">{item.reviewCount + (isReviewed ? 1 : 0)} Responses</span>
                </div>
              </div>

              {!isReviewed ? (
                <form onSubmit={handleSubmitReview} className="space-y-8">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-4">Your Analytical Rating</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <button 
                          key={s} 
                          type="button"
                          onClick={() => setRating(s)}
                          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                            rating >= s ? 'bg-accent text-primary' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 hover:bg-slate-200'
                          }`}
                        >
                          <Star size={20} fill={rating >= s ? 'currentColor' : 'none'} />
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-4">Analytical Critique (Text Layer)</label>
                    <Textarea 
                      placeholder="Discuss the editorial breakdown above. What did we miss? How would you rate the value of this curation?"
                      className="min-h-[150px] bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 focus:ring-accent rounded-2xl p-6"
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                    />
                    <div className="flex justify-between items-center mt-3">
                      <p className="text-[10px] text-slate-400 font-medium">Min. 20 characters for reward eligibility.</p>
                      <p className="text-[10px] text-slate-400 font-medium">{review.length} characters</p>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full h-14 bg-primary dark:bg-accent dark:text-primary hover:scale-[1.02] transition-transform font-bold text-lg rounded-2xl"
                  >
                    Submit Review & Earn +10 Points
                  </Button>
                </form>
              ) : (
                <div className="p-8 bg-accent/10 border border-accent/20 rounded-3xl text-center">
                  <div className="w-16 h-16 bg-accent text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Analysis Submitted!</h3>
                  <p className="text-slate-500 text-sm mb-6">Your contribution has been added to the ValCura database. You earned +10 points.</p>
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-primary rounded-xl" onClick={() => setIsReviewed(false)}>Submit Another Thought</Button>
                </div>
              )}

              <div className="mt-12 pt-12 border-t border-slate-100 dark:border-slate-800 space-y-8">
                {[1, 2].map((i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 shrink-0"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-bold">Curator_{120 + i}</h4>
                        <div className="flex text-accent">
                          {[1, 2, 3, 4, 5].map(s => <Star key={s} size={10} fill="currentColor" />)}
                        </div>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed">The editorial analysis of the cinematography in this piece was spot on. I particularly enjoyed the breakdown of the lighting choices in the opening scene.</p>
                      <div className="flex items-center gap-4 mt-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <button className="flex items-center gap-1 hover:text-accent transition-colors"><ThumbsUp size={12} /> Insightful</button>
                        <button className="hover:text-accent transition-colors">Reply</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              {/* Engagement Stats Widget */}
              <div className="bg-primary rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -translate-y-12 translate-x-12"></div>
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-accent mb-6">ValCura Hub Stats</h4>
                <div className="space-y-6 relative z-10">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Curation Points</p>
                      <p className="text-3xl font-bold tracking-tighter">+15 Points Total</p>
                    </div>
                    <div className="bg-white/10 px-2 py-1 rounded text-[10px] font-bold">AVAILABLE</div>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-accent" 
                      initial={{ width: 0 }}
                      animate={{ width: isCompleted ? '100%' : '50%' }}
                    />
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-xs font-medium">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center ${isCompleted ? 'bg-accent text-primary' : 'border border-white/20 text-white/20'}`}>
                        <CheckCircle2 size={10} />
                      </div>
                      Watch Media Segment (+5)
                    </li>
                    <li className="flex items-center gap-2 text-xs font-medium">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center ${isReviewed ? 'bg-accent text-primary' : 'border border-white/20 text-white/20'}`}>
                        <CheckCircle2 size={10} />
                      </div>
                      Submit Analytical Review (+10)
                    </li>
                  </ul>
                </div>
              </div>

              <AdPlaceholder size="sidebar" />

              <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-sm mb-6 flex items-center gap-2">
                  <Share2 size={16} className="text-accent" />
                  Share Curation
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="rounded-xl text-xs font-bold border-slate-200">Twitter</Button>
                  <Button variant="outline" className="rounded-xl text-xs font-bold border-slate-200">Reddit</Button>
                  <Button variant="outline" className="rounded-xl text-xs font-bold border-slate-200 col-span-2">Copy Curation Link</Button>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">
                  <Info size={12} /> Policy Disclaimer
                </div>
                <p className="text-[10px] text-slate-500 leading-relaxed font-medium">
                  ValPoints are strictly awarded for media critique, text review submissions, and platform loyalty. ValCura never rewards, incentivizes, or tracks interaction with advertisement blocks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaHub;