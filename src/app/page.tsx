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
          Maker, teacher, trainer, learner. I am a Staff Developer Relations Engineer at Block, working on an open-source AI Agent, called &quot;goose.&quot; I am passionate about helping developers learn new skills, and to grow their careers.
        </p>
      </section>

      <section className="text-left my-12">
        $ ls -l blogs/ | head -n3
        <hr />
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

      <section className="text-left my-12">
        $ ls -l talks/ | head -n3
        <hr />
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

      <section className="text-left my-12">
        $ ls -l videos/ | head -n3
        <hr />
      </section>
      <section className="my-12">
        <h2 className="text-3xl font-bold mb-8 text-green-400">Latest Videos</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentVideos.map((video) => (
            <Card key={video.url} item={video} />
          ))}
        </div>
        <div className="text-right mt-8">
          <div id="about-me"></div>
          <Link href="/videos" className="text-green-400 hover:underline">
            See more videos &rarr;
          </Link>
        </div>
      </section>
      <section className="text-left my-12">
        $ cat about-me.txt
        <hr />
      </section>

      <section className="text-left my-12">
        <p className="mt-6 text-3xl leading-8 text-green-300 max-w-4xl mx-auto">
          About me
        </p>
        <p className="mt-6 text-lg leading-8 text-green-300 max-w-4xl mx-auto">
          I&apos;m an educator. My entire life I&apos;ve been led by an inate curiosity to learn how everything works around me. This has driven me into all corners of the tech industry from finance to gaming to education technology to teaching to marketing to email processing and building newsfeeds/timelines to hosting platforms and system adminstration to deep database internals.
        </p>
        <p className="mt-6 text-lg leading-8 text-green-300 max-w-4xl mx-auto">
          I&apos;ve also been in the tech industry long enough to see several cycles of crazy hiring and massive layoffs.
        </p>
        <p className="mt-6 text-lg leading-8 text-green-300 max-w-4xl mx-auto">
          My strengths lie in API development, working with SDKs, system integrations and automation, and buliding things to scale to tens or hundreds of millions of users. I&apos;ve also held roles in DevOps/SRE, database administration (DBA), sales engineering, solution engineering, consulting/freelance, and even dabbled in some data analytics.
        </p>
        <p className="mt-6 text-lg leading-8 text-green-300 max-w-4xl mx-auto">
          I love to learn a thing and then teach it to others. I enjoy showing how I build solutions, and making the content as accessible as possible to everyone who wants to consume that content.
        </p>
      </section>
      <section className="text-left my-12">
        <p className="mt-6 text-3xl leading-8 text-green-300 max-w-4xl mx-auto">
          What&apos;s with the &quot;W&quot;?
        </p>
        <p className="mt-6 text-lg leading-8 text-green-300 max-w-4xl mx-auto">
          I was born Ian William Douglas in Canada. My family has had a William Douglas in every generation dating back as far as we can track into the UK and Scotland. Family rumor is that we decent from the William Douglas who reluctantly jailed Queen Mary of the Scots at his castle, but also likely aided in freeing her as well. We can&apos;t verify the lineage but there are several notable William Douglas characters in Scottish history. The Douglas family still has castles and ruins in Scotland that I hope to visit in the near future.
        </p>
        <p className="mt-6 text-lg leading-8 text-green-300 max-w-4xl mx-auto">
          When I became a US Citizen in 2019, I reversed &quot;Ian William&quot; to &quot;William Ian&quot; so I an now, legally, William Ian Douglas. However, since I&apos;ve gone by Ian my entire life, I answer to Ian more quickly than calling me William.
        </p>
        <p className="mt-6 text-lg leading-8 text-green-300 max-w-4xl mx-auto">
          The domain, wildouglas is not just a shortened version of &quot;William&quot; into &quot;Wil&quot;, though I have debated signing things as &quot;Wil&quot;. I have another middle name that starts with L, so you can think of the domain as my first three initials, &quot;W.I.L.&quot; and my family name of Douglas.
        </p>
      </section>
      <section className="text-left my-12">
        <p className="mt-6 text-2xl leading-8 text-green-300 max-w-4xl mx-auto">
          I live by two mottos:
        </p>
        <p className="mt-6 text-2xl leading-8 text-green-300 max-w-4xl mx-auto">
          1. Done is better than perfect.
        </p>
        <p className="mt-6 text-lg leading-8 text-green-300 max-w-4xl mx-auto">
          Sometimes quoted as &quot;perfect is the enemy of done.&quot; Sometimes, as much as we all want the super-polished &apos;thing&apos; out there, we need to swallow our pride, take a micro-dose of apathy and realize that &quot;good enough is good enough.&quot;
        </p>
        <p className="mt-6 text-lg leading-8 text-green-300 max-w-4xl mx-auto">
          This has worked tremendously well in my career working at startups. Launch time is more important than that last bit of awesome UI/UX you want to build, or that documentation you SWEAR you&apos;re going to write. (Narrator: you will not) At other jobs, even startup environments, I&apos;ve had work held up because someone deemed the quality not to be the highest possible, and watch my efforts get bottlenecked.
        </p>
        <p className="mt-6 text-lg leading-8 text-green-300 max-w-4xl mx-auto">
          I have also rebuilt and redesigned and rethought and replanned this blog for almost a decade. And now it&apos;s good enough to at least get out there. It can always improve. And when Next.js isn&apos;t the greatest craze any more, I&apos;ll probably switch it to something else.
        </p>
        <p className="mt-6 text-2xl leading-8 text-green-300 max-w-4xl mx-auto">
          2. Share what you know, and we all win.
        </p>
        <p className="mt-6 text-lg leading-8 text-green-300 max-w-4xl mx-auto">
          I&apos;ve seen groundbreaking technologies left on the side of the road the moment the new hotness comes in. And how people jump on the popular tools for a while then move on. Case in point: Sublime Text, which gave way to Atom by GitHub, which gave way to VSCode by Microsoft...
        </p>
        <p className="mt-6 text-lg leading-8 text-green-300 max-w-4xl mx-auto">
          How we did things back then isn&apos;t how we work now. In the tech industry you have to CONSTANTLY be learning. Try a thing, analyze the result, make a change, repeat. Soon you&apos;ll be good enough to show others what you know, and hopefully teach them to avoid the traps you fell into along the way. Now we&apos;re ALL better for it.
        </p>
        <p className="mt-6 text-lg leading-8 text-green-300 max-w-4xl mx-auto">
        </p>
      </section>
    </div>
  );
}
