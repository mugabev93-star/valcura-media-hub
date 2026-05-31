import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShieldCheck, Mail, Info, FileText, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const LegalPage = () => {
  const { type } = useParams();
  
  const content = {
    about: {
      title: 'About ValCura',
      subtitle: 'Value through Curation.',
      body: 'ValCura is a premium digital media magazine and loyalty platform. We believe in the power of analytical media consumption. Our platform curates high-quality short-form media and rewards users for providing detailed, text-heavy editorial critiques and analytical feedback. By bridging the gap between premium media and engaged audiences, we build a robust database of media knowledge while maintaining a premium, ad-safe environment.'
    },
    privacy: {
      title: 'Privacy & Cookie Policy',
      subtitle: 'Transparency in data.',
      body: 'At ValCura, we take your privacy seriously. This policy details how we handle engagement tracking and advertisement disclosures. We use cookies strictly for session management and point tracking. We are a Google AdSense compliant platform; we do not track or reward interaction with advertisement blocks. User data is utilized only to personalize your curation feed and reward milestones.'
    },
    tos: {
      title: 'Terms of Service',
      subtitle: 'Platform guidelines.',
      body: 'Access to ValCura is strictly restricted to individuals aged 18 and over. By using this platform, you agree to submit original, non-plagiarized media critiques. ValPoints hold no real-world cash value and are redeemable only for milestones listed in our digital catalog. Attempting to manipulate point tracking or automated engagement will result in permanent account termination.'
    },
    contact: {
      title: 'Contact Support',
      subtitle: 'Get in touch.',
      body: 'Have questions about your ValPoints or a specific curation? Our editorial team is here to help.'
    }
  }[type || 'about'];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-10">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <ChevronRight size={12} />
          <span className="text-primary dark:text-white">{content?.title}</span>
        </div>

        <header className="mb-16">
          <h1 className="text-5xl font-bold tracking-tighter mb-4">{content?.title}</h1>
          <p className="text-xl text-accent font-medium italic">{content?.subtitle}</p>
        </header>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg leading-loose text-slate-600 dark:text-slate-400 mb-12">
            {content?.body}
          </p>

          {type === 'contact' ? (
            <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                    <Input className="bg-white dark:bg-slate-800 h-12 rounded-xl" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                    <Input className="bg-white dark:bg-slate-800 h-12 rounded-xl" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Subject</label>
                  <Input className="bg-white dark:bg-slate-800 h-12 rounded-xl" placeholder="ValPoints Inquiry" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Message</label>
                  <Textarea className="bg-white dark:bg-slate-800 min-h-[150px] rounded-xl" placeholder="How can we help?" />
                </div>
                <Button className="w-full h-14 bg-primary dark:bg-accent dark:text-primary font-bold text-lg rounded-xl">Send Message</Button>
              </form>
            </div>
          ) : (
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl">
                  <ShieldCheck className="text-accent mb-4" size={32} />
                  <h4 className="font-bold mb-2">Policy Verification</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Our infrastructure is audited for AdSense compliance twice annually.</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl">
                  <FileText className="text-accent mb-4" size={32} />
                  <h4 className="font-bold mb-2">Transparent Metrics</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Engagement tracking logs are accessible to users at any time in the Vault.</p>
                </div>
              </div>
              
              <div className="p-8 bg-primary text-white rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-2">Join the Curation Movement</h4>
                  <p className="text-slate-400 text-sm">Become a premium media analyst and start earning today.</p>
                </div>
                <Button className="bg-accent text-primary hover:bg-white font-bold h-12 px-8 rounded-full whitespace-nowrap">
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};