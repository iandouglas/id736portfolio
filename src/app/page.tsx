import Link from 'next/link';
import Card from '@/components/Card';
import { promises as fs } from 'fs';
import path from 'path';
import type { Blog, Talk, Video, Conference } from '@/types';
import Image from 'next/image';

async function getRecentItems<T extends { date: string }>(
  filename: string,
  filter?: (item: T) => boolean
): Promise<T[]> {
  const filePath = path.join(process.cwd(), 'src', 'data', filename);
  const fileContents = await fs.readFile(filePath, 'utf8');
  let data: T[] = JSON.parse(fileContents);

  if (filter) {
    data = data.filter(filter);
  }

  // Ensure all items have a valid date
  const filteredData = data.filter(item => item.date);

  // Sort by date in descending order
  const sortedData = filteredData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return sortedData.slice(0, 3);
}

export default async function Home() {
  const recentBlogs = await getRecentItems<Blog>('blog.json');
  const recentTalks = await getRecentItems<Talk>('talks.json');
  const recentConferences = await getRecentItems<Conference>('conferences.json');
  const recentVideos = await getRecentItems<Video>('videos.json', (video) => video.type !== 'short');

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center my-12">
        <Image src="https://storage.googleapis.com/swe-sandbox-media/SWE-bench-images/iandouglas-logo.png" alt="Ian Douglas Logo" width={128} height={128} className="mx-auto mb-8" />
        <h1 className="text-5xl font-bold tracking-tight text-vanilla sm:text-6xl">
          Ian Douglas
        </h1>
        <p className="mt-6 text-lg leading-8 text-pearl max-w-2xl mx-auto">
          Maker, teacher, trainer, learner. I am a Developer Advocate at Block, working on an open-source AI Agent, Goose. I am passionate about helping developers learn new skills and grow their careers.
        </p>
      </section>

      <section className="my-12">
        <h2 className="text-3xl font-bold mb-8 text-vanilla">Latest Blog Posts</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentBlogs.map((post) => (
            <Card key={post.url} {...post} category="blog" />
          ))}
        </div>
        <div className="text-right mt-8">
          <Link href="/full-portfolio?category=blog" className="text-moss_green hover:underline">
            See more blog posts &rarr;
          </Link>
        </div>
      </section>

      <section className="my-12">
        <h2 className="text-3xl font-bold mb-8 text-vanilla">Latest Conference Talks</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentConferences.map((talk) => (
            <Card key={talk.title} {...talk} category="conference" />
          ))}
        </div>
        <div className="text-right mt-8">
          <Link href="/full-portfolio?category=conference" className="text-moss_green hover:underline">
            See more conference talks &rarr;
          </Link>
        </div>
      </section>

      <section className="my-12">
        <h2 className="text-3xl font-bold mb-8 text-vanilla">Latest Meetups and Technical Talks</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentTalks.map((talk) => (
            <Card key={talk.title} {...talk} category="talk" />
          ))}
        </div>
        <div className="text-right mt-8">
          <Link href="/full-portfolio?category=talk" className="text-moss_green hover:underline">
            See more talks &rarr;
          </Link>
        </div>
      </section>

      <section className="my-12">
        <h2 className="text-3xl font-bold mb-8 text-vanilla">Latest Videos</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentVideos.map((video) => (
            <Card key={video.url} {...video} category="video" />
          ))}
        </div>
        <div className="text-right mt-8">
          <Link href="/full-portfolio?category=video" className="text-moss_green hover:underline">
            See more videos &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
