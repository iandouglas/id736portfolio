import { getBlogs, getPublicSpeaking, getTalks, getVideos } from '@/lib/data';
import ContentCard from '@/components/ContentCard';
import Link from 'next/link';

export default function Home() {
  const blogs = getBlogs()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
  const confs = getPublicSpeaking()
    .filter((item) => item.type === 'talk' && item.event_type === 'conference')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
  const workshops = getPublicSpeaking()
    .filter((item) => item.type === 'workshop')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
  const meetups = getTalks()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
  const videos = getVideos()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div>
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Ian Douglas</h1>
        <p className="text-xl text-gray-400">
          Welcome to my portfolio. Here you&apos;ll find my latest work.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Newest Conference Talks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {confs.map((item) => (
            <ContentCard key={item.title} item={item} />
          ))}
        </div>
        <div className="text-right mt-4">
          <Link href="/public-speaking" className="text-blue-400 hover:text-blue-300 font-semibold">
            View More Conference Talks &rarr;
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Newest Workshops</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((item) => (
            <ContentCard key={item.title} item={item} />
          ))}
        </div>
        <div className="text-right mt-4">
          <Link href="/public-speaking" className="text-blue-400 hover:text-blue-300 font-semibold">
            View More Workshops &rarr;
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Newest Meetup Talks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {meetups.map((item) => (
            <ContentCard key={item.title} item={item} />
          ))}
        </div>
        <div className="text-right mt-4">
          <Link href="/talks" className="text-blue-400 hover:text-blue-300 font-semibold">
            View More Meetup Talks &rarr;
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Newest Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((item) => (
            <ContentCard key={item.title} item={item} />
          ))}
        </div>
        <div className="text-right mt-4">
          <Link href="/videos" className="text-blue-400 hover:text-blue-300 font-semibold">
            View More Videos &rarr;
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Newest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((item) => (
            <ContentCard key={item.title} item={item} />
          ))}
        </div>
        <div className="text-right mt-4">
          <Link href="/blogs" className="text-blue-400 hover:text-blue-300 font-semibold">
            View More Blogs &rarr;
          </Link>
        </div>
      </section>

      <section id="about" className="mb-16">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <p className="text-gray-400">
          Placeholder for the about me section.
        </p>
      </section>

      <section id="contact">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <p className="text-gray-400 mb-4">
          You can reach me at iandouglas736@gmail.com or find me on social media.
        </p>
      </section>
    </div>
  );
}