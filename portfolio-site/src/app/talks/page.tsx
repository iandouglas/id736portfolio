import Card from '@/components/Card';
import { promises as fs } from 'fs';
import path from 'path';
import type { Talk } from '@/types';

async function getTalks(): Promise<Talk[]> {
  const filePath = path.join(process.cwd(), 'src', 'data', 'talks.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const data: Talk[] = JSON.parse(fileContents);

  const recordedTalks = data.filter(talk => talk.recorded);

  const filteredData = recordedTalks.filter(item => item.date);

  const sortedData = filteredData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return sortedData;
}

export default async function TalksPage() {
  const talks = await getTalks();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-green-400">Talks</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {talks.map((talk) => (
          <Card key={talk.title} {...talk} description={talk.event} url={talk.url || ''} />
        ))}
      </div>
    </div>
  );
}
