import { promises as fs } from 'fs';
import path from 'path';
import type { PortfolioItem, Blog, Conference, Talk, Video, Workshop } from '@/types';

// Helper function to read and parse a JSON file
async function readJsonFile<T>(filename: string): Promise<T[]> {
  const filePath = path.join(process.cwd(), 'src', 'data', filename);
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export async function getAllPortfolioItems(): Promise<PortfolioItem[]> {
  const conferences = await readJsonFile<Conference>('conferences.json');
  const talks = await readJsonFile<Talk>('talks.json');
  const workshops = await readJsonFile<Workshop>('workshops.json');
  const blogs = await readJsonFile<Blog>('blog.json');
  const videos = await readJsonFile<Video>('videos.json');

  const allItems: PortfolioItem[] = [
    ...conferences.map((item) => ({ ...item, category: 'conference' as const })),
    ...talks.map((item) => ({ ...item, category: 'talk' as const })),
    ...workshops.map((item) => ({ ...item, category: 'workshop' as const })),
    ...blogs.map((item) => ({ ...item, category: 'blog' as const })),
    ...videos.map((item) => ({ ...item, category: 'video' as const })),
  ];

  // Sort by date, newest first
  allItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return allItems;
}
