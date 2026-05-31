import { useState, useEffect } from 'react';

export type UserStats = {
  points: number;
  watchedVideos: string[];
  reviewedVideos: string[];
  engagementMinutes: number;
};

const STORAGE_KEY = 'valcura_user_stats';

const defaultStats: UserStats = {
  points: 0,
  watchedVideos: [],
  reviewedVideos: [],
  engagementMinutes: 0,
};

export function useUserStats() {
  const [stats, setStats] = useState<UserStats>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultStats;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  }, [stats]);

  const addPoints = (amount: number) => {
    setStats(prev => ({ ...prev, points: prev.points + amount }));
  };

  const markWatched = (videoId: string) => {
    if (!stats.watchedVideos.includes(videoId)) {
      setStats(prev => ({
        ...prev,
        watchedVideos: [...prev.watchedVideos, videoId],
        points: prev.points + 5
      }));
      return true;
    }
    return false;
  };

  const markReviewed = (videoId: string) => {
    if (!stats.reviewedVideos.includes(videoId)) {
      setStats(prev => ({
        ...prev,
        reviewedVideos: [...prev.reviewedVideos, videoId],
        points: prev.points + 10
      }));
      return true;
    }
    return false;
  };

  const addEngagementTime = (minutes: number) => {
    setStats(prev => ({ ...prev, engagementMinutes: prev.engagementMinutes + minutes }));
  };

  return { stats, addPoints, markWatched, markReviewed, addEngagementTime };
}