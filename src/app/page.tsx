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
    <div>
      <section>
        <Image src="https://storage.googleapis.com/swe-sandbox-media/SWE-bench-images/iandouglas-logo.png" alt="Ian Douglas Logo" width={128} height={128} />
        <h1>
          Ian Douglas
        </h1>
        <p>
          Maker, teacher, trainer, learner. I am a Developer Advocate at Block, working on an open-source AI Agent, Goose. I am passionate about helping developers learn new skills and grow their careers.
        </p>
      </section>

      <section>
        <h2>Latest Blog Posts</h2>
        <div>
          {recentBlogs.map((post) => (
            <Card key={post.url} {...post} category="blog" />
          ))}
        </div>
        <div>
          <Link href="/full-portfolio?category=blog">
            See more blog posts &rarr;
          </Link>
        </div>
      </section>

      <section>
        <h2>Latest Conference Talks</h2>
        <div>
          {recentConferences.map((talk) => (
            <Card key={talk.title} {...talk} category="conference" />
          ))}
        </div>
        <div>
          <Link href="/full-portfolio?category=conference">
            See more conference talks &rarr;
          </Link>
        </div>
      </section>

      <section>
        <h2>Latest Meetups and Technical Talks</h2>
        <div>
          {recentTalks.map((talk) => (
            <Card key={talk.title} {...talk} category="talk" />
          ))}
        </div>
        <div>
          <Link href="/full-portfolio?category=talk">
            See more talks &rarr;
          </Link>
        </div>
      </section>

      <section>
        <h2>Latest Videos</h2>
        <div>
          {recentVideos.map((video) => (
            <Card key={video.url} {...video} category="video" />
          ))}
        </div>
        <div>
          <Link href="/full-portfolio?category=video">
            See more videos &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
