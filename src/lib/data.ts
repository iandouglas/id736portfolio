import fs from 'fs';
import path from 'path';
import { Blog, PublicSpeaking, Talk, Video } from '@/types';

const dataDir = path.join(process.cwd(), 'data');

export function getBlogs(): Blog[] {
  const filePath = path.join(dataDir, 'blog.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
}

export function getPublicSpeaking(): PublicSpeaking[] {
  const filePath = path.join(dataDir, 'public_speaking.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
}

export function getTalks(): Talk[] {
  const filePath = path.join(dataDir, 'talks.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
}

export function getVideos(): Video[] {
  const filePath = path.join(dataDir, 'videos.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
}
