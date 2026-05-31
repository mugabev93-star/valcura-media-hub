import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, ArrowRight, Clock, Star } from 'lucide-react';
import { AdPlaceholder } from '@/components/AdPlaceholder';

const Blog = () => {
  const ARTICLES = [
    {
      title: 'The Rise of Aesthetic Curation in Short-Form Media',
      category: 'Analysis',
      author: 'Elias Thorne',
      date: 'Oct 24, 2023',
      excerpt: 'How platform algorithms are shifting from mindless scrolling to intentional engagement through curated media hubs.',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/055a3091-749c-4745-9084-642576c8d24c/valcura-brand-hero-9c920a6e-1780218668546.webp'
    },
    {
      title: 'Why Text-Based Reviews Still Matter in the Video Era',
      category: 'Industry',
      author: 'Marcus Vane',
      date: 'Oct 22, 2023',
      excerpt: 'The psychological impact of analytical writing on media retention and community building within tech ecosystems.',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/055a3091-749c-4745-9084-642576c8d24c/tech-unboxing-cover-471b4f4a-1780218668427.webp'
    },
    {
      title: 'Cinematography Trends: Minimalism in 2024',
      category: 'Cinema',
      author: 'Sarah Jenkins',
      date: 'Oct 20, 2023',
      excerpt: 'Exploring the return to static shots and natural lighting in modern indie film production and digital documentaries.',
      image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/055a3091-749c-4745-9084-642576c8d24c/indie-cinema-cover-9d38628b-1780218669225.webp'
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <header className="mb-16">
          <div className="flex items-center gap-2 bg-primary dark:bg-accent/10 border border-primary/10 dark:border-accent/20 px-3 py-1 rounded-full w-fit mb-4">
            <Newspaper size={14} className="text-accent" />
            <span className="text-[10px] font-black uppercase tracking-widest text-accent">Editorial Hub</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">ValCura <span className="text-slate-400">Editorial</span></h1>
          <p className="text-slate-500 mt-4 max-w-xl">Deep-dives, industry analysis, and the future of digital curation.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-12">
            {ARTICLES.map((article, i) => (
              <article key={i} className="group flex flex-col md:flex-row gap-8 pb-12 border-b border-slate-100 dark:border-slate-800 last:border-0">
                <div className="md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden shrink-0">
                  <img src={article.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={article.title} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">
                    <span className="text-accent">{article.category}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors leading-tight">{article.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800"></div>
                      <span className="text-xs font-bold">{article.author}</span>
                    </div>
                    <Link to="#" className="text-xs font-black uppercase tracking-widest flex items-center gap-2 group/btn">
                      Read Article <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
            
            <AdPlaceholder size="multiplex" />
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              <div className="bg-primary p-8 rounded-[2rem] text-white">
                <h4 className="text-lg font-bold mb-4">Newsletter</h4>
                <p className="text-sm text-slate-400 mb-6">Receive the best of ValCura curation directly in your inbox.</p>
                <div className="space-y-3">
                  <input className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-sm" placeholder="Email Address" />
                  <button className="w-full h-12 bg-accent text-primary font-bold rounded-xl text-sm">Subscribe</button>
                </div>
              </div>

              <AdPlaceholder size="sidebar" />

              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-[2rem]">
                <h4 className="font-bold mb-6">Trending Analysis</h4>
                <div className="space-y-6">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex gap-4 group cursor-pointer">
                      <span className="text-2xl font-black text-slate-200 dark:text-slate-800 group-hover:text-accent transition-colors">0{i}</span>
                      <div>
                        <h5 className="text-sm font-bold leading-tight mb-1">Impact of AI on Documentary Narrative Structures</h5>
                        <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">5 min read</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;