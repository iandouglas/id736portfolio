import { promises as fs } from 'fs';
import path from 'path';
import type { PortfolioItem } from '@/types';

// Helper function to read and parse a JSON file
async function readJsonFile<T>(filename: string): Promise<T[]> {
  const filePath = path.join(process.cwd(), 'src', 'data', filename);
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export async function getAllPortfolioItems(): Promise<PortfolioItem[]> {
  const conferences = await readJsonFile<any>('conferences.json');
  const talks = await readJsonFile<any>('talks.json');
  const workshops = await readJsonFile<any>('workshops.json');
  const blogs = await readJsonFile<any>('blog.json');
  const videos = await readJsonFile<any>('videos.json');

  const allItems: PortfolioItem[] = [
    ...conferences.map((item: any) => ({ ...item, category: 'conference' as const })),
    ...talks.map((item: any) => ({ ...item, category: 'talk' as const })),
    ...workshops.map((item: any) => ({ ...item, category: 'workshop' as const })),
    ...blogs.map((item: any) => ({ ...item, category: 'blog' as const })),
    ...videos.map((item: any) => ({ ...item, category: 'video' as const })),
  ];

  // Sort by date, newest first
  allItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return allItems;
}
