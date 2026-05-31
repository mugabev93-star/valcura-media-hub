import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Header, Footer } from '@/components/Layout';
import Home from '@/pages/Home';
import MediaHub from '@/pages/MediaHub';
import Rewards from '@/pages/Rewards';
import Blog from '@/pages/Blog';
import { LegalPage } from '@/pages/Legal';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-accent selection:text-primary">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/media/:id" element={<MediaHub />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/legal/:type" element={<LegalPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" expand={false} richColors />
      </div>
    </Router>
  );
}

export default App;