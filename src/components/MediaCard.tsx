import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Star, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export interface MediaItem {
  id: string;
  title: string;
  category: 'Tech' | 'Cinema' | 'Documentary' | 'Gaming';
  thumbnail: string;
  duration: string;
  rating: number;
  reviewCount: number;
  excerpt: string;
  featured?: boolean;
}

export const MEDIA_DATA: MediaItem[] = [
  {
    id: 'tech-01',
    title: 'The Future of Neural Interfaces: Apple Vision Pro 2 Rumors',
    category: 'Tech',
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/055a3091-749c-4745-9084-642576c8d24c/tech-unboxing-cover-471b4f4a-1780218668427.webp',
    duration: '12:45',
    rating: 4.8,
    reviewCount: 124,
    excerpt: 'An analytical breakdown of upcoming spatial computing trends and what we can expect from the next generation of VR.',
    featured: true
  },
  {
    id: 'cinema-01',
    title: 'Midnight in Kyoto: A Masterclass in Visual Storytelling',
    category: 'Cinema',
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/055a3091-749c-4745-9084-642576c8d24c/indie-cinema-cover-9d38628b-1780218669225.webp',
    duration: '18:20',
    rating: 4.9,
    reviewCount: 89,
    excerpt: 'Exploring the lighting techniques and minimalist dialogue that make this indie drama a modern masterpiece.'
  },
  {
    id: 'doc-01',
    title: 'The Hidden Pulse of the Amazon Rainforest',
    category: 'Documentary',
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/055a3091-749c-4745-9084-642576c8d24c/documentary-cover-e96de62f-1780218667648.webp',
    duration: '24:00',
    rating: 4.7,
    reviewCount: 210,
    excerpt: 'A deep dive into the complex ecosystems and conservation efforts required to protect Earth’s most vital biome.'
  },
  {
    id: 'gaming-01',
    title: 'The Resurgence of Retro Aesthetics in Modern RPGs',
    category: 'Gaming',
    thumbnail: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/055a3091-749c-4745-9084-642576c8d24c/gaming-culture-cover-1291fe26-1780218669077.webp',
    duration: '15:30',
    rating: 4.6,
    reviewCount: 156,
    excerpt: 'Why developers are returning to 16-bit art styles to tell more complex, emotionally resonant stories.'
  }
];

export const MediaCard = ({ item }: { item: MediaItem }) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-800"
    >
      <Link to={`/media/${item.id}`} className="block relative aspect-video overflow-hidden">
        <img 
          src={item.thumbnail} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
            <Play size={24} className="text-primary fill-primary ml-1" />
          </div>
        </div>
        <div className="absolute top-4 left-4 bg-primary/40 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">
          {item.category}
        </div>
        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-1">
          <Clock size={10} />
          {item.duration}
        </div>
      </Link>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-0.5 text-accent">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={12} fill={s <= Math.floor(item.rating) ? 'currentColor' : 'none'} />
            ))}
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.reviewCount} Reviews</span>
        </div>
        
        <Link to={`/media/${item.id}`}>
          <h3 className="text-lg font-bold text-primary dark:text-white mb-2 leading-tight group-hover:text-accent transition-colors">
            {item.title}
          </h3>
        </Link>
        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4 leading-relaxed">
          {item.excerpt}
        </p>
        
        <Link 
          to={`/media/${item.id}`} 
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary dark:text-accent group/btn"
        >
          Watch & Review
          <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};