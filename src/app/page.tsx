import Link from 'next/link';
import Image from 'next/image';
import Card from '@/components/Card';
import { promises as fs } from 'fs';
import path from 'path';
import type { Blog, Talk, Video } from '@/types';

async function getRecentPosts<T extends { date: string; type?: string; duration?: string }>(filename: string): Promise<T[]> {
  const filePath = path.join(process.cwd(), 'src', 'data', filename);
  const fileContents = await fs.readFile(filePath, 'utf8');
  let data: T[] = JSON.parse(fileContents);

  // Ensure all items have a valid date
  data = data.filter(item => item.date);

  // For videos, filter out shorts and videos under 3 minutes
  if (filename === 'videos.json') {
    data = data.filter(item => {
      if (item.type === 'short') {
        return false;
      }
      if (item.duration) {
        const parts = item.duration.split(':').map(Number);
        const durationInSeconds = parts.length > 1 ? parts[0] * 60 + parts[1] : parts[0];
        if (durationInSeconds < 180) {
          return false;
        }
      }
      return true;
    });
  }

  // Sort by date in descending order
  const sortedData = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return sortedData.slice(0, 3);
}

export default async function Home() {
  const recentBlogs = await getRecentPosts<Blog>('blog.json');
  const recentTalks = await getRecentPosts<Talk>('talks.json');
  const recentVideos = await getRecentPosts<Video>('videos.json');

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center my-12">
        <Image src="/chatgpt_wildouglas_favicon.png" alt="Ian Douglas Logo" width={128} height={128} className="mx-auto mb-8" />
        <h1 className="text-5xl font-bold tracking-tight text-green-400 sm:text-6xl">
          W. Ian Douglas
        </h1>
        <p className="mt-6 text-lg leading-8 text-green-300 max-w-2xl mx-auto">
          Maker, teacher, trainer, learner. I am a Staff Developer Relations Engineer at Block, working on an open-source AI Agent, called "goose." I am passionate about helping developers learn new skills, and to grow their careers.
        </p>
      </section>

      <section className="my-12">
        <h2 className="text-3xl font-bold mb-8 text-green-400">Latest Blog Posts</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentBlogs.map((post) => (
            <Card key={post.url} item={post} />
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
            <Card key={talk.title} item={{...talk, description: talk.event, url: talk.url || ''}} />
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
            <Card key={video.url} item={video} />
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
