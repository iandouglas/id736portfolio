import { PublicSpeaking, Talk, Video, Blog } from '@/types/content';
import publicSpeakingData from '../../data/public_speaking.json';
import talksData from '../../data/talks.json';
import videosData from '../../data/videos.json';
import blogsData from '../../data/blog.json';

export function getPublicSpeaking(): PublicSpeaking[] {
  return publicSpeakingData as PublicSpeaking[];
}

export function getTalks(): Talk[] {
  return talksData as Talk[];
}

export function getVideos(): Video[] {
  return videosData as Video[];
}

export function getBlogs(): Blog[] {
  return blogsData as Blog[];
}

// Helper function to sort by date (newest first)
export function sortByDate<T extends { date: string }>(items: T[]): T[] {
  return items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get newest conference talks from public speaking
export function getNewestConferenceTalks(limit: number = 3): PublicSpeaking[] {
  const publicSpeaking = getPublicSpeaking();
  const conferenceTalks = publicSpeaking.filter(
    item => item.type === 'talk' && item.event_type === 'conference'
  );
  return sortByDate(conferenceTalks).slice(0, limit);
}

// Get newest workshops from public speaking
export function getNewestWorkshops(limit: number = 3): PublicSpeaking[] {
  const publicSpeaking = getPublicSpeaking();
  const workshops = publicSpeaking.filter(item => item.type === 'workshop');
  return sortByDate(workshops).slice(0, limit);
}

// Get newest meetup talks
export function getNewestMeetupTalks(limit: number = 3): Talk[] {
  const talks = getTalks();
  return sortByDate(talks).slice(0, limit);
}

// Get newest videos
export function getNewestVideos(limit: number = 3): Video[] {
  const videos = getVideos();
  return sortByDate(videos).slice(0, limit);
}

// Get newest blogs
export function getNewestBlogs(limit: number = 3): Blog[] {
  const blogs = getBlogs();
  return sortByDate(blogs).slice(0, limit);
}

// Extract YouTube video ID from embed URL
export function getYouTubeVideoId(url: string): string | null {
  const embedMatch = url.match(/youtube\.com\/embed\/([^?&]+)/);
  if (embedMatch) return embedMatch[1];
  
  const watchMatch = url.match(/youtube\.com\/watch\?v=([^&]+)/);
  if (watchMatch) return watchMatch[1];
  
  const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
  if (shortMatch) return shortMatch[1];
  
  return null;
}
