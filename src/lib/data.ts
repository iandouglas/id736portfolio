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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const conferences = await readJsonFile<any>('conferences.json');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const talks = await readJsonFile<any>('talks.json');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const workshops = await readJsonFile<any>('workshops.json');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const blogs = await readJsonFile<any>('blog.json');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const videos = await readJsonFile<any>('videos.json');

  const allItems: PortfolioItem[] = [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...conferences.map((item: any) => ({ ...item, category: 'conference' as const })),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...talks.map((item: any) => ({ ...item, category: 'talk' as const })),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...workshops.map((item: any) => ({ ...item, category: 'workshop' as const })),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...blogs.map((item: any) => ({ ...item, category: 'blog' as const })),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...videos.map((item: any) => ({ ...item, category: 'video' as const })),
  ];

  // Sort by date, newest first
  allItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return allItems;
}
