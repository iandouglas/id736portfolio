import Card from '@/components/Card';
import { promises as fs } from 'fs';
import path from 'path';
import type { Video } from '@/types';

async function getVideos(): Promise<Video[]> {
  const filePath = path.join(process.cwd(), 'src', 'data', 'videos.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const data: Video[] = JSON.parse(fileContents);

  const filteredData = data.filter(item => item.date);

  const sortedData = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return sortedData;
}

export default async function VideosPage() {
  const videos = await getVideos();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-green-400">Videos</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <Card key={video.url} {...video} />
        ))}
      </div>
    </div>
  );
}
