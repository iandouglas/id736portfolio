import Link from 'next/link';
import Card from '@/components/Card';
import { promises as fs } from 'fs';
import path from 'path';
import type { Blog, Talk, Video } from '@/types';

async function getRecentPosts<T extends { date: string }>(filename: string): Promise<T[]> {
  const filePath = path.join(process.cwd(), 'src', 'data', filename);
  const fileContents = await fs.readFile(filePath, 'utf8');
  const data: T[] = JSON.parse(fileContents);

  // Ensure all items have a valid date
  const filteredData = data.filter(item => item.date);

  // Sort by date in descending order
  const sortedData = filteredData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return sortedData.slice(0, 3);
}

export default async function Home() {
  const recentBlogs = await getRecentPosts<Blog>('blog.json');
  const recentTalks = await getRecentPosts<Talk>('talks.json');
  const recentVideos = await getRecentPosts<Video>('videos.json');

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center my-12">
        <img src="https://storage.googleapis.com/swe-sandbox-media/SWE-bench-images/iandouglas-logo.png" alt="Ian Douglas Logo" className="w-32 h-32 mx-auto mb-8" />
        <h1 className="text-5xl font-bold tracking-tight text-green-400 sm:text-6xl">
          Ian Douglas
        </h1>
        <p className="mt-6 text-lg leading-8 text-green-300 max-w-2xl mx-auto">
          Maker, teacher, trainer, learner. I am a Developer Advocate at Block, working on an open-source AI Agent, Goose. I am passionate about helping developers learn new skills and grow their careers.
        </p>
      </section>

      <section className="my-12">
        <h2 className="text-3xl font-bold mb-8 text-green-400">Latest Blog Posts</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentBlogs.map((post) => (
            <Card key={post.url} {...post} />
          ))}
        </div>
        <div className="text-right mt-8">
          <Link href="/blog" className="text-green-400 hover:underline">
            See more blog posts &rarr;
          </Link>
        </div>
      </section>

      <section className="my-12">
        <h2 className="text-3xl font-bold mb-8 text-green-400">Latest Talks</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentTalks.map((talk) => (
            <Card key={talk.title} {...talk} description={talk.event} url={talk.url || ''} />
          ))}
        </div>
        <div className="text-right mt-8">
          <Link href="/talks" className="text-green-400 hover:underline">
            See more talks &rarr;
          </Link>
        </div>
      </section>

      <section className="my-12">
        <h2 className="text-3xl font-bold mb-8 text-green-400">Latest Videos</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentVideos.map((video) => (
            <Card key={video.url} {...video} />
          ))}
        </div>
        <div className="text-right mt-8">
          <Link href="/videos" className="text-green-400 hover:underline">
            See more videos &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
